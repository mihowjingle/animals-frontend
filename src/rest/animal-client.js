import axios from 'axios';

export const animalClient = {
  getAll() {
    return axios.get('/animals');
  },
  getOne(id) {
    return axios.get(`/animals/${id}`);
  },
  create(animal) {
    axios.post('/animals', animal);
  },
  update(animal) {
    axios.put('/animals', animal);
  },
  delete(id) {
    axios.delete('/animals/' + id);
  }
};
