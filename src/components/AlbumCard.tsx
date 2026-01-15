import { motion } from 'framer-motion';

interface Album {
  name: string;
  year: string;
  cover: string;
}

interface AlbumCardProps {
  album: Album;
  index: number;
}

const AlbumCard = ({ album, index }: AlbumCardProps) => {
  return (
    <motion.div
      className="album-card flex-shrink-0 w-48 sm:w-56 md:w-64 p-3 sm:p-4"
      style={{
        animationDelay: `${index * 0.5}s`,
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden mb-3 sm:mb-4">
        <img
          src={album.cover}
          alt={album.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-oswald text-base sm:text-lg font-semibold text-foreground truncate">
        {album.name}
      </h3>
      <p className="text-sm text-muted-foreground">{album.year}</p>
    </motion.div>
  );
};

export default AlbumCard;