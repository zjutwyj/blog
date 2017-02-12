package module;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;

public class JdkDbQreryHandler implements InvocationHandler{
	DBQuery real = null; // 主题接口

	@Override
	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
		// TODO Auto-generated method stub
		if (real == null) {
			real = new DBQuery();
		}
		return real.request();
	}
}
