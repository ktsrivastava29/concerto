/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const chai = require('chai');
const should = chai.should();
const sinon = require('sinon');

let LoopbackVisitor= require('../../../../lib/codegen/fromcto/loopback/loopbackvisitor.js');

const AssetDeclaration = require('@accordproject/concerto-core').AssetDeclaration;
const ParticipantDeclaration = require('@accordproject/concerto-core').ParticipantDeclaration;
const EventDeclaration = require('@accordproject/concerto-core').EventDeclaration;
const ClassDeclaration = require('@accordproject/concerto-core').ClassDeclaration;
const EnumDeclaration = require('@accordproject/concerto-core').EnumDeclaration;
const ConceptDeclaration = require('@accordproject/concerto-core').ConceptDeclaration;
const EnumValueDeclaration = require('@accordproject/concerto-core').EnumValueDeclaration;
const Field = require('@accordproject/concerto-core').Field;
const ModelFile = require('@accordproject/concerto-core').ModelFile;
const ModelManager = require('@accordproject/concerto-core').ModelManager;
const RelationshipDeclaration = require('@accordproject/concerto-core').RelationshipDeclaration;
const TransactionDeclaration = require('@accordproject/concerto-core').TransactionDeclaration;
const fileWriter = require('../../../../lib/filewriter');

describe('LoopbackVisitor', () => {
    let loopbackVisit;
    let mockFileWriter;
    beforeEach(() => {
        loopbackVisit = new LoopbackVisitor();
        mockFileWriter = sinon.createStubInstance(fileWriter);
    });

    describe('visit', () => {
        let param;
        beforeEach(() => {
            param = {
                property1: 'value1'
            };
        });

        it('should call visitModelManager for a ModelManager', () => {
            let thing = sinon.createStubInstance(ModelManager);
            thing.isModelManager.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitModelManager');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitModelFile for a ModelFile', () => {
            let thing = sinon.createStubInstance(ModelFile);
            thing.isModelFile.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitModelFile');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitAssetDeclaration for a AssetDeclaration', () => {
            let thing = sinon.createStubInstance(AssetDeclaration);
            thing.isAsset.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitAssetDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitParticipantDeclaration for a ParticipantDeclaration', () => {
            let thing = sinon.createStubInstance(ParticipantDeclaration);
            thing.isParticipant.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitParticipantDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitConceptDeclaration for a ConceptDeclaration', () => {
            let thing = sinon.createStubInstance(ConceptDeclaration);
            thing.isConcept.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitConceptDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitTransactionDeclaration for a TransactionDeclaration', () => {
            let thing = sinon.createStubInstance(TransactionDeclaration);
            thing.isTransaction.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitTransactionDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitEventDeclaration for a EventDeclaration', () => {
            let thing = sinon.createStubInstance(EventDeclaration);
            thing.isEvent.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitEventDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitEnumDeclaration for a EnumDeclaration', () => {
            let thing = sinon.createStubInstance(EnumDeclaration);
            thing.isEnum.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitEnumDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitField for a Field', () => {
            let thing = sinon.createStubInstance(Field);
            thing.isField.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitField');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitRelationshipDeclaration for a RelationshipDeclaration', () => {
            let thing = sinon.createStubInstance(RelationshipDeclaration);
            thing.isRelationship.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitRelationshipDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should call visitEnumValueDeclaration for a EnumValueDeclaration', () => {
            let thing = sinon.createStubInstance(EnumValueDeclaration);
            thing.isEnumValue.returns(true);
            let mockSpecialVisit = sinon.stub(loopbackVisit, 'visitEnumValueDeclaration');
            mockSpecialVisit.returns('Duck');

            loopbackVisit.visit(thing, param).should.deep.equal('Duck');

            mockSpecialVisit.calledWith(thing, param).should.be.ok;
        });

        it('should throw an error when an unrecognised type is supplied', () => {
            let thing = 'Something of unrecognised type';

            (() => {
                loopbackVisit.visit(thing, param);
            }).should.throw('Unrecognised type: string, value: \'Something of unrecognised type\'');
        });
    });

    describe('visitModelManager', () => {
        it('should return a value of the concatenated output of each modelFiles accept', () => {
            let param = {};

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile.isModelFile.returns(true);
            mockModelFile.accept.returns(['Duck', 'Duck']);
            let mockModelFile2 = sinon.createStubInstance(ModelFile);
            mockModelFile2.isModelFile.returns(true);
            mockModelFile2.accept.returns(['Duck', 'Goose']);

            let mockModelManager = sinon.createStubInstance(ModelManager);
            mockModelManager.isModelManager.returns(true);
            mockModelManager.getModelFiles.returns([mockModelFile, mockModelFile2]);

            loopbackVisit.visitModelManager(mockModelManager, param).should.deep.equal(['Duck', 'Duck', 'Duck', 'Goose']);
            mockModelFile.accept.withArgs(loopbackVisit, param).calledOnce.should.be.ok;
            mockModelFile2.accept.withArgs(loopbackVisit, param).calledOnce.should.be.ok;
            param.should.deep.equal({
                modelManager: mockModelManager
            });
        });
    });

    describe('visitModelFile', () => {
        it('should return an array of each declaration\'s accept', () => {
            let param = {};

            let mockAssetDeclaration = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclaration.isAsset.returns(true);
            mockAssetDeclaration.accept.returns('Duck');

            let mockConceptDeclaration = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclaration.isConcept.returns(true);
            mockConceptDeclaration.accept.returns('Duck');

            let mockParticipantDeclaration = sinon.createStubInstance(ParticipantDeclaration);
            mockParticipantDeclaration.isParticipant.returns(true);
            mockParticipantDeclaration.accept.returns('Duck');

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration.isTransaction.returns(true);
            mockTransactionDeclaration.accept.returns('Goose');

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile.isModelFile.returns(true);
            mockModelFile.getNamespace.returns;
            mockModelFile.getAssetDeclarations.returns([mockAssetDeclaration]);
            mockModelFile.getTransactionDeclarations.returns([mockTransactionDeclaration]);
            mockModelFile.getConceptDeclarations.returns([mockConceptDeclaration]);
            mockModelFile.getParticipantDeclarations.returns([mockParticipantDeclaration]);

            loopbackVisit.visitModelFile(mockModelFile, param).should.deep.equal(['Duck', 'Duck', 'Duck', 'Goose']);

            param.should.deep.equal({
                first: true,
                modelFile: mockModelFile
            });
        });
    });

    describe('visitAssetDeclaration', () => {
        it('should return the value of visitClassDeclarationCommon using a schema with just type', () => {
            let param = {};

            let mockAssetDeclaration = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclaration.isAsset.returns(true);
            mockAssetDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockAssetDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockAssetDeclaration, param, {
                type: 'Object'
            }).returns('Class Declaration');

            loopbackVisit.visitAssetDeclaration(mockAssetDeclaration, param).should.deep.equal('Class Declaration');
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema', () => {
            let param = {
                first: true
            };

            let mockAssetDeclaration = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclaration.isAsset.returns(true);
            mockAssetDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockAssetDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'Bob',
                description: 'An asset named Bob',
                plural: 'Bob',
                base: 'PersistedModel',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'asset'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockAssetDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.visitAssetDeclaration(mockAssetDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema using the fullyQualifiedName', () => {
            let param = {
                first: true
            };

            let mockAssetDeclaration = sinon.createStubInstance(AssetDeclaration);
            mockAssetDeclaration.isAsset.returns(true);
            mockAssetDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockAssetDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'org_acme_Person_Bob',
                description: 'An asset named Bob',
                plural: 'org.acme.Person.Bob',
                base: 'PersistedModel',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'asset'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockAssetDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.namespaces = true;

            loopbackVisit.visitAssetDeclaration(mockAssetDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });
    });

    describe('visitParticipantDeclaration', () => {
        it('should return the value of visitClassDeclarationCommon using a schema with just type', () => {
            let param = {};

            let mockParticipantDeclaration = sinon.createStubInstance(ParticipantDeclaration);
            mockParticipantDeclaration.isParticipant.returns(true);
            mockParticipantDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockParticipantDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockParticipantDeclaration, param, {
                type: 'Object'
            }).returns('Class Declaration');

            loopbackVisit.visitParticipantDeclaration(mockParticipantDeclaration, param).should.deep.equal('Class Declaration');
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema', () => {
            let param = {
                first: true
            };

            let mockParticipantDeclaration = sinon.createStubInstance(ParticipantDeclaration);
            mockParticipantDeclaration.isParticipant.returns(true);
            mockParticipantDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockParticipantDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'Bob',
                description: 'A participant named Bob',
                plural: 'Bob',
                base: 'PersistedModel',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'participant'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockParticipantDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.visitParticipantDeclaration(mockParticipantDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema using the fullyQualifiedName', () => {
            let param = {
                first: true
            };

            let mockParticipantDeclaration = sinon.createStubInstance(ParticipantDeclaration);
            mockParticipantDeclaration.isParticipant.returns(true);
            mockParticipantDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockParticipantDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'org_acme_Person_Bob',
                description: 'A participant named Bob',
                plural: 'org.acme.Person.Bob',
                base: 'PersistedModel',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'participant'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockParticipantDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.namespaces = true;

            loopbackVisit.visitParticipantDeclaration(mockParticipantDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });
    });

    describe('visitConceptDeclaration', () => {
        it('should return the value of visitClassDeclarationCommon using a schema with just type', () => {
            let param = {};

            let mockConceptDeclaration = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclaration.isConcept.returns(true);
            mockConceptDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockConceptDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockConceptDeclaration, param, {
                type: 'Object'
            }).returns('Class Declaration');

            loopbackVisit.visitConceptDeclaration(mockConceptDeclaration, param).should.deep.equal('Class Declaration');
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema', () => {
            let param = {
                first: true
            };

            let mockConceptDeclaration = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclaration.isConcept.returns(true);
            mockConceptDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockConceptDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'Bob',
                description: 'A concept named Bob',
                plural: 'Bob',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'concept'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockConceptDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.visitConceptDeclaration(mockConceptDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema using the fullyQualifiedName', () => {
            let param = {
                first: true
            };

            let mockConceptDeclaration = sinon.createStubInstance(ConceptDeclaration);
            mockConceptDeclaration.isConcept.returns(true);
            mockConceptDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockConceptDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'org_acme_Person_Bob',
                description: 'A concept named Bob',
                plural: 'org.acme.Person.Bob',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'concept'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockConceptDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.namespaces = true;

            loopbackVisit.visitConceptDeclaration(mockConceptDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });
    });

    describe('visitTransactionDeclaration', () => {
        it('should return the value of visitClassDeclarationCommon using a schema with just type', () => {
            let param = {};

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration.isTransaction.returns(true);
            mockTransactionDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockTransactionDeclaration.getName.returns('Bob');

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockTransactionDeclaration, param, {
                type: 'Object'
            }).returns('Class Declaration');

            loopbackVisit.visitTransactionDeclaration(mockTransactionDeclaration, param).should.deep.equal('Class Declaration');
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema', () => {
            let param = {
                first: true
            };

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration.isTransaction.returns(true);
            mockTransactionDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockTransactionDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'Bob',
                description: 'A transaction named Bob',
                plural: 'Bob',
                base: 'PersistedModel',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'transaction'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockTransactionDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.visitTransactionDeclaration(mockTransactionDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });

        it('should return the value of visitClassDeclarationCommon buiulding the schema using the fullyQualifiedName', () => {
            let param = {
                first: true
            };

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration.isTransaction.returns(true);
            mockTransactionDeclaration.getFullyQualifiedName.returns('org.acme.Person.Bob');
            mockTransactionDeclaration.getName.returns('Bob');

            let expectedSchema = {
                $first: true,
                name: 'org_acme_Person_Bob',
                description: 'A transaction named Bob',
                plural: 'org.acme.Person.Bob',
                base: 'PersistedModel',
                idInjection: false,
                options: {
                    validateUpsert: true,
                    composer: {
                        type: 'transaction'
                    }
                },
                properties: {},
                validations: [],
                relations: {},
                acls: [],
                methods: []
            };

            let mockVisitClassDeclarationCommon = sinon.stub(loopbackVisit, 'visitClassDeclarationCommon');
            mockVisitClassDeclarationCommon.withArgs(mockTransactionDeclaration, param, expectedSchema).returns('Class Declaration');

            loopbackVisit.namespaces = true;

            loopbackVisit.visitTransactionDeclaration(mockTransactionDeclaration, param).should.deep.equal('Class Declaration');
            param.should.have.property('first', false);
        });
    });

    describe('visitEventDeclaration', () => {
        it('should return null', () => {
            let mockEventDeclaration = sinon.createStubInstance(EventDeclaration);
            mockEventDeclaration.isEvent.returns(true);
            mockEventDeclaration.getName.returns('Bob');

            should.equal(loopbackVisit.visitEventDeclaration(mockEventDeclaration, {}), null);
        });
    });

    describe('visitClassDeclarationCommon', () => {
        it('should return a created JSONSchema', () => {
            let param = {};
            let jsonSchema = {
                title: 'A schema',
                description: ' A particularly good schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration.isClassDeclaration.returns(true);
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);

            loopbackVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal({
                title: 'A schema',
                description: ' A particularly good schema',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        description: 'The class identifier for this type',
                        required: false
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                }
            });
        });

        it('should return a created JSONSchema autogenerating the description', () => {
            let param = {};
            let jsonSchema = {
                title: 'A schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration.isClassDeclaration.returns(true);
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);

            loopbackVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal({
                title: 'A schema',
                description: 'An instance of Person',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        description: 'The class identifier for this type',
                        required: false
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                }
            });
        });

        it('should return a created JSONSchema adding to the composer options', () => {
            let param = {};
            let jsonSchema = {
                title: 'A schema',
                description: 'A particularly good schema',
                options: {
                    composer: {}
                }
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration.isClassDeclaration.returns(true);
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getNamespace.returns('org.acme');
            mockClassDeclaration.isAbstract.returns(true);
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);

            loopbackVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal({
                title: 'A schema',
                description: 'A particularly good schema',
                options: {
                    composer: {
                        namespace: 'org.acme',
                        name: 'Person',
                        fqn: 'org.acme.Person',
                        abstract: true
                    }
                },
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        description: 'The class identifier for this type',
                        required: false
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                }
            });
        });

        it('should return a created top level JSON Schema and write it to a file with the name of the FQN', () => {
            let param = {
                fileWriter: mockFileWriter
            };
            let jsonSchema = {
                $first: true,
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration.isClassDeclaration.returns(true);
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);
            let expectedResult = {
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        required: false,
                        description: 'The class identifier for this type'
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                }
            };

            loopbackVisit.namespaces = true;

            loopbackVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal(expectedResult);

            param.fileWriter.openFile.withArgs('org.acme.Person.json').calledOnce.should.be.ok;
            param.fileWriter.write.withArgs(JSON.stringify(expectedResult, null, 4)).calledOnce.should.be.ok;
            param.fileWriter.closeFile.calledOnce.should.be.ok;
        });

        it('should return a created top level JSON Schema and write it to a file with the name of the FQN', () => {
            let param = {
                fileWriter: null
            };
            let jsonSchema = {
                $first: true,
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration.isClassDeclaration.returns(true);
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);
            let expectedResult = {
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        required: false,
                        description: 'The class identifier for this type'
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                }
            };

            loopbackVisit.namespaces = true;
            loopbackVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal(expectedResult);
        });

        it('should return a created top level JSONSchema and write it to a file with the name of the class name', () => {
            let param = {
                fileWriter: mockFileWriter
            };
            let jsonSchema = {
                $first: true,
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema'
            };

            let mockClassDeclaration = sinon.createStubInstance(ClassDeclaration);
            mockClassDeclaration.isClassDeclaration.returns(true);
            mockClassDeclaration.getName.returns('Person');
            mockClassDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockClassDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return 'Guineapig';
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return 'Goldfish';
                    }
                }
            ]);
            let expectedResult = {
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        required: false,
                        description: 'The class identifier for this type'
                    },
                    Bob: 'Guineapig',
                    Trevor: 'Goldfish'
                }
            };
            loopbackVisit.visitClassDeclarationCommon(mockClassDeclaration, param, jsonSchema).should.deep.equal(expectedResult);

            param.fileWriter.openFile.withArgs('Person.json').calledOnce.should.be.ok;
            param.fileWriter.write.withArgs(JSON.stringify(expectedResult, null, 4)).calledOnce.should.be.ok;
            param.fileWriter.closeFile.calledOnce.should.be.ok;
        });

        it('should return a created top level JSONSchema with extra data if a TransactionDeclaration', () => {
            let param = {};
            let jsonSchema = {
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema',
                properties: {
                    noseLength: {}
                }
            };

            let mockTransactionDeclaration = sinon.createStubInstance(TransactionDeclaration);
            mockTransactionDeclaration.isTransaction.returns(true);
            mockTransactionDeclaration.getName.returns('Person');
            mockTransactionDeclaration.getFullyQualifiedName.returns('org.acme.Person');
            mockTransactionDeclaration.getIdentifierFieldName.returns('Bob');
            mockTransactionDeclaration.getProperties.returns([
                {
                    getName: () => {
                        return 'Bob';
                    },
                    isOptional: () => {
                        return true;
                    },
                    accept: () => {
                        return {
                            prop: 'Guineapig'
                        };
                    }
                },
                {
                    getName: () => {
                        return 'Trevor';
                    },
                    isOptional: () => {
                        return false;
                    },
                    accept: () => {
                        return {
                            prop: 'Goldfish'
                        };
                    }
                },
            ]);
            let expectedResult = {
                $schema: true,
                title: 'A schema',
                description: ' A particularly good schema',
                properties: {
                    $class: {
                        type: 'string',
                        default: 'org.acme.Person',
                        required: false,
                        description: 'The class identifier for this type'
                    },
                    Bob: {
                        prop: 'Guineapig',
                        generated: true,
                        required: false
                    },
                    Trevor: {
                        prop: 'Goldfish'
                    },
                },
                forceId: true,

            };
            loopbackVisit.visitClassDeclarationCommon(mockTransactionDeclaration, param, jsonSchema).should.deep.equal(expectedResult);
        });
    });

    describe('toLoopbackType', () => {
        it('should return date for DateTime', () => {
            LoopbackVisitor.toLoopbackType('DateTime').should.deep.equal('date');
        });

        it('should return boolean for Boolean', () => {
            LoopbackVisitor.toLoopbackType('Boolean').should.deep.equal('boolean');
        });

        it('should return String for String', () => {
            LoopbackVisitor.toLoopbackType('String').should.deep.equal('string');
        });

        it('should return number for Double', () => {
            LoopbackVisitor.toLoopbackType('Double').should.deep.equal('number');
        });

        it('should return number for Long', () => {
            LoopbackVisitor.toLoopbackType('Long').should.deep.equal('number');
        });

        it('should return number for Integer', () => {
            LoopbackVisitor.toLoopbackType('Integer').should.deep.equal('number');
        });

        it('should return the string as default', () => {
            LoopbackVisitor.toLoopbackType('Penguin').should.deep.equal('string');
        });
    });

    describe('visitField', () => {
        it('should return a JSON schema for a primitive', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Horse');
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('String');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Farmer';
                }
            });
            mockField.isOptional.returns(false);

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: 'string',
                required: true
            });
        });

        it('should return a JSON schema for a primitive with a default value and when it is an identifying field', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Farmer');
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('String');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Farmer';
                }
            });
            mockField.getDefaultValue.returns('Ploughed');
            mockField.isOptional.returns(false);

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: 'string',
                default: 'Ploughed',
                id: true,
                description: 'The instance identifier for this type',
                required: true
            });
        });

        it('should return a JSON schema for an enumeration', () => {
            let param = {};

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile.accept.withArgs(loopbackVisit, param).returns({
                type: 'Square'
            });
            mockModelFile.isModelFile.returns(true);
            mockModelFile.getType.withArgs('Acreage').returns({
                accept: mockModelFile.accept
            });

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Horse');
            mockField.isTypeEnum.returns(true);
            mockField.getType.returns('Acreage');
            mockField.getParent.returns({
                getModelFile: () => {
                    return mockModelFile;
                }
            });
            mockField.isOptional.returns(false);

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: 'Square',
                required: true
            });
        });

        it('should return a JSON schema for an enumeration with a default value', () => {
            let param = {};

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile.accept.withArgs(loopbackVisit, param).returns({
                type: 'Square'
            });
            mockModelFile.isModelFile.returns(true);
            mockModelFile.getType.withArgs('Acreage').returns({
                accept: mockModelFile.accept
            });

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Horse');
            mockField.isTypeEnum.returns(true);
            mockField.getType.returns('Acreage');
            mockField.getParent.returns({
                getModelFile: () => {
                    return mockModelFile;
                }
            });
            mockField.isOptional.returns(false);
            mockField.getDefaultValue.returns('Trampled');

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: 'Square',
                default: 'Trampled',
                required: true
            });
        });

        it('should return a JSON schema for a class using type', () => {
            let param = {};

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile.isModelFile.returns(true);
            mockModelFile.getType.withArgs('Acreage').returns({
                accept: mockModelFile.accept
            });

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Horse');
            mockField.getType.returns('Acreage');
            mockField.getFullyQualifiedTypeName.returns('org.acme.Horse.Acreage');
            mockField.getParent.returns({
                getModelFile: () => {
                    return mockModelFile;
                }
            });
            mockField.isOptional.returns(false);

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: 'Acreage',
                required: true
            });

            mockModelFile.accept.withArgs(loopbackVisit, param).calledOnce.should.be.ok;
        });

        it('should return a JSON schema for a class using FQN', () => {
            let param = {};

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile.isModelFile.returns(true);
            mockModelFile.getType.withArgs('Acreage').returns({
                accept: mockModelFile.accept
            });

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Horse');
            mockField.getType.returns('Acreage');
            mockField.getFullyQualifiedTypeName.returns('org.acme.Horse.Acreage');
            mockField.getParent.returns({
                getModelFile: () => {
                    return mockModelFile;
                }
            });
            mockField.isOptional.returns(false);

            loopbackVisit.namespaces = true;

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: 'org_acme_Horse_Acreage',
                required: true
            });

            mockModelFile.accept.withArgs(loopbackVisit, param).calledOnce.should.be.ok;
        });

        it('should return a JSON schema for a class without calling accept', () => {
            let param = {
                'org.acme.Horse.Acreage': 'Something'
            };

            let mockModelFile = sinon.createStubInstance(ModelFile);
            mockModelFile.isModelFile.returns(true);
            mockModelFile.getType.withArgs('Acreage').returns({
                accept: mockModelFile.accept
            });

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Horse');
            mockField.getType.returns('Acreage');
            mockField.getFullyQualifiedTypeName.returns('org.acme.Horse.Acreage');
            mockField.getParent.returns({
                getModelFile: () => {
                    return mockModelFile;
                }
            });
            mockField.isOptional.returns(false);

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: 'Acreage',
                required: true
            });

            mockModelFile.accept.callCount.should.deep.equal(0);
        });

        it('should return a JSON schema for a primitive that is an array', () => {
            let param = {};

            let mockField = sinon.createStubInstance(Field);
            mockField.isField.returns(true);
            mockField.getName.returns('Horse');
            mockField.isPrimitive.returns(true);
            mockField.getType.returns('String');
            mockField.getParent.returns({
                getIdentifierFieldName: () => {
                    return 'Farmer';
                }
            });
            mockField.isOptional.returns(false);
            mockField.isArray.returns(true);

            loopbackVisit.visitField(mockField, param).should.deep.equal({
                type: ['string'],
                required: false,
                default: []
            });
        });
    });

    describe('visitEnumDeclaration', () => {
        it('should create a JSON schema for an enum declaration', () => {
            let param = {};

            let mockEnumDecl = sinon.createStubInstance(EnumDeclaration);
            mockEnumDecl.accept.withArgs(loopbackVisit, param).returns('Duck');
            mockEnumDecl.isEnum.returns(true);
            mockEnumDecl.getProperties.returns([
                {
                    accept: mockEnumDecl.accept
                },
                {
                    accept: mockEnumDecl.accept
                }
            ]);

            loopbackVisit.visitEnumDeclaration(mockEnumDecl, param).should.deep.equal({
                type: 'string',
                enum: ['Duck', 'Duck']
            });
        });
    });

    describe('visitEnumValueDeclaration', () => {
        it('should return the enumValueDeclaration\'s name', () => {
            let mockEnumValDecl = sinon.createStubInstance(EnumValueDeclaration);
            mockEnumValDecl.isEnumValue.returns(true);
            mockEnumValDecl.getName.returns('Bob');

            loopbackVisit.visitEnumValueDeclaration(mockEnumValDecl, {}).should.deep.equal('Bob');
        });
    });

    describe('visitRelationshipDeclaration', () => {
        it('should return a JSONSchema for a relationship', () => {
            let mockRelationshipDeclaration = sinon.createStubInstance(RelationshipDeclaration);
            mockRelationshipDeclaration.isRelationship.returns(true);
            mockRelationshipDeclaration.getName.returns('Bob');
            mockRelationshipDeclaration.isOptional.returns(false);

            loopbackVisit.visitRelationshipDeclaration(mockRelationshipDeclaration, {}).should.deep.equal({
                type: 'any',
                description: 'The identifier of an instance of Bob',
                required: true
            });
        });

        it('should return a JSONSchema for a relationship that is an array', () => {
            let mockRelationshipDeclaration = sinon.createStubInstance(RelationshipDeclaration);
            mockRelationshipDeclaration.isRelationship.returns(true);
            mockRelationshipDeclaration.getName.returns('Bob');
            mockRelationshipDeclaration.isOptional.returns(false);
            mockRelationshipDeclaration.isArray.returns(true);

            loopbackVisit.visitRelationshipDeclaration(mockRelationshipDeclaration, {}).should.deep.equal({
                type: ['any'],
                description: 'The identifier of an instance of Bob',
                required: true
            });
        });
    });
});