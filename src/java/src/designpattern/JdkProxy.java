package designpattern;

import java.lang.reflect.Proxy;

import module.IDBQuery;
import module.JdkDbQreryHandler;

/**
 * JDK版代理模式
 * 
 * @author yongjin
 *
 */
public class JdkProxy {

	public static IDBQuery createJdkProxy() {
		IDBQuery jdkProxy = (IDBQuery) Proxy.newProxyInstance(ClassLoader.getSystemClassLoader(),
				new Class[] { IDBQuery.class }, new JdkDbQreryHandler()); // 指定Handler
		return jdkProxy;
	}

	public static void main(String args[]) {
		IDBQuery d = null;
		long begin = System.currentTimeMillis();
		d = createJdkProxy();
		System.out.println("createJdkProxy:" + (System.currentTimeMillis() - begin));

		System.out.println("JdkProxy class:" + d.getClass().getName());

		begin = System.currentTimeMillis();
		for (int i = 0; i < 30000000; i++) {
			d.request();
		}
		System.out.println("callJdkProxy:" + (System.currentTimeMillis() - begin));
	}

}
