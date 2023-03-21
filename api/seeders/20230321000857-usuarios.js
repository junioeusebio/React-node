'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        queryInterface.bulkInsert('usuarios', [{
            nome: 'someone',
            email: 'someone@somewhere.com',
            fone: '11983307783',
            data_nascimento: '2000-01-02'         
        }], {});

        const users = await queryInterface.sequelize.query(
            'SELECT id from usuarios;'
        );
    },
    down: async (queryInterface) => {        
        await queryInterface.bulkDelete('usuarios', null, {});
    }
};