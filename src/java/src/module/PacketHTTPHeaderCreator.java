package module;

public class PacketHTTPHeaderCreator extends PacketDecorator {

	public PacketHTTPHeaderCreator(IPacketCreator c) {
		super(c);
	}

	@Override
	public String handleContent() {
		StringBuffer sb = new StringBuffer();

		sb.append("Cacje=Control:no-cache\n");
		sb.append("Date:Mon,31Dec201204:25:57GMT\n");
		sb.append(component.handleContent());

		return sb.toString();
	}

}
