package guardedsuspension;

import java.util.LinkedList;

interface Data {
	public String getResult();
}

class FutureData implements Data{

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
}

class ServerThread extends Thread {
	private RequestQueue requestQueue;
	public ServerThread(RequestQueue requestQueue, String name){
		super(name);
		this.requestQueue = requestQueue;
	}
	public void run(){
		while(true){
			final Request request = requestQueue.getRequest();
			final FutureData future = (FutureData) request.getResponse();
			
		}
	}
}

public class GuardedSuspension {

	public static void main(String[] args) {

	}

}
