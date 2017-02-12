package designpattern;

import module.IPacketCreator;
import module.PacketBodyCreator;
import module.PacketHTMLHeaderCreator;
import module.PacketHTTPHeaderCreator;

/**
 * 装饰者模式
 * 
 * @author yongjin
 *
 */
public class Decorator {

	public static void main(String[] args) {

		IPacketCreator pc = new PacketHTTPHeaderCreator(new PacketHTMLHeaderCreator(new PacketBodyCreator()));

		System.out.println(pc.handleContent());
	}

}
