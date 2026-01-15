import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

import rmImage from '@/assets/members/rm.png';
import jinImage from '@/assets/members/jin.png';
import sugaImage from '@/assets/members/suga.png';
import jhopeImage from '@/assets/members/jhope.png';
import jiminImage from '@/assets/members/jimin.png';
import vImage from '@/assets/members/v.png';
import jungkookImage from '@/assets/members/jungkook.png';

interface Member {
  name: string;
  stageName: string;
  birthDate: string;
  birthYear: number;
  image: string;
  imagePosition?: string;
}

const members: Member[] = [
  {
    name: "Kim Namjoon",
    stageName: "RM",
    birthDate: "September 12, 1994",
    birthYear: 1994,
    image: rmImage,
    imagePosition: "object-center"
  },
  {
    name: "Kim Seokjin",
    stageName: "Jin",
    birthDate: "December 4, 1992",
    birthYear: 1992,
    image: jinImage,
    imagePosition: "object-[center_70%]"
  },
  {
    name: "Min Yoongi",
    stageName: "Suga",
    birthDate: "March 9, 1993",
    birthYear: 1993,
    image: sugaImage,
    imagePosition: "object-center"
  },
  {
    name: "Jung Hoseok",
    stageName: "J-Hope",
    birthDate: "February 18, 1994",
    birthYear: 1994,
    image: jhopeImage,
    imagePosition: "object-center"
  },
  {
    name: "Park Jimin",
    stageName: "Jimin",
    birthDate: "October 13, 1995",
    birthYear: 1995,
    image: jiminImage,
    imagePosition: "object-[center_40%]"
  },
  {
    name: "Kim Taehyung",
    stageName: "V",
    birthDate: "December 30, 1995",
    birthYear: 1995,
    image: vImage,
    imagePosition: "object-center"
  },
  {
    name: "Jeon Jungkook",
    stageName: "Jungkook",
    birthDate: "September 1, 1997",
    birthYear: 1997,
    image: jungkookImage,
    imagePosition: "object-[center_10%]"
  }
];

const calculateAge = (birthYear: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

const MemberProfiles = () => {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-oswald font-bold text-bts-red text-center mb-8 sm:mb-12"
        >
          Meet the Members
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.stageName}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-border/30 hover:border-bts-red/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                <CardContent className="p-4 sm:p-5 flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="mb-3 sm:mb-4"
                  >
                    <Avatar className="w-20 h-20 sm:w-24 sm:h-24 ring-2 ring-border/30 group-hover:ring-bts-red/40 transition-all duration-300 overflow-hidden">
                      <AvatarImage 
                        src={member.image} 
                        alt={member.stageName}
                        className={`object-cover w-full h-full scale-110 ${member.imagePosition || 'object-center'}`}
                      />
                      <AvatarFallback className="bg-muted text-muted-foreground text-lg font-oswald">
                        {member.stageName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                  
                  <h3 className="font-oswald font-bold text-bts-red text-lg sm:text-xl mb-1">
                    {member.stageName}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                    {member.name}
                  </p>
                  
                  <div className="text-xs text-muted-foreground/80 space-y-0.5">
                    <p>{member.birthDate}</p>
                    <p className="font-medium text-foreground/70">
                      Age: {calculateAge(member.birthYear)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberProfiles;
