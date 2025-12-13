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
  // TODO: Replace this with your actual team information
  const teamList: TeamMember[] = [
    {
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
      firstName: "Charef",
      lastName: "Cherrad",
      positions: ["Founder & CEO", "Automation Expert"],
      socialNetworks: [
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/in/your-profile", // TODO: Add your LinkedIn
        },
        {
          name: "Github",
          url: "https://github.com/ccherrad", // TODO: Add your GitHub
        },
      ],
    },
    // TODO: Add more team members here
    // Example:
    // {
    //   imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=YourName",
    //   firstName: "Your",
    //   lastName: "Name",
    //   positions: ["Your Title", "Your Expertise"],
    //   socialNetworks: [
    //     { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
    //   ],
    // },
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
            "Every feature we ship is something we'd want to use ourselves. We're building PLUGD.AI transparently—one feature at a time, with real feedback from real users."
          </p>
          <p className="text-sm font-medium text-foreground">— The PLUGD.AI Team</p>
        </div>
      </div>
    </section>
  );
};

export default Team;