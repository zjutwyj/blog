package module;

import java.util.HashMap;
import java.util.Map;

public class ReportManagerFactory {
	Map<String, IReportManager> financialReportManger = new HashMap<String, IReportManager>();
	Map<String, IReportManager> emplyeeReportManager = new HashMap<String, IReportManager>();

	public IReportManager getFinancialReportManger(String tenantId) {
		IReportManager r = financialReportManger.get(tenantId);
		if (r == null) {
			r = new FinancialReportManager(tenantId);
			financialReportManger.put(tenantId, r);
		}
		return r;
	}

	public IReportManager getEmplyeeReportManager(String tenantId) {
		IReportManager r = emplyeeReportManager.get(tenantId);
		if (r == null) {
			r = new EmployeeReportManager(tenantId);
			emplyeeReportManager.put(tenantId, r);
		}
		return r;
	}
}
