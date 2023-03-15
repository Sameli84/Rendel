import { useRef, useContext } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '../../shared/context/auth-context';
import Input from '../../shared/components/input/Input'
import Button from '../../shared/components/button/Button';
import { createCity } from '../api/cities';

import './AddCity.css';


const AddCity = () => {
  const capitalRef = useRef();
  const countryRef = useRef();
  const imageRef = useRef();

  const auth = useContext(AuthContext);
  const history = useHistory();

  const createCityMutation = useMutation({
    mutationFn: createCity
  })

  const citySubmitHandler = (event) => {
    event.preventDefault();
    createCityMutation.mutate({
      capital: capitalRef.current.value,
      country: countryRef.current.value,
      image: imageRef.current.value,
      token: auth.token
    })
    history.push('/');
  }

  return (
    <form className='city-form' onSubmit={citySubmitHandler}>
      <Input id="addCity" ref={capitalRef} type="text" label="Capital" />
      <Input id="addCountry" ref={countryRef} type="text" label="Country" />
      <Input id="addImage" ref={imageRef} type="text" label="Image Link" />
      <Button>
        Add City
      </Button>
    </form>
  )
};

export default AddCity;