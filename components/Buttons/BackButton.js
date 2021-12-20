import IcoButton from "./IcoButton";
import Image from "next/image";
import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();

  return (
    <IcoButton onClick={() => router.back()}>
      <Image src="/icons/icoArrow.svg" alt="" width={20} height={17} />
    </IcoButton>
  );
}
