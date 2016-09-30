package guardedsuspension;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.FutureTask;

interface Data {
	public String getResult();
}

class FutureData implements Data {

	public String getResult() {
		// TODO Auto-generated method stub
		return null;
	}

}

class Request {
	private String name;
	private Data response;

	public synchronized Data getResponse() {
		return response;
	}

	public synchronized void setResponse(Data response) {
		this.response = response;
	}

	public Request(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public String toString() {
		return "[ Request " + name + "] ";
	}
}

class RequestQueue {
	private LinkedList queue = new LinkedList();

	public synchronized Request getRequest() {
		while (queue.size() == 0) {
			try {
				wait();// 等待直到有新的Request加入
			} catch (InterruptedException e) {
			}
		}
		return (Request) queue.remove();
	}

	public synchronized void addRequest(Request request) {
		queue.add(request); // 加入新的request请求
		notifyAll(); // 通知getRequest()方法
	}
}

class Task implements Callable<String> {
	private String para;

	public Task(String para) {
		this.para = para;
	}

	@Override
	public String call() throws Exception {
		Thread.sleep(1000);
		return para;
	}
}

class ServerThread extends Thread {
	private RequestQueue requestQueue;

	public ServerThread(RequestQueue requestQueue, String name) {
		super(name);
		this.requestQueue = requestQueue;
	}

	public void run() {
		while (true) {
			final Request request = requestQueue.getRequest();

			FutureTask<String> future = new FutureTask<String>(new Task(request.getName()));
			ExecutorService executor = Executors.newFixedThreadPool(1);
			executor.submit(future);

			System.out.println(Thread.currentThread().getName() + " handles" + request);

		}
	}
}

class ClientThread extends Thread {

	private RequestQueue requestQueue;

	private List<Request> myRequest = new ArrayList<Request>();

	public ClientThread(RequestQueue requestQueue, String name) {
		super(name);
		this.requestQueue = requestQueue;
	}

	public void run() {
		for (int i = 0; i < 10; i++) {
			Request request = new Request("RequestID:" + i + " Thread_Name " + Thread.currentThread().getName());
			System.out.println(Thread.currentThread().getName() + " requests " + request);

			// 设置一个futureData的返回值
			request.setResponse(new FutureData());
			requestQueue.addRequest(request);
			// 发送请求
			myRequest.add(request);
			// 这里可以做一些额外的业务处理，等待服务端装配数据
			try {
				Thread.sleep(1000);
			} catch (Exception ex) {
			}

			for (Request r : myRequest) {
				System.out.println("ClientThread Name is : " + Thread.currentThread().getName() + " Reponse is:"
						+ r.getResponse().getResult()); // 如果服务器还没有执行完，这里会等待
			}
		}
	}
}

public class GuardedSuspension {

	public static void main(String[] args) {
		// 请求队列
		RequestQueue requestQueue = new RequestQueue();
		for (int i = 0; i < 10; i++) {
			// 服务器进程开启
			new ServerThread(requestQueue, "ServerThread" + i).start();
		}
		for (int j = 0; j < 10; j++) {
			// 请求进程开启
			new ClientThread(requestQueue, "ClientThread" + j).start();
		}
	}

}
