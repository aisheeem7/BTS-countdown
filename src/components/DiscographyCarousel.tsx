import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Album cover imports
import coolForSkool from '@/assets/albums/2-cool-4-skool.png';
import orul82 from '@/assets/albums/orul82.png';
import skoolLuvAffair from '@/assets/albums/skool-luv-affair.png';
import darkAndWild from '@/assets/albums/dark-and-wild.png';
import hyyhPt1 from '@/assets/albums/hyyh-pt1.png';
import hyyhPt2 from '@/assets/albums/hyyh-pt2.png';
import youngForever from '@/assets/albums/young-forever.png';
import wings from '@/assets/albums/wings.png';
import youNeverWalkAlone from '@/assets/albums/you-never-walk-alone.png';
import loveYourselfHer from '@/assets/albums/love-yourself-her.png';
import loveYourselfTear from '@/assets/albums/love-yourself-tear.png';
import loveYourselfAnswer from '@/assets/albums/love-yourself-answer.png';
import mapOfTheSoulPersona from '@/assets/albums/map-of-the-soul-persona.png';
import mapOfTheSoul7 from '@/assets/albums/map-of-the-soul-7.png';
import be from '@/assets/albums/be.png';
import proof from '@/assets/albums/proof.png';
import moreReleases from '@/assets/albums/more-releases.png';

interface Album {
  name: string;
  year: string;
  cover: string;
  isSpecial?: boolean;
}

const albums: Album[] = [
  { name: '2 Cool 4 Skool', year: '2013', cover: coolForSkool },
  { name: 'O!RUL8,2?', year: '2013', cover: orul82 },
  { name: 'Skool Luv Affair', year: '2014', cover: skoolLuvAffair },
  { name: 'Dark & Wild', year: '2014', cover: darkAndWild },
  { name: 'The Most Beautiful Moment in Life, Pt. 1', year: '2015', cover: hyyhPt1 },
  { name: 'The Most Beautiful Moment in Life, Pt. 2', year: '2015', cover: hyyhPt2 },
  { name: 'The Most Beautiful Moment in Life: Young Forever', year: '2016', cover: youngForever },
  { name: 'Wings', year: '2016', cover: wings },
  { name: 'You Never Walk Alone', year: '2017', cover: youNeverWalkAlone },
  { name: 'Love Yourself: Her', year: '2017', cover: loveYourselfHer },
  { name: 'Love Yourself: Tear', year: '2018', cover: loveYourselfTear },
  { name: 'Love Yourself: Answer', year: '2018', cover: loveYourselfAnswer },
  { name: 'Map of the Soul: Persona', year: '2019', cover: mapOfTheSoulPersona },
  { name: 'Map of the Soul: 7', year: '2020', cover: mapOfTheSoul7 },
  { name: 'BE', year: '2020', cover: be },
  { name: 'Proof', year: '2022', cover: proof },
  { name: 'They released several other singles, Japanese albums, etc as well', year: '', cover: moreReleases, isSpecial: true },
];

const DiscographyCarousel = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  
  // Duplicate albums for seamless infinite scroll
  const duplicatedAlbums = [...albums, ...albums];
  
  return (
    <motion.section 
      className="w-full py-12 sm:py-16 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2 
        className="font-oswald text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-bts-red"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Discography
      </motion.h2>
      
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Infinite scrolling carousel */}
        <div className="flex infinite-scroll-container hover:[animation-play-state:paused]">
          {duplicatedAlbums.map((album, index) => (
            <motion.div 
              key={`${album.name}-${index}`} 
              className="album-card flex-shrink-0 w-48 sm:w-56 md:w-64 p-2 sm:p-3 cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedAlbum(album)}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden mb-3 shadow-md">
                <img 
                  src={album.cover} 
                  alt={album.name} 
                  className="w-full h-full object-cover transition-transform duration-300" 
                  loading="lazy" 
                />
              </div>
              <h3 className="font-oswald text-sm sm:text-base font-semibold text-foreground line-clamp-2">{album.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{album.year}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.p 
        className="text-center text-sm text-muted-foreground mt-6 sm:mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hover to pause • 16 Albums + More • 2013–2022
      </motion.p>

      {/* Enlarged Album Modal */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAlbum(null)}
          >
            <motion.div
              className="relative bg-card rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedAlbum(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-muted rounded-full flex items-center justify-center hover:bg-muted/80 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              
              <div className="aspect-square rounded-lg overflow-hidden mb-4 shadow-lg">
                <img 
                  src={selectedAlbum.cover} 
                  alt={selectedAlbum.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <h3 className="font-oswald text-xl sm:text-2xl font-bold text-bts-red text-center">
                {selectedAlbum.name}
              </h3>
              {selectedAlbum.year && (
                <p className="text-center text-muted-foreground mt-2">{selectedAlbum.year}</p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default DiscographyCarousel;
