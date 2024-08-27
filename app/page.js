"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FunPumpPage() {
  return (
    <div className="min-h-screen bg-black text-white grid grid-cols-[300px_1fr]">
      <div className="border-r border-gray-800 p-4 space-y-4">
        <h2 className="text-2xl font-bold glow text-white">New Tokens Launched</h2>
        <div className="space-y-2">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="p-4 border border-gray-700 rounded-lg glow">
              <h3 className="text-xl font-semibold text-white">Token {index}</h3>
              <p className="text-muted-foreground text-white">Description of Token {index}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <header className="flex items-center justify-between p-4 border-b border-gray-800">
          <div className="flex items-center gap-4">
            <BellIcon className="text-white h-6 w-6" />
            <span className="font-semibold text-lg glow text-white">Create liquidity & buy</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <GlobeIcon className="text-white h-4 w-4" />
              <span className="text-white">EN</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white">Priority Fee:</span>
              <Badge variant="secondary" className="glow">
                High speed
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <span className="animate-blink text-white">RPC</span>
              <ChevronDownIcon className="text-white h-4 w-4" />
            </div>
          </div>
        </header>
        <main className="p-4 md:p-8 lg:p-12">
          <section className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold glow text-white">FunPump Launch and Buy</h1>
            <p className="text-muted-foreground glow text-white">
              During the FunPump launch, other addresses simultaneously perform token buy-in operations, effectively
              simplifying the trading process and accelerating market participation, giving you an early advantage and
              potential profits sooner.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="token-name" className="text-white">
                    Token Name
                  </Label>
                  <Input id="token-name" placeholder="Enter token name" className="glow" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="token-logo" className="text-white">
                    Token Logo
                  </Label>
                  <div className="border border-gray-700 p-4 flex items-center justify-center glow">
                    <UploadIcon className="text-white h-6 w-4" />
                    <span className="text-white">Click to Upload</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-symbol" className="text-white">
                  Token Symbol
                </Label>
                <Input id="token-symbol" placeholder="Enter token symbol" className="glow" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="token-description" className="text-white">
                  Token Description
                </Label>
                <Textarea id="token-description" placeholder="Enter token description" className="glow" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-white">
                  Enter the amount of SOL you want to buy
                </Label>
                <Input id="amount" placeholder="Optional, defaults to 0 if not filled" className="glow" />
              </div>
              <Button className="w-full hover:bg-gray-700 glow">Submit</Button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}