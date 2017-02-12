package module;

public class EmployeeReportManager implements IReportManager {

	protected String tenantId = null;

	public EmployeeReportManager(String tenantId) {
		this.tenantId = tenantId;
	}

	@Override
	public String createReport() {
		// TODO Auto-generated method stub
		return "this is a employee report";
	}

}
