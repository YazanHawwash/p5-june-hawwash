"use client";
import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Discount&nbsp;</span>
          <span className={title({ color: "violet" })}>Time Machine&nbsp;</span>
          <br />
          <span className={title()}>Wholesale</span>
          <div className={subtitle({ class: "mt-4" })}>
            A project template for YOU to make your own!
          </div>
        </div>

        <div className="flex gap-3">
          <ConfettiButton />

          <div className={spinning ? "animate-spin" : ""}>
            <Button radius="full" variant="ghost" onPress={spinButton}>
              Spin
            </Button>
          </div>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing <Code color="primary">app/page.tsx</Code>
            </span>
          </Snippet>
          <div>
            <img
              alt="Car game"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2T_BKCPBt9ENHVzvIqsRDpq9Aatht0-MNLg&s"
            />
            <p> This is the parking simulator game!</p>
          </div>
          <div>
            <img alt="tutortial" src="/tut.png" width="50%" />
            <p> These are the controls of the game!</p>
          </div>
          <div>
            <img alt=" point of game" src="/point.png" width="50%" />
            <p>
              {" "}
              The point of the game is to park your car in the orange parking
              spot.
            </p>
          </div>
          <div>
            <img alt=" hardest level beginning" src="/hard1.png" width="50%" />
            <p>
              {" "}
              This is the beginning of level 72 and it is the hardest level
            </p>
            <img alt="hardest level end" src="/hard2.png" width="50%" />
            <p> This is the end of level 72</p>
          </div>
          <div>
            <p> I finished all the levels while Mr. Blakney was yapping btw.</p>
          </div>
          {/* keep all code above these lines ^^^^ */}
        </div>
      </section>
      <div />
    </>
  );
}
