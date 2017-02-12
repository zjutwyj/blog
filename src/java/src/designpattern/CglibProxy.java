package designpattern;

import module.CglibDbQueryInterceptor;
import module.IDBQuery;
import net.sf.cglib.proxy.Enhancer;

public class CglibProxy {

	public static IDBQuery createCglibProxy() {

		Enhancer enhancer = new Enhancer();

		enhancer.setCallback(new CglibDbQueryInterceptor()); // 指定切入器，定义代理类逻辑

		enhancer.setInterfaces(new Class[] { IDBQuery.class }); // 指定实现的接口

		IDBQuery cglibProxy = (IDBQuery) enhancer.create(); // 生成代理类的实例

		return cglibProxy;

	}

	public static void main(String[] args) {
		
		IDBQuery d = null;
		
		long begin = System.currentTimeMillis();
		
		d = createCglibProxy();
		
		System.out.println("createCglibProxy:" + (System.currentTimeMillis() - begin));

		System.out.println("cglibProxy class:" + d.getClass().getName());

		begin = System.currentTimeMillis();
		
		for (int i = 0; i < 30000000; i++) {
			d.request();
		}
		
		System.out.println("callCglibProxy:" + (System.currentTimeMillis() - begin));
		

	}

}
