module.exports = {
  async beforeCreate(event) {
    const { params } = event;
    params.data.user = event.state.user.id; // Asignar automáticamente el ID del usuario autenticado
  }
};
