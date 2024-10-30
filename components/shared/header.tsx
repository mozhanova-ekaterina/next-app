import React from "react";
import clsx from "clsx";
import Container from "./container";
import { Button, ButtonGroup, Divider } from "../ui/index";
import { ArrowRight, ShoppingCart, User } from "lucide-react";

type Props = {
  className?: string;
};

const Header: React.FC<Props> = ({ className }) => {
  return (
    <header
      className={clsx("border border-b", className, {
        // 'bg-white': true,
      })}
    >
      <Container className="py-7 flex justify-between items-center">
        <div className="font-bold text-xl">LOGO</div>
        <div className="flex items-center gap-3">
          <Button
            variant="shadow"
            color="primary"
            startContent={<User size={"20px"} />}
            className="flex items-center"
          >
            Войти
          </Button>
          <Button variant="shadow" color="primary" className="group">
            <span>520р</span>
            <Divider
              orientation="vertical"
              className="bg-primary-foreground h-[80%]"
            />
            <div className="flex gap-1 group-hover:opacity-0 transition">
              <ShoppingCart size={"17px"} />3
            </div>
            <div>
              <ArrowRight
                size={"23px"}
                className="absolute top-2 right-4 translate-x-9 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition"
              />
            </div>
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
