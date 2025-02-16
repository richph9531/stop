import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function HelpfulLinks() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gray-300 shadow-sm transition-colors">
        <CardHeader>
          <CardTitle>Understanding Addiction</CardTitle>
          <CardDescription>Learn about the disease of addiction; its causes, and how it affects the brain and body.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li>
              <Link target="__blank" href="https://www.yourbrainonporn.com/relevant-research-and-articles-about-the-studies/brain-studies-on-porn-users-sex-addicts/" className="text-primary hover:underline">
                Brain Studies on Porn Users & Sex Addicts
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://brainheartworld.org/" className="text-primary hover:underline">
                Brain, Heart, World - A Docu-series
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://www.nakedtruth.training/" className="text-primary hover:underline">
                Naked Truth Training
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://campusministryunited.com/Documents/Porn_Again_Christian.pdf" className="text-primary hover:underline">
                Porn Again Christian - A Frank Discussion
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://www.youtube.com/@SoftWhiteUnderbelly" className="text-primary hover:underline">
                Soft White Underbelly - The Human Condition
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://fightthenewdrug.org/blog/" className="text-primary hover:underline">
                Fight the New Drug - Blog Articles
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://www.covenanteyes.com/blog/ex-porn-star-tells-the-truth-about-the-porn-industry/" className="text-primary hover:underline">
                Ex Porn Star Tells All              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-300 shadow-sm hover:bg-gray-200 transition-colors">
        <CardHeader>
          <CardTitle>Getting Help</CardTitle>
          <CardDescription>Your path to recovery starts here: Explore treatment options, find support groups, and access crisis resources.</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="space-y-2">
            <li>
              <Link target="__blank" href="https://www.childlinesa.org.za/teens/for-teens/issues-affecting-you/pornography-child-pornography/" className="text-primary hover:underline">
                Childline
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://www.projectexodus.net/" className="text-primary hover:underline">
                Project Exodus
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://www.sa.org/" className="text-primary hover:underline">
                Sexaholics Anonymous
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://fightthenewdrug.org/" className="text-primary hover:underline">
                Fight the New Drug
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://www.joinfortify.com/" className="text-primary hover:underline">
                Fortify Accountability App
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://froma2d.org/" className="text-primary hover:underline">
                From Addict to Disciple
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-300 shadow-sm hover:bg-gray-200 transition-colors">
        <CardHeader>
          <CardTitle>For Parents</CardTitle>
          <CardDescription>Educate yourself on the damaging effects of pornography on children and teens.</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="space-y-2">
            <li>
              <Link target="__blank" href="https://brainheartworld.org/" className="text-primary hover:underline">
                Brain, Heart, World - A Docu-series
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://www.qustodio.com/" className="text-primary hover:underline">
                Qustodio - Parental Control Software
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://www.bark.us/" className="text-primary hover:underline">
                Bark - Parental Control Software
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://www.thedigitallawco.com/publications/" className="text-primary hover:underline">
                Safety Online Books
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://raisingchildren.net.au/pre-teens/entertainment-technology/pornography-sexting/pornography-talking-with-children-9-11" className="text-primary hover:underline">
                Talking with Children Aged 9-11 Years
              </Link>
            </li>
            <li>
              <Link target="__blank"href="https://parentinghub.co.za/advice-column/health/how-to-teach-children-about-appropriate-sexual-behaviour/" className="text-primary hover:underline">
                Teaching Children Appropriate Behaviour
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-300 shadow-sm hover:bg-gray-200 transition-colors">
        <CardHeader>
          <CardTitle>For Families & Friends</CardTitle>
          <CardDescription>Supporting a loved one through addiction: Learn how to help without enabling, set boundaries, and cope with the challenges.</CardDescription>
        </CardHeader>
        <CardContent>
        <ul className="space-y-2">
        <li>
              <Link target="__blank" href="https://www.projectexodus.net/" className="text-primary hover:underline">
                Project Exodus
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://www.healthline.com/health/mental-health/betrayal-trauma" className="text-primary hover:underline">
                Understanding Betrayal Trauma
              </Link>
            </li>
            <li>
              <Link target="__blank" href="https://fightthenewdrug.org/a-female-perspective-the-emotional-betrayal-of-porn/" className="text-primary hover:underline">
              The Science of Betrayal
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

