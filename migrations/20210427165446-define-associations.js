'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.addConstraint('User_Farms',{
      name : 'Users-User_Farms',
      fields: ['users_id'],
      type : 'foreign key',
      references : {
        table : 'Users',
        field : 'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })
    
    await queryInterface.addConstraint('User_Farms',{
      name : 'Farms-User_Farms',
      fields: ['farms_id'],
      type : 'foreign key',
      references : {
        table : 'Farms',
        field : 'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })

    await queryInterface.addConstraint('SeedTypes',{
      name : 'Farms-SeedTypes',
      fields: ['farms_id'],
      type : 'foreign key',
      references : {
        table : 'Farms',
        field : 'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })

    await queryInterface.addConstraint('SeedTypes',{
      name : 'Kind-SeedType',
      fields: ['kinds_id'],
      type : 'foreign key',
      references : {
        table : 'Kinds',
        field : 'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })

    await queryInterface.addConstraint('Seeds',{
      name : 'SeedTypes-Seeds',
      fields: ['seedtypes_id'],
      type : 'foreign key',
      references : {
        table : 'SeedTypes',
        field : 'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })

    await queryInterface.addConstraint('Seeds',{
      name : 'Users-Seeds',
      fields: ['users_id'],
      type : 'foreign key',
      references : {
        table : 'Users',
        field : 'id'
      },
      onDelete:'cascade',
      onUpdate:'cascade'
    })
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeConstraint('User_Farms','Users-User_Farms')
    await queryInterface.removeConstraint('User_Farms','Farms-User_Farms')
    await queryInterface.removeConstraint('SeedTypes','Farms-SeedTypes')
    await queryInterface.removeConstraint('SeedTypes','Kind-SeedType')
    await queryInterface.removeConstraint('Seeds','SeedTypes-Seeds')
    await queryInterface.removeConstraint('Seeds','Users-Seeds')

  }
};
