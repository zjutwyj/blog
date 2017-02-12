package module;

public class FinancialReportManager implements IReportManager {

	protected String tenantId = null;

	public FinancialReportManager(String tenantId) {
		this.tenantId = tenantId;
	}

	@Override
	public String createReport() {
		// TODO Auto-generated method stub
		return "this is a finacial report";
	}

}
