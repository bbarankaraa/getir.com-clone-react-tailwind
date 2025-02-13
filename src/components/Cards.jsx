import { useState, useEffect } from 'react'
import cardsData from '../api/cards.json'

const Cards = () => {

  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(cardsData);
  }, [])
  

  return (
    <div className="container mx-auto 2xl:px-32 px-4 mt-8">
      <div className="flex flex-col md:flex-row gap-4">
        {cards.length && cards.map((card) => (
          <div className='flex flex-col flex-[1] items-center md:rounded-lg text-center px-4 pt-[60px] pb-10 bg-white shadow-sm' key={card.id}>
            <img src={card.image} alt={card.title} className='h-[150px] w-[150px]' />
            <h6 className='mt-6 text-brand-color text-lg font-semibold'>{card.title}</h6>
            <p className='mt-2 text-paragraph'>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards