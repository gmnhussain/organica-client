import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Leaf, Heart, Users, Award, Sprout, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-14">
        <div className="flex justify-center mb-6">
          <Leaf className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
          About Organica
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Cultivating a healthier world through sustainable, organic farming
          practices since 2018
        </p>
      </div>

      <div className="mx-auto px-4 py-12 space-y-16">
        {/* Mission Statement */}
        <section>
          <Card className="border shadow-none">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary flex items-center justify-center gap-3">
                <Heart className="h-8 w-8" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto text-pretty">
                To provide the freshest, most nutritious organic produce while
                supporting sustainable farming practices that protect our
                environment and nourish our communities. We believe that healthy
                food should be accessible to everyone, grown with respect for
                the earth and its natural cycles.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Core Values */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from seed to table
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent text-primary">
                  <Sprout className="h-7 w-7 text-primary" />
                  Sustainability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We use regenerative farming practices that improve soil
                  health, conserve water, and promote biodiversity for future
                  generations.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent text-primary">
                  <Award className="h-6 w-6 text-primary" />
                  Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every product meets the highest organic standards, ensuring
                  you receive the most nutritious and flavorful produce
                  possible.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent text-primary">
                  <Users className="h-6 w-6 text-primary" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We support local farmers, create jobs in rural communities,
                  and build lasting relationships with our customers and
                  partners.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent text-primary">
                  <Globe className="h-6 w-6 text-primary" />
                  Transparency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in complete transparency about our farming methods,
                  sourcing, and business practices. You deserve to know where
                  your food comes from.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent text-primary">
                  <Heart className="h-6 w-6 text-primary" />
                  Health & Wellness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to providing food that nourishes your body and
                  supports your family's health and well-being.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-accent text-primary">
                  <Leaf className="h-6 w-6 text-primary" />
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We continuously explore new organic farming techniques and
                  sustainable technologies to improve our practices and reduce
                  our environmental impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Story */}
        <section>
          <Card className="gap-0 shadow-none border-none">
            <CardHeader className="text-center mb-12 px-0">
              <CardTitle className="text-3xl text-primary">Our Story</CardTitle>
              <CardDescription className="text-lg">
                From humble beginnings to organic leadership
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-12 px-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    The Beginning (2010)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Founded by Sarah and Michael Thompson, GreenHarvest Organics
                    started as a small family farm in the fertile valleys of
                    California. Frustrated by the lack of truly organic,
                    locally-sourced produce in their community, they decided to
                    make a change.
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    5-acre family farm
                  </Badge>
                </div>
                <div className="bg-primary/3 rounded-md p-2 min-h-60 flex items-center justify-center">
                  <div>
                    <Sprout className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Started with just 5 acres and a dream
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="bg-primary/3 rounded-md p-2 min-h-60 flex items-center justify-center">
                  <div>
                    <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Growing our community network
                    </p>
                  </div>
                </div>
                <div className="md:order-2">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Growth & Community (2015)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    As demand grew, we expanded our operations and began
                    partnering with other local organic farmers. We established
                    our first farmers market presence and launched our
                    community-supported agriculture (CSA) program.
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    50+ partner farms
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    Innovation & Expansion (2020)
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    We invested in sustainable farming technologies, including
                    solar-powered irrigation systems and regenerative
                    agriculture practices. Our online platform launched, making
                    organic produce accessible to customers nationwide.
                  </p>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary"
                  >
                    Nationwide delivery
                  </Badge>
                </div>
                <div className="bg-primary/3 rounded-md p-2 min-h-60 flex items-center justify-center">
                  <div>
                    <Globe className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground">
                      Serving communities across the country
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications & Awards */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-muted-foreground">
              Our commitment to quality and sustainability has been recognized
              by industry leaders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center p-6 shadow-none">
              <Award className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">USDA Organic</h3>
              <p className="text-sm text-muted-foreground">
                Certified organic since 2011
              </p>
            </Card>

            <Card className="text-center p-6 shadow-none">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Regenerative Organic</h3>
              <p className="text-sm text-muted-foreground">
                ROC certified practices
              </p>
            </Card>

            <Card className="text-center p-6 shadow-none">
              <Globe className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">B Corp Certified</h3>
              <p className="text-sm text-muted-foreground">
                Meeting social & environmental standards
              </p>
            </Card>

            <Card className="text-center p-6 shadow-none">
              <Users className="h-12 w-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fair Trade</h3>
              <p className="text-sm text-muted-foreground">
                Supporting fair labor practices
              </p>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-primary/5 border-primary/20 shadow-none">
            <CardContent className="px-0 py-8">
              <h2 className="text-3xl font-bold text-primary mb-4">
                Support Sustainable Farming
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Ready to experience the difference that truly organic,
                sustainably-grown produce can make? Join thousands of families
                who trust GreenHarvest Organics for their healthy lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/products"
                  className="px-5 py-3 rounded-md bg-primary border-primary border text-white hover:opacity-90 transition text-center font-medium"
                >
                  Shop Organica Products
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
