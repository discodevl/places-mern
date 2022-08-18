import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire states Building',
    description: 'a tall building',
    imageUrl: 'https://www.urbansplatter.com/wp-content/uploads/2014/07/Empire-State-Building-2013.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lang: -73.9878584
    },
    creator: 'u1' 
  },
  {
    id: 'p2',
    title: 'Empire states Building',
    description: 'a tall building',
    imageUrl: 'https://www.urbansplatter.com/wp-content/uploads/2014/07/Empire-State-Building-2013.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lang: -73.9878584
    },
    creator: 'u2' 
  },
]

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
  return (
    <PlaceList items={loadedPlaces}/>
  )
}

export default UserPlaces