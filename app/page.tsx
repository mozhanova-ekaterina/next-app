import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import { Camera } from 'lucide-react';


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
     <Button>Button</Button>
     <Input/>
      <Link color="secondary" isExternal showAnchorIcon>lick</Link>
      <Camera color="red"/>
    </section>  
  );
}
