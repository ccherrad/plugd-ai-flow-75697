import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Linkedin, Github, Twitter } from "lucide-react";

interface TeamMember {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: {
    name: string;
    url: string;
  }[];
}

const Team = () => {
  const teamList: TeamMember[] = [
    {
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CharefCherrad",
      firstName: "Charef Eddine",
      lastName: "Cherrad",
      positions: ["Founder", "Software Engineer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/ccherrad/",
        },
        {
          name: "Github",
          url: "https://github.com/ccherrad",
        },
      ],
    },
    {
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DjaballahDjedid",
      firstName: "Djaballah",
      lastName: "Djedid",
      positions: ["Founder", "Software Engineer"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/djaballahdjedid/",
        },
      ],
    },
    {
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AminaDebab",
      firstName: "Amina",
      lastName: "Debab",
      positions: ["Founder", "Data Governance Expert"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/adebab/",
        },
      ],
    },
  ];

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "LinkedIn":
        return <Linkedin className="h-5 w-5" />;
      case "Github":
        return <Github className="h-5 w-5" />;
      case "Twitter":
      case "X":
        return <Twitter className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Meet the People Building PLUGD.AI
        </h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          We've spent years helping businesses streamline operations, cut costs, and eliminate manual workflows.
          Now we're building the tool we always wished existed.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map((member) => (
          <Card
            key={`${member.firstName}-${member.lastName}`}
            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
          >
            <CardHeader className="p-0 gap-0">
              <div className="h-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={`${member.firstName} ${member.lastName}`}
                  className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
              <CardTitle className="py-6 pb-4 px-6">
                {member.firstName}{" "}
                <span className="text-primary">{member.lastName}</span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-1 px-6 pb-4">
              {member.positions.map((position, index) => (
                <p key={index} className="text-muted-foreground text-sm">
                  {position}
                  {index < member.positions.length - 1 && ","}
                </p>
              ))}
            </CardContent>

            <CardFooter className="space-x-4 mt-auto px-6 pb-6">
              {member.socialNetworks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={`Visit ${member.firstName}'s ${social.name} profile`}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Mission Statement */}
      <div className="mt-16 max-w-3xl mx-auto">
        <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 italic">
            "We all come from the IT field, and we've seen firsthand how quickly AI has transformed the way we work. In a very short time, it has made us more productive and significantly reduced errors. We want people in other fields to benefit from the same shift we're experiencing today. Our goal is to democratize AI—making it accessible, practical, and easy to use for smaller companies that don't have access to, or aren't clients of, big tech solutions."
          </p>
          <p className="text-sm font-medium text-foreground">— The PLUGD.AI Team</p>
        </div>
      </div>
    </section>
  );
};

export default Team;