import { Star, StarHalf } from 'lucide-react';

export default function StarRating({ rating }) {
    return (
        <div className='flex gap-1'>
            {[...Array(5)].map((_, index) =>
                rating >= index + 1 ? (
                    <Star
                        key={index}
                        className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                ) : rating >= index + 0.5 ? (
                    <StarHalf
                        key={index}
                        className='w-4 h-4 fill-yellow-400 text-yellow-400'
                    />
                ) : (
                    <Star key={index} className='w-4 h-4 text-gray-300' />
                )
            )}
        </div>
    );
}
