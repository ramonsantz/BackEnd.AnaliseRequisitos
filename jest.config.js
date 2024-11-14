module.exports = {
  preset: 'ts-jest',  
  
  testEnvironment: 'node',  
  
  globals: {
    'ts-jest': {
      isolatedModules: true, 
      
    },
  },
  moduleFileExtensions: ['ts', 'js'],  // Extensões de arquivo que o Jest reconhece
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transforma arquivos .ts e .tsx
  },
  testPathIgnorePatterns: ['/node_modules/', '/build/'],  // Ignora a pasta de node_modules e build
};
