import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl text-black">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-24">
        About Oitii
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative">
          <div className="aspect-square rounded-full overflow-hidden bg-muted">
            <Image
              src="https://cdn.pixabay.com/photo/2022/08/31/18/11/teamwork-7423957_1280.png"
              alt="Team collaboration"
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-primary rounded-full w-24 h-24" />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            We want innovation to thrive
          </h2>

          <p className="text-lg text-muted-foreground">
            Oitii is the platform developers choose for building
            high-performance and dynamic websites, e-commerce stores and web
            applications.
          </p>

          <p className="text-lg text-muted-foreground">
            By uniting an extensive ecosystem of technologies, services and APIs
            into one workflow, Oitii unlocks new levels of team productivity,
            while saving time and money.
          </p>

          <p className="text-lg text-muted-foreground">
            Our platform is rapidly evolving with the changing landscape of web
            development. We're proud to support millions of developers and
            businesses, serving projects globally every day.
          </p>

          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">
              Fun fact: Our platform processes over 1 million requests every
              month, helping developers build better web experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            A company is as good as its team
          </h2>

          <p className="text-lg text-muted-foreground">
            Oitii brings together talented individuals from across the globe. We
            embrace diversity and inclusion, with team members representing
            various backgrounds and nationalities.
          </p>

          <p className="text-lg text-muted-foreground">
            We believe in a distributed-first culture. Our workplace isn't just
            remote-friendly – it's built on the principle that great work can
            happen anywhere. Every team member has an equal voice in shaping our
            culture and direction.
          </p>
        </div>

        <Card className="p-4">
          <div className="grid grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg overflow-hidden bg-muted"
              >
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt={`Team member ${i + 1}`}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
