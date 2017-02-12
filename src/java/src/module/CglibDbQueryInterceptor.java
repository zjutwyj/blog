package module;

import java.lang.reflect.Method;

import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

public class CglibDbQueryInterceptor implements MethodInterceptor {

	@Override
	public Object intercept(Object arg0, Method arg1, Object[] arg2, MethodProxy arg3) throws Throwable {
		IDBQuery real = null;
		// TODO Auto-generated method stub
		if (real == null) {
			real = new DBQuery();
		}
		return real.request();
	}

}
