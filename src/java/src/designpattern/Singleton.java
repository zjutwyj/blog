package designpattern;

public class Singleton {

	private Singleton() {
		System.out.println("Singleton is create");
	}

	private static class SingletonHolder {
		private static Singleton instance = new Singleton();
	}

	private static Singleton getInstance() {
		return SingletonHolder.instance;
	}

	public static void main(String[] args) {

		// 适用于频繁使用的对象， 可以省略创建对象所花费的时间

		long beginTime = System.currentTimeMillis();

		for (int i = 0; i < 1000; i++) {
			Singleton.getInstance();
		}

		System.out.println("spend:" + (System.currentTimeMillis() - beginTime));
	}

}
