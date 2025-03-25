import Image from "next/image";
import DisableDNSBlocking from "./disable-dns-blocking";

export default function Home() {
	return (
		<div>
			<h1>Pi-hole Easy Control</h1>
			<DisableDNSBlocking />
		</div>
	);
}
