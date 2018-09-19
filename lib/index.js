'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactTableDefaults = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _lifecycle = require('./lifecycle');

var _lifecycle2 = _interopRequireDefault(_lifecycle);

var _methods = require('./methods');

var _methods2 = _interopRequireDefault(_methods);

var _defaultProps = require('./defaultProps');

var _defaultProps2 = _interopRequireDefault(_defaultProps);

var _propTypes = require('./propTypes');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//


var ReactTableDefaults = exports.ReactTableDefaults = _defaultProps2.default;

var ReactTable = function (_Methods) {
  _inherits(ReactTable, _Methods);

  function ReactTable(props) {
    _classCallCheck(this, ReactTable);

    var _this = _possibleConstructorReturn(this, (ReactTable.__proto__ || Object.getPrototypeOf(ReactTable)).call(this));

    _this.getResolvedState = _this.getResolvedState.bind(_this);
    _this.getDataModel = _this.getDataModel.bind(_this);
    _this.getSortedData = _this.getSortedData.bind(_this);
    _this.fireFetchData = _this.fireFetchData.bind(_this);
    _this.getPropOrState = _this.getPropOrState.bind(_this);
    _this.getStateOrProp = _this.getStateOrProp.bind(_this);
    _this.filterData = _this.filterData.bind(_this);
    _this.sortData = _this.sortData.bind(_this);
    _this.getMinRows = _this.getMinRows.bind(_this);
    _this.onPageChange = _this.onPageChange.bind(_this);
    _this.onPageSizeChange = _this.onPageSizeChange.bind(_this);
    _this.sortColumn = _this.sortColumn.bind(_this);
    _this.filterColumn = _this.filterColumn.bind(_this);
    _this.resizeColumnStart = _this.resizeColumnStart.bind(_this);
    _this.resizeColumnEnd = _this.resizeColumnEnd.bind(_this);
    _this.resizeColumnMoving = _this.resizeColumnMoving.bind(_this);

    _this.state = {
      page: props.defaultPage,
      pageSize: props.defaultPageSize,
      sorted: props.defaultSorted,
      expanded: props.defaultExpanded,
      filtered: props.defaultFiltered,
      resized: props.defaultResized,
      currentlyResizing: false,
      skipNextSort: false
    };
    return _this;
  }

  _createClass(ReactTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var resolvedState = this.getResolvedState();
      var children = resolvedState.children,
          className = resolvedState.className,
          style = resolvedState.style,
          getProps = resolvedState.getProps,
          getTableProps = resolvedState.getTableProps,
          getTheadGroupProps = resolvedState.getTheadGroupProps,
          getTheadGroupTrProps = resolvedState.getTheadGroupTrProps,
          getTheadGroupThProps = resolvedState.getTheadGroupThProps,
          getTheadProps = resolvedState.getTheadProps,
          getTheadTrProps = resolvedState.getTheadTrProps,
          getTheadThProps = resolvedState.getTheadThProps,
          getTheadFilterProps = resolvedState.getTheadFilterProps,
          getTheadFilterTrProps = resolvedState.getTheadFilterTrProps,
          getTheadFilterThProps = resolvedState.getTheadFilterThProps,
          getTbodyProps = resolvedState.getTbodyProps,
          getTrGroupProps = resolvedState.getTrGroupProps,
          getTrProps = resolvedState.getTrProps,
          getTdProps = resolvedState.getTdProps,
          getTfootProps = resolvedState.getTfootProps,
          getTfootTrProps = resolvedState.getTfootTrProps,
          getTfootTdProps = resolvedState.getTfootTdProps,
          getPaginationProps = resolvedState.getPaginationProps,
          getLoadingProps = resolvedState.getLoadingProps,
          getNoDataProps = resolvedState.getNoDataProps,
          getResizerProps = resolvedState.getResizerProps,
          showPagination = resolvedState.showPagination,
          showPaginationTop = resolvedState.showPaginationTop,
          showPaginationBottom = resolvedState.showPaginationBottom,
          manual = resolvedState.manual,
          loadingText = resolvedState.loadingText,
          noDataText = resolvedState.noDataText,
          sortable = resolvedState.sortable,
          multiSort = resolvedState.multiSort,
          resizable = resolvedState.resizable,
          filterable = resolvedState.filterable,
          pivotIDKey = resolvedState.pivotIDKey,
          pivotValKey = resolvedState.pivotValKey,
          pivotBy = resolvedState.pivotBy,
          subRowsKey = resolvedState.subRowsKey,
          aggregatedKey = resolvedState.aggregatedKey,
          originalKey = resolvedState.originalKey,
          indexKey = resolvedState.indexKey,
          groupedByPivotKey = resolvedState.groupedByPivotKey,
          loading = resolvedState.loading,
          pageSize = resolvedState.pageSize,
          page = resolvedState.page,
          sorted = resolvedState.sorted,
          filtered = resolvedState.filtered,
          resized = resolvedState.resized,
          expanded = resolvedState.expanded,
          pages = resolvedState.pages,
          onExpandedChange = resolvedState.onExpandedChange,
          TableComponent = resolvedState.TableComponent,
          TheadComponent = resolvedState.TheadComponent,
          TbodyComponent = resolvedState.TbodyComponent,
          TrGroupComponent = resolvedState.TrGroupComponent,
          TrComponent = resolvedState.TrComponent,
          ThComponent = resolvedState.ThComponent,
          TdComponent = resolvedState.TdComponent,
          TfootComponent = resolvedState.TfootComponent,
          PaginationComponent = resolvedState.PaginationComponent,
          LoadingComponent = resolvedState.LoadingComponent,
          SubComponent = resolvedState.SubComponent,
          NoDataComponent = resolvedState.NoDataComponent,
          ResizerComponent = resolvedState.ResizerComponent,
          ExpanderComponent = resolvedState.ExpanderComponent,
          PivotValueComponent = resolvedState.PivotValueComponent,
          PivotComponent = resolvedState.PivotComponent,
          AggregatedComponent = resolvedState.AggregatedComponent,
          FilterComponent = resolvedState.FilterComponent,
          PadRowComponent = resolvedState.PadRowComponent,
          resolvedData = resolvedState.resolvedData,
          allVisibleColumns = resolvedState.allVisibleColumns,
          headerGroups = resolvedState.headerGroups,
          hasHeaderGroups = resolvedState.hasHeaderGroups,
          sortedData = resolvedState.sortedData,
          currentlyResizing = resolvedState.currentlyResizing;

      // Pagination

      var startRow = pageSize * page;
      var endRow = startRow + pageSize;
      var pageRows = manual ? resolvedData : sortedData.slice(startRow, endRow);
      var minRows = this.getMinRows();
      var padRows = _utils2.default.range(Math.max(minRows - pageRows.length, 0));

      var hasColumnFooter = allVisibleColumns.some(function (d) {
        return d.Footer;
      });
      var hasFilters = filterable || allVisibleColumns.some(function (d) {
        return d.filterable;
      });

      var recurseRowsViewIndex = function recurseRowsViewIndex(rows) {
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        return [rows.map(function (row, i) {
          index += 1;
          var rowWithViewIndex = _extends({}, row, {
            _viewIndex: index
          });
          var newPath = path.concat([i]);
          if (rowWithViewIndex[subRowsKey] && _utils2.default.get(expanded, newPath)) {
            var _recurseRowsViewIndex = recurseRowsViewIndex(rowWithViewIndex[subRowsKey], newPath, index);

            var _recurseRowsViewIndex2 = _slicedToArray(_recurseRowsViewIndex, 2);

            rowWithViewIndex[subRowsKey] = _recurseRowsViewIndex2[0];
            index = _recurseRowsViewIndex2[1];
          }
          return rowWithViewIndex;
        }), index];
      };

      var _recurseRowsViewIndex3 = recurseRowsViewIndex(pageRows);

      var _recurseRowsViewIndex4 = _slicedToArray(_recurseRowsViewIndex3, 1);

      pageRows = _recurseRowsViewIndex4[0];


      var canPrevious = page > 0;
      var canNext = page + 1 < pages;

      var rowMinWidth = _utils2.default.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _utils2.default.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
      }));

      var rowIndex = -1;

      var finalState = _extends({}, resolvedState, {
        startRow: startRow,
        endRow: endRow,
        pageRows: pageRows,
        minRows: minRows,
        padRows: padRows,
        hasColumnFooter: hasColumnFooter,
        canPrevious: canPrevious,
        canNext: canNext,
        rowMinWidth: rowMinWidth
      });

      var rootProps = _utils2.default.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _utils2.default.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _utils2.default.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _utils2.default.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _utils2.default.sum(column.columns.map(function (col) {
          return _utils2.default.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _utils2.default.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: _utils2.default.asPx(width),
          maxWidth: _utils2.default.asPx(maxWidth)
        };

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _utils2.default.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _utils2.default.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _utils2.default.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadGroupProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadGroupTrProps.className,
              style: theadGroupTrProps.style
            }, theadGroupTrProps.rest),
            headerGroups.map(makeHeaderGroup)
          )
        );
      };

      var makeHeader = function makeHeader(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var sort = sorted.find(function (d) {
          return d.id === column.id;
        });
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _utils2.default.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _utils2.default.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? _react2.default.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, getResizerProps('finalState', undefined, column, _this2))) : null;

        var isSortable = _utils2.default.getFirstDefined(column.sortable, sortable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            }),
            toggleSort: function toggleSort(e) {
              if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
            }
          }, rest),
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(isResizable && 'rt-resizable-header-content') },
            _utils2.default.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _utils2.default.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _utils2.default.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-header', theadProps.className),
            style: _extends({}, theadProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadTrProps.className,
              style: theadTrProps.style
            }, theadTrProps.rest),
            allVisibleColumns.map(makeHeader)
          )
        );
      };

      var makeFilter = function makeFilter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _utils2.default.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _utils2.default.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _utils2.default.getFirstDefined(column.filterable, filterable, false);

        return _react2.default.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, rest),
          isFilterable ? _utils2.default.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, _defaultProps2.default.column.Filter) : null
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _utils2.default.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _utils2.default.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TheadComponent,
          _extends({
            className: (0, _classnames2.default)('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadFilterProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: theadFilterTrProps.className,
              style: theadFilterTrProps.style
            }, theadFilterTrProps.rest),
            allVisibleColumns.map(makeFilter)
          )
        );
      };

      var makePageRow = function makePageRow(row, i) {
        var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var rowInfo = {
          original: row[originalKey],
          row: row,
          index: row[indexKey],
          viewIndex: rowIndex += 1,
          pageSize: pageSize,
          page: page,
          level: path.length,
          nestingPath: path.concat([i]),
          aggregated: row[aggregatedKey],
          groupedByPivot: row[groupedByPivotKey],
          subRows: row[subRowsKey]
        };
        var isExpanded = _utils2.default.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _utils2.default.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _utils2.default.splitProps(column.getProps(finalState, rowInfo, column, _this2));

              var classes = [tdProps.className, column.className, columnProps.className];

              var styles = _extends({}, tdProps.style, column.style, columnProps.style);

              var cellInfo = _extends({}, rowInfo, {
                isExpanded: isExpanded,
                column: _extends({}, column),
                value: rowInfo.row[column.id],
                pivoted: column.pivoted,
                expander: column.expander,
                resized: resized,
                show: show,
                width: width,
                maxWidth: maxWidth,
                tdProps: tdProps,
                columnProps: columnProps,
                classes: classes,
                styles: styles
              });

              var value = cellInfo.value;

              var useOnExpanderClick = void 0;
              var isBranch = void 0;
              var isPreview = void 0;

              var onExpanderClick = function onExpanderClick(e) {
                var newExpanded = _utils2.default.clone(expanded);
                if (isExpanded) {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _utils2.default.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _utils2.default.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(ResolvedExpanderComponent, props),
                  _react2.default.createElement(ResolvedPivotValueComponent, props)
                );
              };
              var ResolvedPivotComponent = column.Pivot || DefaultResolvedPivotComponent;

              // Is this cell expandable?
              if (cellInfo.pivoted || cellInfo.expander) {
                // Make it expandable by defualt
                cellInfo.expandable = true;
                useOnExpanderClick = true;
                // If pivoted, has no subRows, and does not have a subComponent,
                // do not make expandable
                if (cellInfo.pivoted && !cellInfo.subRows && !SubComponent) {
                  cellInfo.expandable = false;
                }
              }

              if (cellInfo.pivoted) {
                // Is this column a branch?
                isBranch = rowInfo.row[pivotIDKey] === column.id && cellInfo.subRows;
                // Should this column be blank?
                isPreview = pivotBy.indexOf(column.id) > pivotBy.indexOf(rowInfo.row[pivotIDKey]) && cellInfo.subRows;
                // Pivot Cell Render Override
                if (isBranch) {
                  // isPivot
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _utils2.default.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
                if (pivotBy) {
                  if (cellInfo.groupedByPivot) {
                    resolvedCell = null;
                  }
                  if (!cellInfo.subRows && !SubComponent) {
                    resolvedCell = null;
                  }
                }
              }

              var resolvedOnExpanderClick = useOnExpanderClick ? onExpanderClick : function () {};

              // If there are multiple onClick events, make sure they don't
              // override eachother. This should maybe be expanded to handle all
              // function attributes
              var interactionProps = {
                onClick: resolvedOnExpanderClick
              };

              if (tdProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  tdProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              if (columnProps.rest.onClick) {
                interactionProps.onClick = function (e) {
                  columnProps.rest.onClick(e, function () {
                    return resolvedOnExpanderClick(e);
                  });
                };
              }

              // Return the cell
              return _react2.default.createElement(
                TdComponent
                // eslint-disable-next-line react/no-array-index-key
                ,
                _extends({ key: i2 + '-' + column.id,
                  className: (0, _classnames2.default)(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: _utils2.default.asPx(width),
                    maxWidth: _utils2.default.asPx(maxWidth)
                  })
                }, tdProps.rest, columnProps.rest, interactionProps),
                resolvedCell
              );
            })
          ),
          rowInfo.subRows && isExpanded && rowInfo.subRows.map(function (d, i) {
            return makePageRow(d, i, rowInfo.nestingPath);
          }),
          SubComponent && !rowInfo.subRows && isExpanded && SubComponent(rowInfo)
        );
      };

      var makePadColumn = function makePadColumn(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _utils2.default.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, tdProps.rest),
          _utils2.default.normalizeComponent(PadRowComponent)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        if (i === 0 && !pageRows.length) {
          return null;
        }
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _utils2.default.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TrGroupComponent,
          _extends({ key: 'pad-' + i }, trGroupProps),
          _react2.default.createElement(
            TrComponent,
            {
              className: (0, _classnames2.default)('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
              style: trProps.style || {}
            },
            allVisibleColumns.map(makePadColumn)
          )
        );
      };

      var makeColumnFooter = function makeColumnFooter(column, i) {
        var resizedCol = resized.find(function (x) {
          return x.id === column.id;
        }) || {};
        var show = typeof column.show === 'function' ? column.show() : column.show;
        var width = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _utils2.default.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _utils2.default.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _utils2.default.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _utils2.default.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return _react2.default.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: (0, _classnames2.default)(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _utils2.default.asPx(width),
              maxWidth: _utils2.default.asPx(maxWidth)
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _utils2.default.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _utils2.default.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, tFootProps.rest),
          _react2.default.createElement(
            TrComponent,
            _extends({
              className: (0, _classnames2.default)(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _utils2.default.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return _react2.default.createElement(PaginationComponent, _extends({}, resolvedState, {
          pages: pages,
          canPrevious: canPrevious,
          canNext: canNext,
          onPageChange: _this2.onPageChange,
          onPageSizeChange: _this2.onPageSizeChange,
          className: paginationProps.className,
          style: paginationProps.style
        }, paginationProps.rest));
      };

      var makeTable = function makeTable() {
        var pagination = makePagination();
        return _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? _react2.default.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          _react2.default.createElement(
            TableComponent,
            _extends({
              className: (0, _classnames2.default)(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            _react2.default.createElement(
              TbodyComponent,
              _extends({
                className: (0, _classnames2.default)(tBodyProps.className),
                style: _extends({}, tBodyProps.style, {
                  minWidth: rowMinWidth + 'px'
                })
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow),
              !pageRows.length && _react2.default.createElement(
                NoDataComponent,
                noDataProps,
                _utils2.default.normalizeComponent(noDataText)
              )
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? _react2.default.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          _react2.default.createElement(LoadingComponent, _extends({ loading: loading, loadingText: loadingText }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}((0, _methods2.default)((0, _lifecycle2.default)(_react.Component)));

ReactTable.propTypes = _propTypes2.default;
ReactTable.defaultProps = _defaultProps2.default;
exports.default = ReactTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdFRhYmxlRGVmYXVsdHMiLCJkZWZhdWx0UHJvcHMiLCJSZWFjdFRhYmxlIiwicHJvcHMiLCJnZXRSZXNvbHZlZFN0YXRlIiwiYmluZCIsImdldERhdGFNb2RlbCIsImdldFNvcnRlZERhdGEiLCJmaXJlRmV0Y2hEYXRhIiwiZ2V0UHJvcE9yU3RhdGUiLCJnZXRTdGF0ZU9yUHJvcCIsImZpbHRlckRhdGEiLCJzb3J0RGF0YSIsImdldE1pblJvd3MiLCJvblBhZ2VDaGFuZ2UiLCJvblBhZ2VTaXplQ2hhbmdlIiwic29ydENvbHVtbiIsImZpbHRlckNvbHVtbiIsInJlc2l6ZUNvbHVtblN0YXJ0IiwicmVzaXplQ29sdW1uRW5kIiwicmVzaXplQ29sdW1uTW92aW5nIiwic3RhdGUiLCJwYWdlIiwiZGVmYXVsdFBhZ2UiLCJwYWdlU2l6ZSIsImRlZmF1bHRQYWdlU2l6ZSIsInNvcnRlZCIsImRlZmF1bHRTb3J0ZWQiLCJleHBhbmRlZCIsImRlZmF1bHRFeHBhbmRlZCIsImZpbHRlcmVkIiwiZGVmYXVsdEZpbHRlcmVkIiwicmVzaXplZCIsImRlZmF1bHRSZXNpemVkIiwiY3VycmVudGx5UmVzaXppbmciLCJza2lwTmV4dFNvcnQiLCJyZXNvbHZlZFN0YXRlIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdHlsZSIsImdldFByb3BzIiwiZ2V0VGFibGVQcm9wcyIsImdldFRoZWFkR3JvdXBQcm9wcyIsImdldFRoZWFkR3JvdXBUclByb3BzIiwiZ2V0VGhlYWRHcm91cFRoUHJvcHMiLCJnZXRUaGVhZFByb3BzIiwiZ2V0VGhlYWRUclByb3BzIiwiZ2V0VGhlYWRUaFByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJQcm9wcyIsImdldFRoZWFkRmlsdGVyVHJQcm9wcyIsImdldFRoZWFkRmlsdGVyVGhQcm9wcyIsImdldFRib2R5UHJvcHMiLCJnZXRUckdyb3VwUHJvcHMiLCJnZXRUclByb3BzIiwiZ2V0VGRQcm9wcyIsImdldFRmb290UHJvcHMiLCJnZXRUZm9vdFRyUHJvcHMiLCJnZXRUZm9vdFRkUHJvcHMiLCJnZXRQYWdpbmF0aW9uUHJvcHMiLCJnZXRMb2FkaW5nUHJvcHMiLCJnZXROb0RhdGFQcm9wcyIsImdldFJlc2l6ZXJQcm9wcyIsInNob3dQYWdpbmF0aW9uIiwic2hvd1BhZ2luYXRpb25Ub3AiLCJzaG93UGFnaW5hdGlvbkJvdHRvbSIsIm1hbnVhbCIsImxvYWRpbmdUZXh0Iiwibm9EYXRhVGV4dCIsInNvcnRhYmxlIiwibXVsdGlTb3J0IiwicmVzaXphYmxlIiwiZmlsdGVyYWJsZSIsInBpdm90SURLZXkiLCJwaXZvdFZhbEtleSIsInBpdm90QnkiLCJzdWJSb3dzS2V5IiwiYWdncmVnYXRlZEtleSIsIm9yaWdpbmFsS2V5IiwiaW5kZXhLZXkiLCJncm91cGVkQnlQaXZvdEtleSIsImxvYWRpbmciLCJwYWdlcyIsIm9uRXhwYW5kZWRDaGFuZ2UiLCJUYWJsZUNvbXBvbmVudCIsIlRoZWFkQ29tcG9uZW50IiwiVGJvZHlDb21wb25lbnQiLCJUckdyb3VwQ29tcG9uZW50IiwiVHJDb21wb25lbnQiLCJUaENvbXBvbmVudCIsIlRkQ29tcG9uZW50IiwiVGZvb3RDb21wb25lbnQiLCJQYWdpbmF0aW9uQ29tcG9uZW50IiwiTG9hZGluZ0NvbXBvbmVudCIsIlN1YkNvbXBvbmVudCIsIk5vRGF0YUNvbXBvbmVudCIsIlJlc2l6ZXJDb21wb25lbnQiLCJFeHBhbmRlckNvbXBvbmVudCIsIlBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWRDb21wb25lbnQiLCJGaWx0ZXJDb21wb25lbnQiLCJQYWRSb3dDb21wb25lbnQiLCJyZXNvbHZlZERhdGEiLCJhbGxWaXNpYmxlQ29sdW1ucyIsImhlYWRlckdyb3VwcyIsImhhc0hlYWRlckdyb3VwcyIsInNvcnRlZERhdGEiLCJzdGFydFJvdyIsImVuZFJvdyIsInBhZ2VSb3dzIiwic2xpY2UiLCJtaW5Sb3dzIiwicGFkUm93cyIsIl8iLCJyYW5nZSIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJoYXNDb2x1bW5Gb290ZXIiLCJzb21lIiwiZCIsIkZvb3RlciIsImhhc0ZpbHRlcnMiLCJyZWN1cnNlUm93c1ZpZXdJbmRleCIsInJvd3MiLCJwYXRoIiwiaW5kZXgiLCJtYXAiLCJyb3ciLCJpIiwicm93V2l0aFZpZXdJbmRleCIsIl92aWV3SW5kZXgiLCJuZXdQYXRoIiwiY29uY2F0IiwiZ2V0IiwiY2FuUHJldmlvdXMiLCJjYW5OZXh0Iiwicm93TWluV2lkdGgiLCJzdW0iLCJyZXNpemVkQ29sdW1uIiwiZmluZCIsIngiLCJpZCIsImdldEZpcnN0RGVmaW5lZCIsInZhbHVlIiwid2lkdGgiLCJtaW5XaWR0aCIsInJvd0luZGV4IiwiZmluYWxTdGF0ZSIsInJvb3RQcm9wcyIsInNwbGl0UHJvcHMiLCJ1bmRlZmluZWQiLCJ0YWJsZVByb3BzIiwidEJvZHlQcm9wcyIsImxvYWRpbmdQcm9wcyIsIm5vRGF0YVByb3BzIiwibWFrZUhlYWRlckdyb3VwIiwiY29sdW1uIiwicmVzaXplZFZhbHVlIiwiY29sIiwiZmxleCIsImNvbHVtbnMiLCJtYXhXaWR0aCIsInRoZWFkR3JvdXBUaFByb3BzIiwiY29sdW1uSGVhZGVyUHJvcHMiLCJnZXRIZWFkZXJQcm9wcyIsImNsYXNzZXMiLCJoZWFkZXJDbGFzc05hbWUiLCJzdHlsZXMiLCJoZWFkZXJTdHlsZSIsInJlc3QiLCJmbGV4U3R5bGVzIiwiYXNQeCIsIm5vcm1hbGl6ZUNvbXBvbmVudCIsIkhlYWRlciIsImRhdGEiLCJtYWtlSGVhZGVyR3JvdXBzIiwidGhlYWRHcm91cFByb3BzIiwidGhlYWRHcm91cFRyUHJvcHMiLCJtYWtlSGVhZGVyIiwicmVzaXplZENvbCIsInNvcnQiLCJzaG93IiwidGhlYWRUaFByb3BzIiwiaXNSZXNpemFibGUiLCJyZXNpemVyIiwiZSIsImlzU29ydGFibGUiLCJkZXNjIiwiaW5jbHVkZXMiLCJzaGlmdEtleSIsIm1ha2VIZWFkZXJzIiwidGhlYWRQcm9wcyIsInRoZWFkVHJQcm9wcyIsIm1ha2VGaWx0ZXIiLCJ0aGVhZEZpbHRlclRoUHJvcHMiLCJmaWx0ZXIiLCJSZXNvbHZlZEZpbHRlckNvbXBvbmVudCIsIkZpbHRlciIsImlzRmlsdGVyYWJsZSIsIm9uQ2hhbmdlIiwibWFrZUZpbHRlcnMiLCJ0aGVhZEZpbHRlclByb3BzIiwidGhlYWRGaWx0ZXJUclByb3BzIiwibWFrZVBhZ2VSb3ciLCJyb3dJbmZvIiwib3JpZ2luYWwiLCJ2aWV3SW5kZXgiLCJsZXZlbCIsIm5lc3RpbmdQYXRoIiwiYWdncmVnYXRlZCIsImdyb3VwZWRCeVBpdm90Iiwic3ViUm93cyIsImlzRXhwYW5kZWQiLCJ0ckdyb3VwUHJvcHMiLCJ0clByb3BzIiwiam9pbiIsImkyIiwidGRQcm9wcyIsImNvbHVtblByb3BzIiwiY2VsbEluZm8iLCJwaXZvdGVkIiwiZXhwYW5kZXIiLCJ1c2VPbkV4cGFuZGVyQ2xpY2siLCJpc0JyYW5jaCIsImlzUHJldmlldyIsIm9uRXhwYW5kZXJDbGljayIsIm5ld0V4cGFuZGVkIiwiY2xvbmUiLCJzZXQiLCJzZXRTdGF0ZVdpdGhEYXRhIiwicmVzb2x2ZWRDZWxsIiwiQ2VsbCIsIlJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCIsIkFnZ3JlZ2F0ZWQiLCJhZ2dyZWdhdGUiLCJSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IiwiRXhwYW5kZXIiLCJSZXNvbHZlZFBpdm90VmFsdWVDb21wb25lbnQiLCJQaXZvdFZhbHVlIiwiRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJSZXNvbHZlZFBpdm90Q29tcG9uZW50IiwiUGl2b3QiLCJleHBhbmRhYmxlIiwiaW5kZXhPZiIsInJlc29sdmVkT25FeHBhbmRlckNsaWNrIiwiaW50ZXJhY3Rpb25Qcm9wcyIsIm9uQ2xpY2siLCJtYWtlUGFkQ29sdW1uIiwibWFrZVBhZFJvdyIsIm1ha2VDb2x1bW5Gb290ZXIiLCJ0Rm9vdFRkUHJvcHMiLCJjb2x1bW5Gb290ZXJQcm9wcyIsImdldEZvb3RlclByb3BzIiwibWFrZUNvbHVtbkZvb3RlcnMiLCJ0Rm9vdFByb3BzIiwidEZvb3RUclByb3BzIiwibWFrZVBhZ2luYXRpb24iLCJwYWdpbmF0aW9uUHJvcHMiLCJtYWtlVGFibGUiLCJwYWdpbmF0aW9uIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBTEE7OztBQU9PLElBQU1BLGtEQUFxQkMsc0JBQTNCOztJQUVjQyxVOzs7QUFJbkIsc0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFHbEIsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkYsSUFBbkIsT0FBckI7QUFDQSxVQUFLRyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJILElBQW5CLE9BQXJCO0FBQ0EsVUFBS0ksY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CSixJQUFwQixPQUF0QjtBQUNBLFVBQUtLLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkwsSUFBcEIsT0FBdEI7QUFDQSxVQUFLTSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JOLElBQWhCLE9BQWxCO0FBQ0EsVUFBS08sUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNQLElBQWQsT0FBaEI7QUFDQSxVQUFLUSxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JSLElBQWhCLE9BQWxCO0FBQ0EsVUFBS1MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCVCxJQUFsQixPQUFwQjtBQUNBLFVBQUtVLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCVixJQUF0QixPQUF4QjtBQUNBLFVBQUtXLFVBQUwsR0FBa0IsTUFBS0EsVUFB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QkUsb0JBQWxCLEdBQ0M7QUFBQTtBQUFBLGNBQUssV0FBVSxtQkFBZjtBQUFvQ29NO0FBQXBDLFdBREQsR0FFRyxJQXJDTjtBQXNDRSx3Q0FBQyxnQkFBRCxhQUFrQixTQUFTcEwsT0FBM0IsRUFBb0MsYUFBYWQsV0FBakQsSUFBa0V3RixZQUFsRTtBQXRDRixTQURGO0FBMENELE9BNUNEOztBQThDQTtBQUNBLGFBQU9ySCxXQUFXQSxTQUFTK0csVUFBVCxFQUFxQitHLFNBQXJCLEVBQWdDLElBQWhDLENBQVgsR0FBbURBLFdBQTFEO0FBQ0Q7Ozs7RUF0MUJxQyx1QkFBUSx5QkFBVUUsZ0JBQVYsQ0FBUixDOztBQUFuQm5RLFUsQ0FDWm9RLFMsR0FBWUEsbUI7QUFEQXBRLFUsQ0FFWkQsWSxHQUFlQSxzQjtrQkFGSEMsVSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG4vL1xuaW1wb3J0IF8gZnJvbSAnLi91dGlscydcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSAnLi9saWZlY3ljbGUnXG5pbXBvcnQgTWV0aG9kcyBmcm9tICcuL21ldGhvZHMnXG5pbXBvcnQgZGVmYXVsdFByb3BzIGZyb20gJy4vZGVmYXVsdFByb3BzJ1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tICcuL3Byb3BUeXBlcydcblxuZXhwb3J0IGNvbnN0IFJlYWN0VGFibGVEZWZhdWx0cyA9IGRlZmF1bHRQcm9wc1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdFRhYmxlIGV4dGVuZHMgTWV0aG9kcyhMaWZlY3ljbGUoQ29tcG9uZW50KSkge1xuICBzdGF0aWMgcHJvcFR5cGVzID0gcHJvcFR5cGVzXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHNcblxuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLmdldFJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0RGF0YU1vZGVsID0gdGhpcy5nZXREYXRhTW9kZWwuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0U29ydGVkRGF0YSA9IHRoaXMuZ2V0U29ydGVkRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5maXJlRmV0Y2hEYXRhID0gdGhpcy5maXJlRmV0Y2hEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFByb3BPclN0YXRlID0gdGhpcy5nZXRQcm9wT3JTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTdGF0ZU9yUHJvcCA9IHRoaXMuZ2V0U3RhdGVPclByb3AuYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZmlsdGVyRGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zb3J0RGF0YSA9IHRoaXMuc29ydERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0TWluUm93cyA9IHRoaXMuZ2V0TWluUm93cy5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VDaGFuZ2UgPSB0aGlzLm9uUGFnZUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5vblBhZ2VTaXplQ2hhbmdlID0gdGhpcy5vblBhZ2VTaXplQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnRDb2x1bW4gPSB0aGlzLnNvcnRDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMuZmlsdGVyQ29sdW1uID0gdGhpcy5maWx0ZXJDb2x1bW4uYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uU3RhcnQgPSB0aGlzLnJlc2l6ZUNvbHVtblN0YXJ0LmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbkVuZCA9IHRoaXMucmVzaXplQ29sdW1uRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLnJlc2l6ZUNvbHVtbk1vdmluZyA9IHRoaXMucmVzaXplQ29sdW1uTW92aW5nLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWdlOiBwcm9wcy5kZWZhdWx0UGFnZSxcbiAgICAgIHBhZ2VTaXplOiBwcm9wcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBzb3J0ZWQ6IHByb3BzLmRlZmF1bHRTb3J0ZWQsXG4gICAgICBleHBhbmRlZDogcHJvcHMuZGVmYXVsdEV4cGFuZGVkLFxuICAgICAgZmlsdGVyZWQ6IHByb3BzLmRlZmF1bHRGaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQ6IHByb3BzLmRlZmF1bHRSZXNpemVkLFxuICAgICAgY3VycmVudGx5UmVzaXppbmc6IGZhbHNlLFxuICAgICAgc2tpcE5leHRTb3J0OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHJlc29sdmVkU3RhdGUgPSB0aGlzLmdldFJlc29sdmVkU3RhdGUoKVxuICAgIGNvbnN0IHtcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc3R5bGUsXG4gICAgICBnZXRQcm9wcyxcbiAgICAgIGdldFRhYmxlUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwUHJvcHMsXG4gICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRQcm9wcyxcbiAgICAgIGdldFRoZWFkVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkVGhQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRyUHJvcHMsXG4gICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMsXG4gICAgICBnZXRUYm9keVByb3BzLFxuICAgICAgZ2V0VHJHcm91cFByb3BzLFxuICAgICAgZ2V0VHJQcm9wcyxcbiAgICAgIGdldFRkUHJvcHMsXG4gICAgICBnZXRUZm9vdFByb3BzLFxuICAgICAgZ2V0VGZvb3RUclByb3BzLFxuICAgICAgZ2V0VGZvb3RUZFByb3BzLFxuICAgICAgZ2V0UGFnaW5hdGlvblByb3BzLFxuICAgICAgZ2V0TG9hZGluZ1Byb3BzLFxuICAgICAgZ2V0Tm9EYXRhUHJvcHMsXG4gICAgICBnZXRSZXNpemVyUHJvcHMsXG4gICAgICBzaG93UGFnaW5hdGlvbixcbiAgICAgIHNob3dQYWdpbmF0aW9uVG9wLFxuICAgICAgc2hvd1BhZ2luYXRpb25Cb3R0b20sXG4gICAgICBtYW51YWwsXG4gICAgICBsb2FkaW5nVGV4dCxcbiAgICAgIG5vRGF0YVRleHQsXG4gICAgICBzb3J0YWJsZSxcbiAgICAgIG11bHRpU29ydCxcbiAgICAgIHJlc2l6YWJsZSxcbiAgICAgIGZpbHRlcmFibGUsXG4gICAgICAvLyBQaXZvdGluZyBTdGF0ZVxuICAgICAgcGl2b3RJREtleSxcbiAgICAgIHBpdm90VmFsS2V5LFxuICAgICAgcGl2b3RCeSxcbiAgICAgIHN1YlJvd3NLZXksXG4gICAgICBhZ2dyZWdhdGVkS2V5LFxuICAgICAgb3JpZ2luYWxLZXksXG4gICAgICBpbmRleEtleSxcbiAgICAgIGdyb3VwZWRCeVBpdm90S2V5LFxuICAgICAgLy8gU3RhdGVcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlU2l6ZSxcbiAgICAgIHBhZ2UsXG4gICAgICBzb3J0ZWQsXG4gICAgICBmaWx0ZXJlZCxcbiAgICAgIHJlc2l6ZWQsXG4gICAgICBleHBhbmRlZCxcbiAgICAgIHBhZ2VzLFxuICAgICAgb25FeHBhbmRlZENoYW5nZSxcbiAgICAgIC8vIENvbXBvbmVudHNcbiAgICAgIFRhYmxlQ29tcG9uZW50LFxuICAgICAgVGhlYWRDb21wb25lbnQsXG4gICAgICBUYm9keUNvbXBvbmVudCxcbiAgICAgIFRyR3JvdXBDb21wb25lbnQsXG4gICAgICBUckNvbXBvbmVudCxcbiAgICAgIFRoQ29tcG9uZW50LFxuICAgICAgVGRDb21wb25lbnQsXG4gICAgICBUZm9vdENvbXBvbmVudCxcbiAgICAgIFBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgICBMb2FkaW5nQ29tcG9uZW50LFxuICAgICAgU3ViQ29tcG9uZW50LFxuICAgICAgTm9EYXRhQ29tcG9uZW50LFxuICAgICAgUmVzaXplckNvbXBvbmVudCxcbiAgICAgIEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgUGl2b3RWYWx1ZUNvbXBvbmVudCxcbiAgICAgIFBpdm90Q29tcG9uZW50LFxuICAgICAgQWdncmVnYXRlZENvbXBvbmVudCxcbiAgICAgIEZpbHRlckNvbXBvbmVudCxcbiAgICAgIFBhZFJvd0NvbXBvbmVudCxcbiAgICAgIC8vIERhdGEgbW9kZWxcbiAgICAgIHJlc29sdmVkRGF0YSxcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLFxuICAgICAgaGVhZGVyR3JvdXBzLFxuICAgICAgaGFzSGVhZGVyR3JvdXBzLFxuICAgICAgLy8gU29ydGVkIERhdGFcbiAgICAgIHNvcnRlZERhdGEsXG4gICAgICBjdXJyZW50bHlSZXNpemluZyxcbiAgICB9ID0gcmVzb2x2ZWRTdGF0ZVxuXG4gICAgLy8gUGFnaW5hdGlvblxuICAgIGNvbnN0IHN0YXJ0Um93ID0gcGFnZVNpemUgKiBwYWdlXG4gICAgY29uc3QgZW5kUm93ID0gc3RhcnRSb3cgKyBwYWdlU2l6ZVxuICAgIGxldCBwYWdlUm93cyA9IG1hbnVhbCA/IHJlc29sdmVkRGF0YSA6IHNvcnRlZERhdGEuc2xpY2Uoc3RhcnRSb3csIGVuZFJvdylcbiAgICBjb25zdCBtaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzKClcbiAgICBjb25zdCBwYWRSb3dzID0gXy5yYW5nZShNYXRoLm1heChtaW5Sb3dzIC0gcGFnZVJvd3MubGVuZ3RoLCAwKSlcblxuICAgIGNvbnN0IGhhc0NvbHVtbkZvb3RlciA9IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLkZvb3RlcilcbiAgICBjb25zdCBoYXNGaWx0ZXJzID0gZmlsdGVyYWJsZSB8fCBhbGxWaXNpYmxlQ29sdW1ucy5zb21lKGQgPT4gZC5maWx0ZXJhYmxlKVxuXG4gICAgY29uc3QgcmVjdXJzZVJvd3NWaWV3SW5kZXggPSAocm93cywgcGF0aCA9IFtdLCBpbmRleCA9IC0xKSA9PiBbXG4gICAgICByb3dzLm1hcCgocm93LCBpKSA9PiB7XG4gICAgICAgIGluZGV4ICs9IDFcbiAgICAgICAgY29uc3Qgcm93V2l0aFZpZXdJbmRleCA9IHtcbiAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgX3ZpZXdJbmRleDogaW5kZXgsXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KFtpXSlcbiAgICAgICAgaWYgKHJvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0gJiYgXy5nZXQoZXhwYW5kZWQsIG5ld1BhdGgpKSB7XG4gICAgICAgICAgW3Jvd1dpdGhWaWV3SW5kZXhbc3ViUm93c0tleV0sIGluZGV4XSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KFxuICAgICAgICAgICAgcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSxcbiAgICAgICAgICAgIG5ld1BhdGgsXG4gICAgICAgICAgICBpbmRleFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93V2l0aFZpZXdJbmRleFxuICAgICAgfSksXG4gICAgICBpbmRleCxcbiAgICBdO1xuICAgIFtwYWdlUm93c10gPSByZWN1cnNlUm93c1ZpZXdJbmRleChwYWdlUm93cylcblxuICAgIGNvbnN0IGNhblByZXZpb3VzID0gcGFnZSA+IDBcbiAgICBjb25zdCBjYW5OZXh0ID0gcGFnZSArIDEgPCBwYWdlc1xuXG4gICAgY29uc3Qgcm93TWluV2lkdGggPSBfLnN1bShcbiAgICAgIGFsbFZpc2libGVDb2x1bW5zLm1hcChkID0+IHtcbiAgICAgICAgY29uc3QgcmVzaXplZENvbHVtbiA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGQuaWQpIHx8IHt9XG4gICAgICAgIHJldHVybiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sdW1uLnZhbHVlLCBkLndpZHRoLCBkLm1pbldpZHRoKVxuICAgICAgfSlcbiAgICApXG5cbiAgICBsZXQgcm93SW5kZXggPSAtMVxuXG4gICAgY29uc3QgZmluYWxTdGF0ZSA9IHtcbiAgICAgIC4uLnJlc29sdmVkU3RhdGUsXG4gICAgICBzdGFydFJvdyxcbiAgICAgIGVuZFJvdyxcbiAgICAgIHBhZ2VSb3dzLFxuICAgICAgbWluUm93cyxcbiAgICAgIHBhZFJvd3MsXG4gICAgICBoYXNDb2x1bW5Gb290ZXIsXG4gICAgICBjYW5QcmV2aW91cyxcbiAgICAgIGNhbk5leHQsXG4gICAgICByb3dNaW5XaWR0aCxcbiAgICB9XG5cbiAgICBjb25zdCByb290UHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgIGNvbnN0IHRhYmxlUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGFibGVQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgY29uc3QgdEJvZHlQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUYm9keVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICBjb25zdCBsb2FkaW5nUHJvcHMgPSBnZXRMb2FkaW5nUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgY29uc3Qgbm9EYXRhUHJvcHMgPSBnZXROb0RhdGFQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcblxuICAgIC8vIFZpc3VhbCBDb21wb25lbnRzXG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXAgPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkVmFsdWUgPSBjb2wgPT4gKHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbC5pZCkgfHwge30pLnZhbHVlXG4gICAgICBjb25zdCBmbGV4ID0gXy5zdW0oXG4gICAgICAgIGNvbHVtbi5jb2x1bW5zLm1hcChjb2wgPT4gKGNvbC53aWR0aCB8fCByZXNpemVkVmFsdWUoY29sKSA/IDAgOiBjb2wubWluV2lkdGgpKVxuICAgICAgKVxuICAgICAgY29uc3Qgd2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWluV2lkdGgpKVxuICAgICAgKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PiBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkVmFsdWUoY29sKSwgY29sLndpZHRoLCBjb2wubWF4V2lkdGgpKVxuICAgICAgKVxuXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEdyb3VwVGhQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkR3JvdXBUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmxleFN0eWxlcyA9IHtcbiAgICAgICAgZmxleDogYCR7ZmxleH0gMCBhdXRvYCxcbiAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2Ake2l9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICAuLi5mbGV4U3R5bGVzLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyR3JvdXBzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRHcm91cFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEdyb3VwVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRHcm91cFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXJHcm91cHMnLCB0aGVhZEdyb3VwUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRHcm91cFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50aGVhZEdyb3VwUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEdyb3VwVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRHcm91cFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGhlYWRHcm91cFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChtYWtlSGVhZGVyR3JvdXApfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzb3J0ID0gc29ydGVkLmZpbmQoZCA9PiBkLmlkID09PSBjb2x1bW4uaWQpXG4gICAgICBjb25zdCBzaG93ID0gdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1pbldpZHRoKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcbiAgICAgIGNvbnN0IHRoZWFkVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUaGVhZFRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLCB0aGVhZFRoUHJvcHMuY2xhc3NOYW1lLCBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWVdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZFRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNSZXNpemFibGUgPSBfLmdldEZpcnN0RGVmaW5lZChjb2x1bW4ucmVzaXphYmxlLCByZXNpemFibGUsIGZhbHNlKVxuICAgICAgY29uc3QgcmVzaXplciA9IGlzUmVzaXphYmxlID8gKFxuICAgICAgICA8UmVzaXplckNvbXBvbmVudFxuICAgICAgICAgIG9uTW91c2VEb3duPXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sdW1uLCBmYWxzZSl9XG4gICAgICAgICAgb25Ub3VjaFN0YXJ0PXtlID0+IHRoaXMucmVzaXplQ29sdW1uU3RhcnQoZSwgY29sdW1uLCB0cnVlKX1cbiAgICAgICAgICB7Li4uZ2V0UmVzaXplclByb3BzKCdmaW5hbFN0YXRlJywgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgKSA6IG51bGxcblxuICAgICAgY29uc3QgaXNTb3J0YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5zb3J0YWJsZSwgc29ydGFibGUsIGZhbHNlKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2Ake2l9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgIGlzUmVzaXphYmxlICYmICdydC1yZXNpemFibGUtaGVhZGVyJyxcbiAgICAgICAgICAgIHNvcnQgPyAoc29ydC5kZXNjID8gJy1zb3J0LWRlc2MnIDogJy1zb3J0LWFzYycpIDogJycsXG4gICAgICAgICAgICBpc1NvcnRhYmxlICYmICctY3Vyc29yLXBvaW50ZXInLFxuICAgICAgICAgICAgIXNob3cgJiYgJy1oaWRkZW4nLFxuICAgICAgICAgICAgcGl2b3RCeSAmJiBwaXZvdEJ5LnNsaWNlKDAsIC0xKS5pbmNsdWRlcyhjb2x1bW4uaWQpICYmICdydC1oZWFkZXItcGl2b3QnXG4gICAgICAgICAgKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdG9nZ2xlU29ydD17ZSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNTb3J0YWJsZSkgdGhpcy5zb3J0Q29sdW1uKGNvbHVtbiwgbXVsdGlTb3J0ID8gZS5zaGlmdEtleSA6IGZhbHNlKVxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhpc1Jlc2l6YWJsZSAmJiAncnQtcmVzaXphYmxlLWhlYWRlci1jb250ZW50Jyl9PlxuICAgICAgICAgICAge18ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5IZWFkZXIsIHtcbiAgICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3Jlc2l6ZXJ9XG4gICAgICAgIDwvVGhDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUhlYWRlcnMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRoZWFkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgICAgY29uc3QgdGhlYWRUclByb3BzID0gXy5zcGxpdFByb3BzKGdldFRoZWFkVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlYWRDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJy1oZWFkZXInLCB0aGVhZFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZFRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VIZWFkZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUZpbHRlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1pbldpZHRoKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVGhQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUaFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuICAgICAgY29uc3QgY29sdW1uSGVhZGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRIZWFkZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgY29sdW1uLmhlYWRlckNsYXNzTmFtZSxcbiAgICAgICAgdGhlYWRGaWx0ZXJUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdCA9IHtcbiAgICAgICAgLi4udGhlYWRGaWx0ZXJUaFByb3BzLnJlc3QsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnJlc3QsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlciA9IGZpbHRlcmVkLmZpbmQoZmlsdGVyID0+IGZpbHRlci5pZCA9PT0gY29sdW1uLmlkKVxuXG4gICAgICBjb25zdCBSZXNvbHZlZEZpbHRlckNvbXBvbmVudCA9IGNvbHVtbi5GaWx0ZXIgfHwgRmlsdGVyQ29tcG9uZW50XG5cbiAgICAgIGNvbnN0IGlzRmlsdGVyYWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5maWx0ZXJhYmxlLCBmaWx0ZXJhYmxlLCBmYWxzZSlcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4uc3R5bGVzLFxuICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNGaWx0ZXJhYmxlXG4gICAgICAgICAgICA/IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIFJlc29sdmVkRmlsdGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgIGZpbHRlcixcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlOiB2YWx1ZSA9PiB0aGlzLmZpbHRlckNvbHVtbihjb2x1bW4sIHZhbHVlKSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wcy5jb2x1bW4uRmlsdGVyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCB0aGVhZEZpbHRlclRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWZpbHRlcnMnLCB0aGVhZEZpbHRlclByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRoZWFkRmlsdGVyUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkRmlsdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGVhZEZpbHRlclRyUHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgICAgc3R5bGU9e3RoZWFkRmlsdGVyVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEZpbHRlclRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VGaWx0ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGhlYWRDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2VSb3cgPSAocm93LCBpLCBwYXRoID0gW10pID0+IHtcbiAgICAgIGNvbnN0IHJvd0luZm8gPSB7XG4gICAgICAgIG9yaWdpbmFsOiByb3dbb3JpZ2luYWxLZXldLFxuICAgICAgICByb3csXG4gICAgICAgIGluZGV4OiByb3dbaW5kZXhLZXldLFxuICAgICAgICB2aWV3SW5kZXg6IChyb3dJbmRleCArPSAxKSxcbiAgICAgICAgcGFnZVNpemUsXG4gICAgICAgIHBhZ2UsXG4gICAgICAgIGxldmVsOiBwYXRoLmxlbmd0aCxcbiAgICAgICAgbmVzdGluZ1BhdGg6IHBhdGguY29uY2F0KFtpXSksXG4gICAgICAgIGFnZ3JlZ2F0ZWQ6IHJvd1thZ2dyZWdhdGVkS2V5XSxcbiAgICAgICAgZ3JvdXBlZEJ5UGl2b3Q6IHJvd1tncm91cGVkQnlQaXZvdEtleV0sXG4gICAgICAgIHN1YlJvd3M6IHJvd1tzdWJSb3dzS2V5XSxcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzRXhwYW5kZWQgPSBfLmdldChleHBhbmRlZCwgcm93SW5mby5uZXN0aW5nUGF0aClcbiAgICAgIGNvbnN0IHRyR3JvdXBQcm9wcyA9IGdldFRyR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17cm93SW5mby5uZXN0aW5nUGF0aC5qb2luKCdfJyl9IHsuLi50ckdyb3VwUHJvcHN9PlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRyUHJvcHMuY2xhc3NOYW1lLCByb3cuX3ZpZXdJbmRleCAlIDIgPyAnLWV2ZW4nIDogJy1vZGQnKX1cbiAgICAgICAgICAgIHN0eWxlPXt0clByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKChjb2x1bW4sIGkyKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICAgICAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5taW5XaWR0aClcbiAgICAgICAgICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcbiAgICAgICAgICAgICAgY29uc3QgdGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUZFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcykpXG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVtblByb3BzID0gXy5zcGxpdFByb3BzKGNvbHVtbi5nZXRQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCBjb2x1bW4sIHRoaXMpKVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBbdGRQcm9wcy5jbGFzc05hbWUsIGNvbHVtbi5jbGFzc05hbWUsIGNvbHVtblByb3BzLmNsYXNzTmFtZV1cblxuICAgICAgICAgICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgICAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgICAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCBjZWxsSW5mbyA9IHtcbiAgICAgICAgICAgICAgICAuLi5yb3dJbmZvLFxuICAgICAgICAgICAgICAgIGlzRXhwYW5kZWQsXG4gICAgICAgICAgICAgICAgY29sdW1uOiB7IC4uLmNvbHVtbiB9LFxuICAgICAgICAgICAgICAgIHZhbHVlOiByb3dJbmZvLnJvd1tjb2x1bW4uaWRdLFxuICAgICAgICAgICAgICAgIHBpdm90ZWQ6IGNvbHVtbi5waXZvdGVkLFxuICAgICAgICAgICAgICAgIGV4cGFuZGVyOiBjb2x1bW4uZXhwYW5kZXIsXG4gICAgICAgICAgICAgICAgcmVzaXplZCxcbiAgICAgICAgICAgICAgICBzaG93LFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoLFxuICAgICAgICAgICAgICAgIHRkUHJvcHMsXG4gICAgICAgICAgICAgICAgY29sdW1uUHJvcHMsXG4gICAgICAgICAgICAgICAgY2xhc3NlcyxcbiAgICAgICAgICAgICAgICBzdHlsZXMsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNlbGxJbmZvLnZhbHVlXG5cbiAgICAgICAgICAgICAgbGV0IHVzZU9uRXhwYW5kZXJDbGlja1xuICAgICAgICAgICAgICBsZXQgaXNCcmFuY2hcbiAgICAgICAgICAgICAgbGV0IGlzUHJldmlld1xuXG4gICAgICAgICAgICAgIGNvbnN0IG9uRXhwYW5kZXJDbGljayA9IGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBuZXdFeHBhbmRlZCA9IF8uY2xvbmUoZXhwYW5kZWQpXG4gICAgICAgICAgICAgICAgaWYgKGlzRXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICAgIG5ld0V4cGFuZGVkID0gXy5zZXQobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBmYWxzZSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIHt9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNldFN0YXRlV2l0aERhdGEoXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBuZXdFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoKSA9PiBvbkV4cGFuZGVkQ2hhbmdlICYmIG9uRXhwYW5kZWRDaGFuZ2UobmV3RXhwYW5kZWQsIGNlbGxJbmZvLm5lc3RpbmdQYXRoLCBlKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIERlZmF1bHQgdG8gYSBzdGFuZGFyZCBjZWxsXG4gICAgICAgICAgICAgIGxldCByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uQ2VsbCwgY2VsbEluZm8sIHZhbHVlKVxuXG4gICAgICAgICAgICAgIC8vIFJlc29sdmUgUmVuZGVyZXJzXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgY29sdW1uLkFnZ3JlZ2F0ZWQgfHwgKCFjb2x1bW4uYWdncmVnYXRlID8gQWdncmVnYXRlZENvbXBvbmVudCA6IGNvbHVtbi5DZWxsKVxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50ID0gY29sdW1uLkV4cGFuZGVyIHx8IEV4cGFuZGVyQ29tcG9uZW50XG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCA9IGNvbHVtbi5QaXZvdFZhbHVlIHx8IFBpdm90VmFsdWVDb21wb25lbnRcbiAgICAgICAgICAgICAgY29uc3QgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnQgPVxuICAgICAgICAgICAgICAgIFBpdm90Q29tcG9uZW50IHx8XG4gICAgICAgICAgICAgICAgKHByb3BzID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBjb25zdCBSZXNvbHZlZFBpdm90Q29tcG9uZW50ID0gY29sdW1uLlBpdm90IHx8IERlZmF1bHRSZXNvbHZlZFBpdm90Q29tcG9uZW50XG5cbiAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjZWxsIGV4cGFuZGFibGU/XG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkIHx8IGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgICAgLy8gTWFrZSBpdCBleHBhbmRhYmxlIGJ5IGRlZnVhbHRcbiAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHVzZU9uRXhwYW5kZXJDbGljayA9IHRydWVcbiAgICAgICAgICAgICAgICAvLyBJZiBwaXZvdGVkLCBoYXMgbm8gc3ViUm93cywgYW5kIGRvZXMgbm90IGhhdmUgYSBzdWJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gZG8gbm90IG1ha2UgZXhwYW5kYWJsZVxuICAgICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkICYmICFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5waXZvdGVkKSB7XG4gICAgICAgICAgICAgICAgLy8gSXMgdGhpcyBjb2x1bW4gYSBicmFuY2g/XG4gICAgICAgICAgICAgICAgaXNCcmFuY2ggPSByb3dJbmZvLnJvd1twaXZvdElES2V5XSA9PT0gY29sdW1uLmlkICYmIGNlbGxJbmZvLnN1YlJvd3NcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgdGhpcyBjb2x1bW4gYmUgYmxhbms/XG4gICAgICAgICAgICAgICAgaXNQcmV2aWV3ID1cbiAgICAgICAgICAgICAgICAgIHBpdm90QnkuaW5kZXhPZihjb2x1bW4uaWQpID4gcGl2b3RCeS5pbmRleE9mKHJvd0luZm8ucm93W3Bpdm90SURLZXldKSAmJlxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAgIC8vIFBpdm90IENlbGwgUmVuZGVyIE92ZXJyaWRlXG4gICAgICAgICAgICAgICAgaWYgKGlzQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgICAvLyBpc1Bpdm90XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRQaXZvdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLmNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiByb3dbcGl2b3RWYWxLZXldLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ByZXZpZXcpIHtcbiAgICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIHBpdm90IHByZXZpZXdcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCwgY2VsbEluZm8sIHZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNlbGxJbmZvLmFnZ3JlZ2F0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlZENlbGwgPSBfLm5vcm1hbGl6ZUNvbXBvbmVudChSZXNvbHZlZEFnZ3JlZ2F0ZWRDb21wb25lbnQsIGNlbGxJbmZvLCB2YWx1ZSlcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjZWxsSW5mby5leHBhbmRlcikge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgUmVzb2x2ZWRFeHBhbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgIGNlbGxJbmZvLFxuICAgICAgICAgICAgICAgICAgcm93W3Bpdm90VmFsS2V5XVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpZiAocGl2b3RCeSkge1xuICAgICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmdyb3VwZWRCeVBpdm90KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICghY2VsbEluZm8uc3ViUm93cyAmJiAhU3ViQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCByZXNvbHZlZE9uRXhwYW5kZXJDbGljayA9IHVzZU9uRXhwYW5kZXJDbGljayA/IG9uRXhwYW5kZXJDbGljayA6ICgpID0+IHt9XG5cbiAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG11bHRpcGxlIG9uQ2xpY2sgZXZlbnRzLCBtYWtlIHN1cmUgdGhleSBkb24ndFxuICAgICAgICAgICAgICAvLyBvdmVycmlkZSBlYWNob3RoZXIuIFRoaXMgc2hvdWxkIG1heWJlIGJlIGV4cGFuZGVkIHRvIGhhbmRsZSBhbGxcbiAgICAgICAgICAgICAgLy8gZnVuY3Rpb24gYXR0cmlidXRlc1xuICAgICAgICAgICAgICBjb25zdCBpbnRlcmFjdGlvblByb3BzID0ge1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHJlc29sdmVkT25FeHBhbmRlckNsaWNrLFxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHRkUHJvcHMucmVzdC5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcy5vbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICB0ZFByb3BzLnJlc3Qub25DbGljayhlLCAoKSA9PiByZXNvbHZlZE9uRXhwYW5kZXJDbGljayhlKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoY29sdW1uUHJvcHMucmVzdC5vbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25Qcm9wcy5vbkNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcy5yZXN0Lm9uQ2xpY2soZSwgKCkgPT4gcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2soZSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBjZWxsXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICAgICAgICBrZXk9e2Ake2kyfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgICAgICAhc2hvdyAmJiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSAmJiAncnQtZXhwYW5kYWJsZScsXG4gICAgICAgICAgICAgICAgICAgIChpc0JyYW5jaCB8fCBpc1ByZXZpZXcpICYmICdydC1waXZvdCdcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgICAgey4uLmludGVyYWN0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3Jlc29sdmVkQ2VsbH1cbiAgICAgICAgICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICAgIHtyb3dJbmZvLnN1YlJvd3MgJiZcbiAgICAgICAgICAgIGlzRXhwYW5kZWQgJiZcbiAgICAgICAgICAgIHJvd0luZm8uc3ViUm93cy5tYXAoKGQsIGkpID0+IG1ha2VQYWdlUm93KGQsIGksIHJvd0luZm8ubmVzdGluZ1BhdGgpKX1cbiAgICAgICAgICB7U3ViQ29tcG9uZW50ICYmICFyb3dJbmZvLnN1YlJvd3MgJiYgaXNFeHBhbmRlZCAmJiBTdWJDb21wb25lbnQocm93SW5mbyl9XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkQ29sdW1uID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXG4gICAgICBjb25zdCBmbGV4ID0gd2lkdGhcbiAgICAgIGNvbnN0IG1heFdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWF4V2lkdGgpXG4gICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSlcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFt0ZFByb3BzLmNsYXNzTmFtZSwgY29sdW1uLmNsYXNzTmFtZSwgY29sdW1uUHJvcHMuY2xhc3NOYW1lXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRkUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHtmbGV4fSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50ZFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoUGFkUm93Q29tcG9uZW50KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFkUm93ID0gKHJvdywgaSkgPT4ge1xuICAgICAgaWYgKGkgPT09IDAgJiYgIXBhZ2VSb3dzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgfVxuICAgICAgY29uc3QgdHJHcm91cFByb3BzID0gZ2V0VHJHcm91cFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUckdyb3VwQ29tcG9uZW50IGtleT17YHBhZC0ke2l9YH0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICctcGFkUm93JyxcbiAgICAgICAgICAgICAgKHBhZ2VSb3dzLmxlbmd0aCArIGkpICUgMiA/ICctZXZlbicgOiAnLW9kZCcsXG4gICAgICAgICAgICAgIHRyUHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGUgfHwge319XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlUGFkQ29sdW1uKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1RyR3JvdXBDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZUNvbHVtbkZvb3RlciA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRDb2wgPSByZXNpemVkLmZpbmQoeCA9PiB4LmlkID09PSBjb2x1bW4uaWQpIHx8IHt9XG4gICAgICBjb25zdCBzaG93ID0gdHlwZW9mIGNvbHVtbi5zaG93ID09PSAnZnVuY3Rpb24nID8gY29sdW1uLnNob3coKSA6IGNvbHVtbi5zaG93XG4gICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1pbldpZHRoKVxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcbiAgICAgIGNvbnN0IHRGb290VGRQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUZm9vdFRkUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKSlcbiAgICAgIGNvbnN0IGNvbHVtbkZvb3RlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0Rm9vdGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIHRGb290VGRQcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtbi5jbGFzc05hbWUsXG4gICAgICAgIGNvbHVtblByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uRm9vdGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLnRGb290VGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uRm9vdGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3NlcywgIXNob3cgJiYgJ2hpZGRlbicpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4uY29sdW1uUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4udEZvb3RUZFByb3BzLnJlc3R9XG4gICAgICAgICAgey4uLmNvbHVtbkZvb3RlclByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkZvb3Rlciwge1xuICAgICAgICAgICAgZGF0YTogc29ydGVkRGF0YSxcbiAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRGb290UHJvcHMgPSBnZXRUZm9vdFByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgY29uc3QgdEZvb3RUclByb3BzID0gXy5zcGxpdFByb3BzKGdldFRmb290VHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGZvb3RDb21wb25lbnRcbiAgICAgICAgICBjbGFzc05hbWU9e3RGb290UHJvcHMuY2xhc3NOYW1lfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50Rm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi50Rm9vdFByb3BzLnJlc3R9XG4gICAgICAgID5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Rm9vdFRyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICAgIHN0eWxlPXt0Rm9vdFRyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udEZvb3RUclByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2FsbFZpc2libGVDb2x1bW5zLm1hcChtYWtlQ29sdW1uRm9vdGVyKX1cbiAgICAgICAgICA8L1RyQ29tcG9uZW50PlxuICAgICAgICA8L1Rmb290Q29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWdpbmF0aW9uID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvblByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRQYWdpbmF0aW9uUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICApXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnaW5hdGlvbkNvbXBvbmVudFxuICAgICAgICAgIHsuLi5yZXNvbHZlZFN0YXRlfVxuICAgICAgICAgIHBhZ2VzPXtwYWdlc31cbiAgICAgICAgICBjYW5QcmV2aW91cz17Y2FuUHJldmlvdXN9XG4gICAgICAgICAgY2FuTmV4dD17Y2FuTmV4dH1cbiAgICAgICAgICBvblBhZ2VDaGFuZ2U9e3RoaXMub25QYWdlQ2hhbmdlfVxuICAgICAgICAgIG9uUGFnZVNpemVDaGFuZ2U9e3RoaXMub25QYWdlU2l6ZUNoYW5nZX1cbiAgICAgICAgICBjbGFzc05hbWU9e3BhZ2luYXRpb25Qcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3BhZ2luYXRpb25Qcm9wcy5zdHlsZX1cbiAgICAgICAgICB7Li4ucGFnaW5hdGlvblByb3BzLnJlc3R9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVRhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IG1ha2VQYWdpbmF0aW9uKClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoJ1JlYWN0VGFibGUnLCBjbGFzc05hbWUsIHJvb3RQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgICAgIC4uLnJvb3RQcm9wcy5zdHlsZSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5yb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvblRvcCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi10b3BcIj57cGFnaW5hdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8VGFibGVDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0YWJsZVByb3BzLmNsYXNzTmFtZSwgY3VycmVudGx5UmVzaXppbmcgPyAncnQtcmVzaXppbmcnIDogJycpfVxuICAgICAgICAgICAgc3R5bGU9e3RhYmxlUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udGFibGVQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoYXNIZWFkZXJHcm91cHMgPyBtYWtlSGVhZGVyR3JvdXBzKCkgOiBudWxsfVxuICAgICAgICAgICAge21ha2VIZWFkZXJzKCl9XG4gICAgICAgICAgICB7aGFzRmlsdGVycyA/IG1ha2VGaWx0ZXJzKCkgOiBudWxsfVxuICAgICAgICAgICAgPFRib2R5Q29tcG9uZW50XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyh0Qm9keVByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgLi4udEJvZHlQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4udEJvZHlQcm9wcy5yZXN0fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZVJvd3MubWFwKChkLCBpKSA9PiBtYWtlUGFnZVJvdyhkLCBpKSl9XG4gICAgICAgICAgICAgIHtwYWRSb3dzLm1hcChtYWtlUGFkUm93KX1cbiAgICAgICAgICAgICAgeyFwYWdlUm93cy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxOb0RhdGFDb21wb25lbnQgey4uLm5vRGF0YVByb3BzfT57Xy5ub3JtYWxpemVDb21wb25lbnQobm9EYXRhVGV4dCl9PC9Ob0RhdGFDb21wb25lbnQ+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L1Rib2R5Q29tcG9uZW50PlxuICAgICAgICAgICAge2hhc0NvbHVtbkZvb3RlciA/IG1ha2VDb2x1bW5Gb290ZXJzKCkgOiBudWxsfVxuICAgICAgICAgIDwvVGFibGVDb21wb25lbnQ+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uQm90dG9tID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLWJvdHRvbVwiPntwYWdpbmF0aW9ufTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxMb2FkaW5nQ29tcG9uZW50IGxvYWRpbmc9e2xvYWRpbmd9IGxvYWRpbmdUZXh0PXtsb2FkaW5nVGV4dH0gey4uLmxvYWRpbmdQcm9wc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gY2hpbGRQcm9wcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgdG8gYSBmdW5jdGlvbi1hcy1hLWNoaWxkXG4gICAgcmV0dXJuIGNoaWxkcmVuID8gY2hpbGRyZW4oZmluYWxTdGF0ZSwgbWFrZVRhYmxlLCB0aGlzKSA6IG1ha2VUYWJsZSgpXG4gIH1cbn1cbiJdfQ==