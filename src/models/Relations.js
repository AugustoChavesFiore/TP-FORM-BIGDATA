import { Gender } from './Gender.model.js';
import { Location } from './Location.model.js';
import { Study } from './Study.model.js';
import { Survey } from './Survey.model.js';

export const relations=()=>{
   Gender.hasOne(Survey, {foreignKey: 'idGender'});
   Survey.belongsTo(Gender, {foreignKey: 'idGender'});
   Location.hasOne(Survey, {foreignKey: 'idLocation'});
   Survey.belongsTo(Location, {foreignKey: 'idLocation'});
   Study.hasOne(Survey, {foreignKey: 'idStudy'});
   Survey.belongsTo(Study, {foreignKey: 'idStudy'});
}