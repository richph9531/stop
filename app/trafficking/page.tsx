"use client"

import { BarChart3, Globe, Users, ChevronDown, ChevronUp, ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from "react"

export default function TraffickingStatsPage() {
  const [expandedTactics, setExpandedTactics] = React.useState<string[]>([])
  const [expandedFactors, setExpandedFactors] = React.useState<string[]>([])

  const toggleTactic = (tactic: string) => {
    setExpandedTactics(prev => 
      prev.includes(tactic) 
        ? prev.filter(t => t !== tactic)
        : [...prev, tactic]
    )
  }

  const toggleFactor = (factor: string) => {
    setExpandedFactors(prev => 
      prev.includes(factor) 
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    )
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Understanding Sex Trafficking</h1>
          <p className="text-muted-foreground">
            Key statistics and insights about sex trafficking based on research and data.
          </p>
        </div>

        <div className="p-6 rounded-lg border mb-6 bg-gray-300">
          <h2 className="text-xl font-semibold mb-2">What is Sex Trafficking?</h2>
          <p className="text-muted-foreground italic">
            Sex trafficking is the exploitation of individuals through force, fraud, or coercion for the purpose of sexual acts,
            including prostitution and pornography. This includes any situation where a person is forced, tricked, or manipulated
            into performing sexual acts or being filmed or photographed in sexual situations against their will. Whether through
            physical force, psychological manipulation, economic pressure, or drug dependency, anyone coerced into such situations
            is a victim of sex trafficking. Victims are often lured through false promises of legitimate work, relationships, or
            better opportunities.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sex Trafficking Victims</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8M+</div>
              <p className="text-xs text-muted-foreground">People trapped in sexual exploitation globally</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Women & Girls</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">90%+</div>
              <p className="text-xs text-muted-foreground">Of sex trafficking victims are women and girls</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Age</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12-14</div>
              <p className="text-xs text-muted-foreground">Average age of entry into sex trafficking</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Annual Profit</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$99B</div>
              <p className="text-xs text-muted-foreground">Estimated annual profits from sexual exploitation</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="global">Global Impact</TabsTrigger>
            <TabsTrigger value="types">Risk Factors</TabsTrigger>
          </TabsList>
          <TabsContent value="global" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Geographic Distribution</CardTitle>
                  <CardDescription>Where sex trafficking is most prevalent</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Asia-Pacific</div>
                      <div className="text-sm font-medium">62%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "62%" }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Africa</div>
                      <div className="text-sm font-medium">23%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "23%" }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Europe & Central Asia</div>
                      <div className="text-sm font-medium">9%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "9%" }} />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Americas</div>
                      <div className="text-sm font-medium">6%</div>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div className="h-2 rounded-full bg-primary" style={{ width: "6%" }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Key Facts</CardTitle>
                  <CardDescription>Important statistics about sex trafficking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Globe className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Online exploitation is rising rapidly</p>
                      <p className="text-sm text-muted-foreground">Social media is a primary recruitment tool</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Users className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Less than 1% of victims are ever rescued</p>
                      <p className="text-sm text-muted-foreground">Most cases go unreported or undetected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BarChart3 className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">70% increase in online exploitation</p>
                      <p className="text-sm text-muted-foreground">
                        During global health crisis and lockdowns
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="types" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Common Tactics</CardTitle>
                  <CardDescription>How traffickers exploit victims</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <button
                        onClick={() => toggleTactic('modeling')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">False promises of modeling or entertainment careers</span>
                        {expandedTactics.includes('modeling') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedTactics.includes('modeling') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Traffickers often pose as legitimate modeling agents or talent scouts, targeting young people with promises
                          of glamorous careers. They may create fake websites, business cards, and portfolios to appear legitimate.
                          Initial photo shoots or auditions are used to gather compromising material for later blackmail.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleTactic('romeo')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Romantic manipulation ("Romeo pimp" tactics)</span>
                        {expandedTactics.includes('romeo') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedTactics.includes('romeo') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Traffickers build romantic relationships with victims, often targeting vulnerable individuals on social
                          media. They shower victims with attention, gifts, and promises of a better life together. Once emotional
                          dependency is established, they begin exploitation through guilt, manipulation, and threats.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleTactic('drugs')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Drug dependency and forced addiction</span>
                        {expandedTactics.includes('drugs') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedTactics.includes('drugs') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Traffickers may introduce drugs to create dependency, using addiction as a means of control. They often
                          provide drugs "for free" initially, then demand sexual acts as payment once addiction is established.
                          This creates a cycle of dependency that makes escape extremely difficult.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleTactic('blackmail')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Blackmail and threats to family members</span>
                        {expandedTactics.includes('blackmail') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedTactics.includes('blackmail') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Traffickers gather compromising information or photos to use as leverage. They often research victims'
                          families and threaten to harm loved ones or expose sensitive information. This creates a climate of
                          fear that prevents victims from seeking help or escape.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleTactic('economic')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Economic manipulation and debt bondage</span>
                        {expandedTactics.includes('economic') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedTactics.includes('economic') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Victims are charged inflated fees for transportation, housing, food, and clothing, creating an
                          ever-growing debt. Traffickers often confiscate identification documents and earnings, making
                          victims financially dependent and unable to leave.
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vulnerability Factors</CardTitle>
                  <CardDescription>Common risk factors for victims</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <button
                        onClick={() => toggleFactor('abuse')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">History of abuse or neglect</span>
                        {expandedFactors.includes('abuse') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedFactors.includes('abuse') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Individuals with a history of physical, emotional, or sexual abuse are particularly vulnerable.
                          Past trauma can impact decision-making and self-worth, making it harder to recognize or resist
                          exploitative situations. Traffickers often target those seeking escape from abusive environments.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleFactor('poverty')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Poverty and economic instability</span>
                        {expandedFactors.includes('poverty') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedFactors.includes('poverty') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Financial desperation makes individuals more susceptible to false promises of employment or better
                          opportunities. Lack of economic resources limits options for escape and increases vulnerability to
                          exploitation. Traffickers often target areas with high poverty rates and limited economic opportunities.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleFactor('substance')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Substance abuse issues</span>
                        {expandedFactors.includes('substance') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedFactors.includes('substance') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Pre-existing substance abuse problems make individuals vulnerable to trafficking. The need to
                          maintain access to drugs can be exploited by traffickers. Addiction often impairs judgment and
                          decision-making abilities, making it easier for traffickers to maintain control.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleFactor('migration')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Recent migration or relocation</span>
                        {expandedFactors.includes('migration') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedFactors.includes('migration') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Migrants, especially those with irregular status, are at high risk. Language barriers, unfamiliarity
                          with local systems, and fear of authorities make them vulnerable. Traffickers often exploit their
                          need for work permits or documentation.
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        onClick={() => toggleFactor('support')}
                        className="flex items-center justify-between gap-2 text-left w-full hover:text-primary transition-colors"
                        data-testid="toggle"
                      >
                        <span className="font-medium">Limited family or social support</span>
                        {expandedFactors.includes('support') ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {expandedFactors.includes('support') && (
                        <p className="mt-2 pl-6 text-sm text-muted-foreground">
                          Isolation and lack of support networks increase vulnerability. Those without strong family ties or
                          social connections have fewer resources for help and may be more susceptible to traffickers offering
                          false friendship or belonging. LGBTQ+ youth rejected by families are particularly at risk.
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="text-xl font-semibold mb-4">About the Data</h2>
          <p className="text-muted-foreground mb-4">
            The information presented on this page is based on research from various sources
            and represents estimates from various international organizations including the International
            Labour Organization (ILO), the United Nations Office on Drugs and Crime (UNODC), and other anti-trafficking
            organizations.
          </p>
          <p className="text-muted-foreground mb-4">
            Due to the hidden nature of human trafficking, statistics may vary and actual numbers could be higher than
            reported. Last updated: 02 March 2025
          </p>
          <div className="mt-6">
            <h3 className="font-medium mb-3">Find Out More:</h3>
            <ul className="space-y-2 text-sm list-disc pl-4">
              <li>
                <a
                  href="https://www.unodc.org/unodc/en/frontpage/2024/May/8-facts-you-need-to-know-about-human-trafficking-in-the-21st-century.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  UNODC: 8 Facts About Human Trafficking in the 21st Century
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.unodc.org/unodc/en/human-trafficking/faqs.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  UNODC: Frequently Asked Questions About Human Trafficking
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://preventht.org/human-trafficking-101/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  PreventHT: Human Trafficking 101
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ilo.org/topics-and-sectors/forced-labour-modern-slavery-and-trafficking-persons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  ILO: Forced Labour, Modern Slavery and Human Trafficking
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.disrupthumantrafficking.com/statistics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Disrupt Human Trafficking: Statistics
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://traffickinghub.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  TraffickingHub
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
