package designpattern;

import module.IReportManager;
import module.ReportManagerFactory;

/**
 * 享云模式
 * 
 * @author yongjin
 *
 */
public class FlyWeight {

	public static void main(String[] args) {
		ReportManagerFactory fw = new ReportManagerFactory();
		IReportManager im = fw.getFinancialReportManger("A");
		System.out.println(im.createReport());
	}

}
