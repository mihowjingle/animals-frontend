import axios from 'axios';

export const animalClient = {
  getAll() {
    return axios.get('/animals');
  },
  getOne(id) {
    return axios.get(`/animals/${id}`);
  },
  create(animal) {
    return axios.post('/animals', animal);
  },
  update(animal) {
    return axios.put('/animals', animal);
  },
  delete(id) {
    return axios.delete('/animals/' + id);
  }
};
