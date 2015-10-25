/*!
 * Copyright 2015 mifort.org
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dbSettings = require('./libs/mongodb_settings');
var log = require('./libs/logger');

exports.restCommonReport = function(req, res, next) {
    var filterObj = req.body;
    log.debug('-REST call: common report. Company id', filterObj.companyId.toHexString());


};

function convertFiltersToQuery(filters){
    var query = {};
    filters.forEach(function(filter) {
        if(filter.field === 'date') {
            query.date = {$gte: filter.start,
                          $lte: filter.end};
        }
    });

    return query;
}