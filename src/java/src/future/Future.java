package future;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.FutureTask;

// 定义一个任务类
class Task implements Callable<String> {
	private String para;

	public Task(String para) {
		this.para = para;
	}

	public String call() throws Exception {
		Thread.sleep(1000);
		System.out.println("Future执行完毕！");
		return para;
	}
}

public class Future {

	public static void main(String[] args) throws InterruptedException,
			ExecutionException {
		FutureTask<String> future = new FutureTask<String>(new Task("a"));
		ExecutorService executor = Executors.newScheduledThreadPool(1);
		executor.submit(future);
		System.out.println("请求完毕！接着执行其它操作");
		Thread.sleep(5000); // 其它操作
		System.out.println("其它操作执行完毕， Future数据 = " + future.get());

		// Console
		// 请求完毕！接着执行其它操作
		// Future执行完毕！
		// 其它操作执行完毕， Future数据 = a
	}

}
