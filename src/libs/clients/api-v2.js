import _ from 'underscore';
import AmoApiClient from './api';

/**
 * @classdesc Client for api v2 of amoCRM
 * @extends AmoApiClient
 */
class AmoV2ApiClient extends AmoApiClient {
  /**
   * @param {RequesterClass} request
   * @param {PromoClientClass} promoClient
   */
  constructor(request, promoClient) {
    super(request, promoClient);
    let elementsPaths = {};

    _.each(['contacts', 'companies', 'leads', 'tasks', 'notes'], (entity) => {
      elementsPaths[`${entity}/list`] = `api/v2/${entity}/`;
      elementsPaths[`${entity}/set`] = `api/v2/${entity}/`;
    });

    // noinspection JSAccessibilityCheck
    _.extend(this._pathMatch, elementsPaths);

    _.each(_.keys(elementsPaths), (path) => {
      let entity;
      let method;
      let entityCamel;

      [entity, method] = path.split('/');
      entityCamel = entity.substr(0, 1).toUpperCase() + entity.substr(1);

      switch (method) {
        case 'list':
          this[`${method}${entityCamel}`] = this._buildListMethod(entity);
          break;
        case 'set':
          this[`${method}${entityCamel}`] = this._buildSetMethod(entity);
          this[`add${entityCamel}`] = this._buildAddMethod(entity);
          this[`update${entityCamel}`] = this._buildUpdateMethod(entity);
          break;
      }
    }, this);
  }

  /**
   * @description Get list of companies
   * @method listCompanies
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Add companies
   * @method addCompanies
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} companies
   * @return {Promise}
   */

  /**
   * @description Update companies
   * @method updateCompanies
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} companies
   * @return {Promise}
   */

  /**
   * @description Execute set method of companies
   * @method setCompanies
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} data
   * @param {Array} [data.add]
   * @param {Array} [data.update]
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Get list of contacts
   * @method listContacts
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Add contacts
   * @method addContacts
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} contacts
   * @return {Promise}
   */

  /**
   * @description Update contacts
   * @method updateContacts
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} contacts
   * @return {Promise}
   */

  /**
   * @description Execute set method of contacts
   * @method setContacts
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} data
   * @param {Array} [data.add]
   * @param {Array} [data.update]
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Get list of leads
   * @method listLeads
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Add leads
   * @method addLeads
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} leads
   * @return {Promise}
   */

  /**
   * @description Update leads
   * @method updateLeads
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} leads
   * @return {Promise}
   */

  /**
   * @description Execute set method of leads
   * @method setLeads
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} data
   * @param {Array} [data.add]
   * @param {Array} [data.update]
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Get list of tasks
   * @method listTasks
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Add tasks
   * @method addTasks
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} tasks
   * @return {Promise}
   */

  /**
   * @description Update tasks
   * @method updateTasks
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} tasks
   * @return {Promise}
   */

  /**
   * @description Execute set method of tasks
   * @method setTasks
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} data
   * @param {Array} [data.add]
   * @param {Array} [data.update]
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Get list of notes
   * @method listNotes
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @description Add notes
   * @method addNotes
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} notes
   * @return {Promise}
   */

  /**
   * @description Update notes
   * @method updateNotes
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Array} notes
   * @return {Promise}
   */

  /**
   * @description Execute set method of notes
   * @method setNotes
   * @memberOf AmoV2ApiClient
   * @instance
   * @public
   * @param {Object} data
   * @param {Array} [data.add]
   * @param {Array} [data.update]
   * @param {Object} [qs]
   * @return {Promise}
   */

  /**
   * @param {string} entity
   * @param {boolean} [checkPagination]
   * @return {function(*)}
   * @protected
   * @override
   * @memberOf AmoV2ApiClient
   * @instance
   */
  _buildListMethod(entity, checkPagination) {
    return (qs, withPagination) => {
      return new Promise((resolve, reject) => {
        this._get(`${entity}/list`, qs).then((res) => {
              if (!res || !res._embedded || !res._embedded.items) {
                return reject(res);
              }

              if (checkPagination === true && withPagination === true) {
                return resolve(res);
              }

              return resolve(res._embedded.items);
            },
            reject
        );
      });
    };
  }

  /**
   * @param {string} entity
   * @return {function(*)}
   * @protected
   * @memberOf AmoV2ApiClient
   * @instance
   */
  _buildSetMethod(entity) {
    return (data, qs) => {
      return new Promise((resolve, reject) => {
        this._post(`${entity}/set`, data, qs).then(
            (resp) => this._resolveAction(resp, resolve, reject),
            reject
        );
      });
    };
  }

  /**
   * @param {Object} resp
   * @param {function} resolve
   * @param {function} reject
   * @return {*}
   * @protected
   * @memberOf AmoV2ApiClient
   * @instance
   */
  _resolveAction(resp, resolve, reject) {
    if (!resp || !resp._embedded || !resp._embedded.items) {
      return reject(resp);
    }

    return resolve(resp._embedded.items);
  }

  /**
   * @param {string} entity
   * @return {function(*)}
   * @protected
   * @memberOf AmoV2ApiClient
   * @instance
   */
  _buildAddMethod(entity) {
    return this._buildActionMethod('add', entity);
  }

  /**
   * @param {string} entity
   * @return {function(*)}
   * @protected
   * @memberOf AmoV2ApiClient
   * @instance
   */
  _buildUpdateMethod(entity) {
    return this._buildActionMethod('update', entity);
  }

  /**
   * @param {string} action
   * @param {string} entity
   * @return {function(*)}
   * @protected
   * @memberOf AmoV2ApiClient
   * @instance
   */
  _buildActionMethod(action, entity) {
    return (elements) => {
      let entityCamel = entity.substr(0, 1).toUpperCase() + entity.substr(1);
      let form = {};
      form[action] = elements;

      return new Promise((resolve, reject) => {
        this[`set${entityCamel}`](form).then(resolve, reject);
      });
    };
  }
}

export default AmoV2ApiClient;
