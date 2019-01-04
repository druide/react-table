var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import classnames from 'classnames';
//
import _ from './utils';
import Lifecycle from './lifecycle';
import Methods from './methods';
import defaultProps from './defaultProps';
import propTypes from './propTypes';

export var ReactTableDefaults = defaultProps;

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
          configurable = resolvedState.configurable,
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
          ConfigComponent = resolvedState.ConfigComponent,
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
      var padRows = _.range(Math.max(minRows - pageRows.length, 0));

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
          if (rowWithViewIndex[subRowsKey] && _.get(expanded, newPath)) {
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

      var rowMinWidth = _.sum(allVisibleColumns.map(function (d) {
        var resizedColumn = resized.find(function (x) {
          return x.id === d.id;
        }) || {};
        return _.getFirstDefined(resizedColumn.value, d.width, d.minWidth);
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

      var rootProps = _.splitProps(getProps(finalState, undefined, undefined, this));
      var tableProps = _.splitProps(getTableProps(finalState, undefined, undefined, this));
      var tBodyProps = _.splitProps(getTbodyProps(finalState, undefined, undefined, this));
      var loadingProps = getLoadingProps(finalState, undefined, undefined, this);
      var noDataProps = getNoDataProps(finalState, undefined, undefined, this);

      // Visual Components

      var makeHeaderGroup = function makeHeaderGroup(column, i) {
        var resizedValue = function resizedValue(col) {
          return (resized.find(function (x) {
            return x.id === col.id;
          }) || {}).value;
        };
        var flex = _.sum(column.columns.map(function (col) {
          return col.width || resizedValue(col) ? 0 : col.minWidth;
        }));
        var width = _.sum(column.columns.map(function (col) {
          return _.getFirstDefined(resizedValue(col), col.width, col.minWidth);
        }));
        var maxWidth = _.sum(column.columns.map(function (col) {
          return _.getFirstDefined(resizedValue(col), col.width, col.maxWidth);
        }));

        var theadGroupThProps = _.splitProps(getTheadGroupThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadGroupThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadGroupThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadGroupThProps.rest, columnHeaderProps.rest);

        var flexStyles = {
          flex: flex + ' 0 auto',
          width: _.asPx(width),
          maxWidth: _.asPx(maxWidth)
        };

        return React.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: classnames(classes),
            style: _extends({}, styles, flexStyles)
          }, rest),
          _.normalizeComponent(column.Header, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeConfig = function makeConfig() {
        return ConfigComponent;
      };

      var makeHeaderGroups = function makeHeaderGroups() {
        var theadGroupProps = _.splitProps(getTheadGroupProps(finalState, undefined, undefined, _this2));
        var theadGroupTrProps = _.splitProps(getTheadGroupTrProps(finalState, undefined, undefined, _this2));
        return React.createElement(
          TheadComponent,
          _extends({
            className: classnames('-headerGroups', theadGroupProps.className),
            style: _extends({}, theadGroupProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadGroupProps.rest),
          React.createElement(
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
        var width = _.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadThProps = _.splitProps(getTheadThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadThProps.rest, columnHeaderProps.rest);

        var isResizable = _.getFirstDefined(column.resizable, resizable, false);
        var resizer = isResizable ? React.createElement(ResizerComponent, _extends({
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeColumnStart(e, column, false);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeColumnStart(e, column, true);
          }
        }, getResizerProps('finalState', undefined, column, _this2))) : null;

        var isSortable = _.getFirstDefined(column.sortable, sortable, false);

        return React.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: classnames(classes, isResizable && 'rt-resizable-header', sort ? sort.desc ? '-sort-desc' : '-sort-asc' : '', isSortable && '-cursor-pointer', !show && '-hidden', pivotBy && pivotBy.slice(0, -1).includes(column.id) && 'rt-header-pivot'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _.asPx(width),
              maxWidth: _.asPx(maxWidth)
            }),
            toggleSort: function toggleSort(e) {
              if (isSortable) _this2.sortColumn(column, multiSort ? e.shiftKey : false);
            }
          }, rest),
          React.createElement(
            'div',
            { className: classnames(isResizable && 'rt-resizable-header-content') },
            _.normalizeComponent(column.Header, {
              data: sortedData,
              column: column
            })
          ),
          resizer
        );
      };

      var makeHeaders = function makeHeaders() {
        var theadProps = _.splitProps(getTheadProps(finalState, undefined, undefined, _this2));
        var theadTrProps = _.splitProps(getTheadTrProps(finalState, undefined, undefined, _this2));
        return React.createElement(
          TheadComponent,
          _extends({
            className: classnames('-header', theadProps.className),
            style: _extends({}, theadProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadProps.rest),
          React.createElement(
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
        var width = _.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var theadFilterThProps = _.splitProps(getTheadFilterThProps(finalState, undefined, column, _this2));
        var columnHeaderProps = _.splitProps(column.getHeaderProps(finalState, undefined, column, _this2));

        var classes = [column.headerClassName, theadFilterThProps.className, columnHeaderProps.className];

        var styles = _extends({}, column.headerStyle, theadFilterThProps.style, columnHeaderProps.style);

        var rest = _extends({}, theadFilterThProps.rest, columnHeaderProps.rest);

        var filter = filtered.find(function (filter) {
          return filter.id === column.id;
        });

        var ResolvedFilterComponent = column.Filter || FilterComponent;

        var isFilterable = _.getFirstDefined(column.filterable, filterable, false);

        return React.createElement(
          ThComponent,
          _extends({
            key: i + '-' + column.id,
            className: classnames(classes),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _.asPx(width),
              maxWidth: _.asPx(maxWidth)
            })
          }, rest),
          isFilterable ? _.normalizeComponent(ResolvedFilterComponent, {
            column: column,
            filter: filter,
            onChange: function onChange(value) {
              return _this2.filterColumn(column, value);
            }
          }, defaultProps.column.Filter) : null
        );
      };

      var makeFilters = function makeFilters() {
        var theadFilterProps = _.splitProps(getTheadFilterProps(finalState, undefined, undefined, _this2));
        var theadFilterTrProps = _.splitProps(getTheadFilterTrProps(finalState, undefined, undefined, _this2));
        return React.createElement(
          TheadComponent,
          _extends({
            className: classnames('-filters', theadFilterProps.className),
            style: _extends({}, theadFilterProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, theadFilterProps.rest),
          React.createElement(
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
        var isExpanded = _.get(expanded, rowInfo.nestingPath);
        var trGroupProps = getTrGroupProps(finalState, rowInfo, undefined, _this2);
        var trProps = _.splitProps(getTrProps(finalState, rowInfo, undefined, _this2));
        return React.createElement(
          TrGroupComponent,
          _extends({ key: rowInfo.nestingPath.join('_') }, trGroupProps),
          React.createElement(
            TrComponent,
            _extends({
              className: classnames(trProps.className, row._viewIndex % 2 ? '-even' : '-odd'),
              style: trProps.style
            }, trProps.rest),
            allVisibleColumns.map(function (column, i2) {
              var resizedCol = resized.find(function (x) {
                return x.id === column.id;
              }) || {};
              var show = typeof column.show === 'function' ? column.show() : column.show;
              var width = _.getFirstDefined(resizedCol.value, column.width, column.minWidth);
              var maxWidth = _.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
              var tdProps = _.splitProps(getTdProps(finalState, rowInfo, column, _this2));
              var columnProps = _.splitProps(column.getProps(finalState, rowInfo, column, _this2));

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
                var newExpanded = _.clone(expanded);
                if (isExpanded) {
                  newExpanded = _.set(newExpanded, cellInfo.nestingPath, false);
                } else {
                  newExpanded = _.set(newExpanded, cellInfo.nestingPath, {});
                }

                return _this2.setStateWithData({
                  expanded: newExpanded
                }, function () {
                  return onExpandedChange && onExpandedChange(newExpanded, cellInfo.nestingPath, e);
                });
              };

              // Default to a standard cell
              var resolvedCell = _.normalizeComponent(column.Cell, cellInfo, value);

              // Resolve Renderers
              var ResolvedAggregatedComponent = column.Aggregated || (!column.aggregate ? AggregatedComponent : column.Cell);
              var ResolvedExpanderComponent = column.Expander || ExpanderComponent;
              var ResolvedPivotValueComponent = column.PivotValue || PivotValueComponent;
              var DefaultResolvedPivotComponent = PivotComponent || function (props) {
                return React.createElement(
                  'div',
                  null,
                  React.createElement(ResolvedExpanderComponent, props),
                  React.createElement(ResolvedPivotValueComponent, props)
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
                  resolvedCell = _.normalizeComponent(ResolvedPivotComponent, _extends({}, cellInfo, {
                    value: row[pivotValKey]
                  }), row[pivotValKey]);
                } else if (isPreview) {
                  // Show the pivot preview
                  resolvedCell = _.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
                } else {
                  resolvedCell = null;
                }
              } else if (cellInfo.aggregated) {
                resolvedCell = _.normalizeComponent(ResolvedAggregatedComponent, cellInfo, value);
              }

              if (cellInfo.expander) {
                resolvedCell = _.normalizeComponent(ResolvedExpanderComponent, cellInfo, row[pivotValKey]);
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
              return React.createElement(
                TdComponent
                // eslint-disable-next-line react/no-array-index-key
                ,
                _extends({ key: i2 + '-' + column.id,
                  className: classnames(classes, !show && 'hidden', cellInfo.expandable && 'rt-expandable', (isBranch || isPreview) && 'rt-pivot'),
                  style: _extends({}, styles, {
                    flex: width + ' 0 auto',
                    width: _.asPx(width),
                    maxWidth: _.asPx(maxWidth)
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
        var width = _.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var flex = width;
        var maxWidth = _.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tdProps = _.splitProps(getTdProps(finalState, undefined, column, _this2));
        var columnProps = _.splitProps(column.getProps(finalState, undefined, column, _this2));

        var classes = [tdProps.className, column.className, columnProps.className];

        var styles = _extends({}, tdProps.style, column.style, columnProps.style);

        return React.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: classnames(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: flex + ' 0 auto',
              width: _.asPx(width),
              maxWidth: _.asPx(maxWidth)
            })
          }, tdProps.rest),
          _.normalizeComponent(PadRowComponent)
        );
      };

      var makePadRow = function makePadRow(row, i) {
        if (i === 0 && !pageRows.length) {
          return null;
        }
        var trGroupProps = getTrGroupProps(finalState, undefined, undefined, _this2);
        var trProps = _.splitProps(getTrProps(finalState, undefined, undefined, _this2));
        return React.createElement(
          TrGroupComponent,
          _extends({ key: 'pad-' + i }, trGroupProps),
          React.createElement(
            TrComponent,
            {
              className: classnames('-padRow', (pageRows.length + i) % 2 ? '-even' : '-odd', trProps.className),
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
        var width = _.getFirstDefined(resizedCol.value, column.width, column.minWidth);
        var maxWidth = _.getFirstDefined(resizedCol.value, column.width, column.maxWidth);
        var tFootTdProps = _.splitProps(getTfootTdProps(finalState, undefined, undefined, _this2));
        var columnProps = _.splitProps(column.getProps(finalState, undefined, column, _this2));
        var columnFooterProps = _.splitProps(column.getFooterProps(finalState, undefined, column, _this2));

        var classes = [tFootTdProps.className, column.className, columnProps.className, columnFooterProps.className];

        var styles = _extends({}, tFootTdProps.style, column.style, columnProps.style, columnFooterProps.style);

        return React.createElement(
          TdComponent,
          _extends({
            key: i + '-' + column.id,
            className: classnames(classes, !show && 'hidden'),
            style: _extends({}, styles, {
              flex: width + ' 0 auto',
              width: _.asPx(width),
              maxWidth: _.asPx(maxWidth)
            })
          }, columnProps.rest, tFootTdProps.rest, columnFooterProps.rest),
          _.normalizeComponent(column.Footer, {
            data: sortedData,
            column: column
          })
        );
      };

      var makeColumnFooters = function makeColumnFooters() {
        var tFootProps = getTfootProps(finalState, undefined, undefined, _this2);
        var tFootTrProps = _.splitProps(getTfootTrProps(finalState, undefined, undefined, _this2));
        return React.createElement(
          TfootComponent,
          _extends({
            className: tFootProps.className,
            style: _extends({}, tFootProps.style, {
              minWidth: rowMinWidth + 'px'
            })
          }, tFootProps.rest),
          React.createElement(
            TrComponent,
            _extends({
              className: classnames(tFootTrProps.className),
              style: tFootTrProps.style
            }, tFootTrProps.rest),
            allVisibleColumns.map(makeColumnFooter)
          )
        );
      };

      var makePagination = function makePagination() {
        var paginationProps = _.splitProps(getPaginationProps(finalState, undefined, undefined, _this2));
        return React.createElement(PaginationComponent, _extends({}, resolvedState, {
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
        return React.createElement(
          'div',
          _extends({
            className: classnames('ReactTable', className, rootProps.className),
            style: _extends({}, style, rootProps.style)
          }, rootProps.rest),
          showPagination && showPaginationTop ? React.createElement(
            'div',
            { className: 'pagination-top' },
            pagination
          ) : null,
          React.createElement(
            TableComponent,
            _extends({
              className: classnames(tableProps.className, currentlyResizing ? 'rt-resizing' : ''),
              style: tableProps.style
            }, tableProps.rest),
            configurable ? makeConfig() : null,
            hasHeaderGroups ? makeHeaderGroups() : null,
            makeHeaders(),
            hasFilters ? makeFilters() : null,
            React.createElement(
              TbodyComponent,
              _extends({
                className: classnames(tBodyProps.className),
                style: _extends({}, tBodyProps.style, {
                  minWidth: rowMinWidth + 'px'
                })
              }, tBodyProps.rest),
              pageRows.map(function (d, i) {
                return makePageRow(d, i);
              }),
              padRows.map(makePadRow),
              !pageRows.length && React.createElement(
                NoDataComponent,
                noDataProps,
                _.normalizeComponent(noDataText)
              )
            ),
            hasColumnFooter ? makeColumnFooters() : null
          ),
          showPagination && showPaginationBottom ? React.createElement(
            'div',
            { className: 'pagination-bottom' },
            pagination
          ) : null,
          React.createElement(LoadingComponent, _extends({ loading: loading, loadingText: loadingText }, loadingProps))
        );
      };

      // childProps are optionally passed to a function-as-a-child
      return children ? children(finalState, makeTable, this) : makeTable();
    }
  }]);

  return ReactTable;
}(Methods(Lifecycle(Component)));

ReactTable.propTypes = propTypes;
ReactTable.defaultProps = defaultProps;
export default ReactTable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsImNsYXNzbmFtZXMiLCJfIiwiTGlmZWN5Y2xlIiwiTWV0aG9kcyIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlJlYWN0VGFibGVEZWZhdWx0cyIsIlJlYWN0VGFibGUiLCJwcm9wcyIsImdldFJlc29sdmVkU3RhdGUiLCJiaW5kIiwiZ2V0RGF0YU1vZGVsIiwiZ2V0U29ydGVkRGF0YSIsImZpcmVGZXRjaERhdGEiLCJnZXRQcm9wT3JTdGF0ZSIsImdldFN0YXRlT3JQcm9wIiwiZmlsdGVyRGF0YSIsInNvcnREYXRhIiwiZ2V0TWluUm93cyIsIm9uUGFnZUNoYW5nZSIsIm9uUGFnZVNpemVDaGFuZ2UiLCJzb3J0Q29sdW1uIiwiZmlsdGVyQ29sdW1uIiwicmVzaXplQ29sdW1uU3RhcnQiLCJyZXNpemVDb2x1bW5FbmQiLCJyZXNpemVDb2x1bW5Nb3ZpbmciLCJzdGF0ZSIsInBhZ2UiLCJkZWZhdWx0UGFnZSIsInBhZ2VTaXplIiwiZGVmYXVsdFBhZ2VTaXplIiwic29ydGVkIiwiZGVmYXVsdFNvcnRlZCIsImV4cGFuZGVkIiwiZGVmYXVsdEV4cGFuZGVkIiwiZmlsdGVyZWQiLCJkZWZhdWx0RmlsdGVyZWQiLCJyZXNpemVkIiwiZGVmYXVsdFJlc2l6ZWQiLCJjdXJyZW50bHlSZXNpemluZyIsInNraXBOZXh0U29ydCIsInJlc29sdmVkU3RhdGUiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZ2V0UHJvcHMiLCJnZXRUYWJsZVByb3BzIiwiZ2V0VGhlYWRHcm91cFByb3BzIiwiZ2V0VGhlYWRHcm91cFRyUHJvcHMiLCJnZXRUaGVhZEdyb3VwVGhQcm9wcyIsImdldFRoZWFkUHJvcHMiLCJnZXRUaGVhZFRyUHJvcHMiLCJnZXRUaGVhZFRoUHJvcHMiLCJnZXRUaGVhZEZpbHRlclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUclByb3BzIiwiZ2V0VGhlYWRGaWx0ZXJUaFByb3BzIiwiZ2V0VGJvZHlQcm9wcyIsImdldFRyR3JvdXBQcm9wcyIsImdldFRyUHJvcHMiLCJnZXRUZFByb3BzIiwiZ2V0VGZvb3RQcm9wcyIsImdldFRmb290VHJQcm9wcyIsImdldFRmb290VGRQcm9wcyIsImdldFBhZ2luYXRpb25Qcm9wcyIsImdldExvYWRpbmdQcm9wcyIsImdldE5vRGF0YVByb3BzIiwiZ2V0UmVzaXplclByb3BzIiwic2hvd1BhZ2luYXRpb24iLCJzaG93UGFnaW5hdGlvblRvcCIsInNob3dQYWdpbmF0aW9uQm90dG9tIiwibWFudWFsIiwibG9hZGluZ1RleHQiLCJub0RhdGFUZXh0Iiwic29ydGFibGUiLCJtdWx0aVNvcnQiLCJyZXNpemFibGUiLCJmaWx0ZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicGl2b3RJREtleSIsInBpdm90VmFsS2V5IiwicGl2b3RCeSIsInN1YlJvd3NLZXkiLCJhZ2dyZWdhdGVkS2V5Iiwib3JpZ2luYWxLZXkiLCJpbmRleEtleSIsImdyb3VwZWRCeVBpdm90S2V5IiwibG9hZGluZyIsInBhZ2VzIiwib25FeHBhbmRlZENoYW5nZSIsIlRhYmxlQ29tcG9uZW50IiwiQ29uZmlnQ29tcG9uZW50IiwiVGhlYWRDb21wb25lbnQiLCJUYm9keUNvbXBvbmVudCIsIlRyR3JvdXBDb21wb25lbnQiLCJUckNvbXBvbmVudCIsIlRoQ29tcG9uZW50IiwiVGRDb21wb25lbnQiLCJUZm9vdENvbXBvbmVudCIsIlBhZ2luYXRpb25Db21wb25lbnQiLCJMb2FkaW5nQ29tcG9uZW50IiwiU3ViQ29tcG9uZW50IiwiTm9EYXRhQ29tcG9uZW50IiwiUmVzaXplckNvbXBvbmVudCIsIkV4cGFuZGVyQ29tcG9uZW50IiwiUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90Q29tcG9uZW50IiwiQWdncmVnYXRlZENvbXBvbmVudCIsIkZpbHRlckNvbXBvbmVudCIsIlBhZFJvd0NvbXBvbmVudCIsInJlc29sdmVkRGF0YSIsImFsbFZpc2libGVDb2x1bW5zIiwiaGVhZGVyR3JvdXBzIiwiaGFzSGVhZGVyR3JvdXBzIiwic29ydGVkRGF0YSIsInN0YXJ0Um93IiwiZW5kUm93IiwicGFnZVJvd3MiLCJzbGljZSIsIm1pblJvd3MiLCJwYWRSb3dzIiwicmFuZ2UiLCJNYXRoIiwibWF4IiwibGVuZ3RoIiwiaGFzQ29sdW1uRm9vdGVyIiwic29tZSIsImQiLCJGb290ZXIiLCJoYXNGaWx0ZXJzIiwicmVjdXJzZVJvd3NWaWV3SW5kZXgiLCJyb3dzIiwicGF0aCIsImluZGV4IiwibWFwIiwicm93IiwiaSIsInJvd1dpdGhWaWV3SW5kZXgiLCJfdmlld0luZGV4IiwibmV3UGF0aCIsImNvbmNhdCIsImdldCIsImNhblByZXZpb3VzIiwiY2FuTmV4dCIsInJvd01pbldpZHRoIiwic3VtIiwicmVzaXplZENvbHVtbiIsImZpbmQiLCJ4IiwiaWQiLCJnZXRGaXJzdERlZmluZWQiLCJ2YWx1ZSIsIndpZHRoIiwibWluV2lkdGgiLCJyb3dJbmRleCIsImZpbmFsU3RhdGUiLCJyb290UHJvcHMiLCJzcGxpdFByb3BzIiwidW5kZWZpbmVkIiwidGFibGVQcm9wcyIsInRCb2R5UHJvcHMiLCJsb2FkaW5nUHJvcHMiLCJub0RhdGFQcm9wcyIsIm1ha2VIZWFkZXJHcm91cCIsImNvbHVtbiIsInJlc2l6ZWRWYWx1ZSIsImNvbCIsImZsZXgiLCJjb2x1bW5zIiwibWF4V2lkdGgiLCJ0aGVhZEdyb3VwVGhQcm9wcyIsImNvbHVtbkhlYWRlclByb3BzIiwiZ2V0SGVhZGVyUHJvcHMiLCJjbGFzc2VzIiwiaGVhZGVyQ2xhc3NOYW1lIiwic3R5bGVzIiwiaGVhZGVyU3R5bGUiLCJyZXN0IiwiZmxleFN0eWxlcyIsImFzUHgiLCJub3JtYWxpemVDb21wb25lbnQiLCJIZWFkZXIiLCJkYXRhIiwibWFrZUNvbmZpZyIsIm1ha2VIZWFkZXJHcm91cHMiLCJ0aGVhZEdyb3VwUHJvcHMiLCJ0aGVhZEdyb3VwVHJQcm9wcyIsIm1ha2VIZWFkZXIiLCJyZXNpemVkQ29sIiwic29ydCIsInNob3ciLCJ0aGVhZFRoUHJvcHMiLCJpc1Jlc2l6YWJsZSIsInJlc2l6ZXIiLCJlIiwiaXNTb3J0YWJsZSIsImRlc2MiLCJpbmNsdWRlcyIsInNoaWZ0S2V5IiwibWFrZUhlYWRlcnMiLCJ0aGVhZFByb3BzIiwidGhlYWRUclByb3BzIiwibWFrZUZpbHRlciIsInRoZWFkRmlsdGVyVGhQcm9wcyIsImZpbHRlciIsIlJlc29sdmVkRmlsdGVyQ29tcG9uZW50IiwiRmlsdGVyIiwiaXNGaWx0ZXJhYmxlIiwib25DaGFuZ2UiLCJtYWtlRmlsdGVycyIsInRoZWFkRmlsdGVyUHJvcHMiLCJ0aGVhZEZpbHRlclRyUHJvcHMiLCJtYWtlUGFnZVJvdyIsInJvd0luZm8iLCJvcmlnaW5hbCIsInZpZXdJbmRleCIsImxldmVsIiwibmVzdGluZ1BhdGgiLCJhZ2dyZWdhdGVkIiwiZ3JvdXBlZEJ5UGl2b3QiLCJzdWJSb3dzIiwiaXNFeHBhbmRlZCIsInRyR3JvdXBQcm9wcyIsInRyUHJvcHMiLCJqb2luIiwiaTIiLCJ0ZFByb3BzIiwiY29sdW1uUHJvcHMiLCJjZWxsSW5mbyIsInBpdm90ZWQiLCJleHBhbmRlciIsInVzZU9uRXhwYW5kZXJDbGljayIsImlzQnJhbmNoIiwiaXNQcmV2aWV3Iiwib25FeHBhbmRlckNsaWNrIiwibmV3RXhwYW5kZWQiLCJjbG9uZSIsInNldCIsInNldFN0YXRlV2l0aERhdGEiLCJyZXNvbHZlZENlbGwiLCJDZWxsIiwiUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50IiwiQWdncmVnYXRlZCIsImFnZ3JlZ2F0ZSIsIlJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQiLCJFeHBhbmRlciIsIlJlc29sdmVkUGl2b3RWYWx1ZUNvbXBvbmVudCIsIlBpdm90VmFsdWUiLCJEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCIsIlJlc29sdmVkUGl2b3RDb21wb25lbnQiLCJQaXZvdCIsImV4cGFuZGFibGUiLCJpbmRleE9mIiwicmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2siLCJpbnRlcmFjdGlvblByb3BzIiwib25DbGljayIsIm1ha2VQYWRDb2x1bW4iLCJtYWtlUGFkUm93IiwibWFrZUNvbHVtbkZvb3RlciIsInRGb290VGRQcm9wcyIsImNvbHVtbkZvb3RlclByb3BzIiwiZ2V0Rm9vdGVyUHJvcHMiLCJtYWtlQ29sdW1uRm9vdGVycyIsInRGb290UHJvcHMiLCJ0Rm9vdFRyUHJvcHMiLCJtYWtlUGFnaW5hdGlvbiIsInBhZ2luYXRpb25Qcm9wcyIsIm1ha2VUYWJsZSIsInBhZ2luYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLFNBQWhCLFFBQWlDLE9BQWpDO0FBQ0EsT0FBT0MsVUFBUCxNQUF1QixZQUF2QjtBQUNBO0FBQ0EsT0FBT0MsQ0FBUCxNQUFjLFNBQWQ7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLGFBQXRCO0FBQ0EsT0FBT0MsT0FBUCxNQUFvQixXQUFwQjtBQUNBLE9BQU9DLFlBQVAsTUFBeUIsZ0JBQXpCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixhQUF0Qjs7QUFFQSxPQUFPLElBQU1DLHFCQUFxQkYsWUFBM0I7O0lBRWNHLFU7OztBQUluQixzQkFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBOztBQUdsQixVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFDQSxVQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBQ0EsVUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFVBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFDQSxVQUFLSSxjQUFMLEdBQXNCLE1BQUtBLGNBQUwsQ0FBb0JKLElBQXBCLE9BQXRCO0FBQ0EsVUFBS0ssY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CTCxJQUFwQixPQUF0QjtBQUNBLFVBQUtNLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQk4sSUFBaEIsT0FBbEI7QUFD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QUFXbkgsS0FEaEI7QUFFRTRHLDRCQUFhVCxXQUFiO0FBRkY7QUFGRixpQkFNTWdCLFdBQVdpQixJQU5qQjtBQVFHNUQsdUJBQVNpQixHQUFULENBQWEsVUFBQ1AsQ0FBRCxFQUFJUyxDQUFKO0FBQUEsdUJBQVU0RSxZQUFZckYsQ0FBWixFQUFlUyxDQUFmLENBQVY7QUFBQSxlQUFiLENBUkg7QUFTR2hCLHNCQUFRYyxHQUFSLENBQVkySCxVQUFaLENBVEg7QUFVRyxlQUFDNUksU0FBU08sTUFBVixJQUNDO0FBQUMsK0JBQUQ7QUFBcUJzQywyQkFBckI7QUFBbUNoSyxrQkFBRWtMLGtCQUFGLENBQXFCM0csVUFBckI7QUFBbkM7QUFYSixhQVRGO0FBdUJHb0QsOEJBQWtCeUksbUJBQWxCLEdBQXdDO0FBdkIzQyxXQVhGO0FBb0NHbE0sNEJBQWtCRSxvQkFBbEIsR0FDQztBQUFBO0FBQUEsY0FBSyxXQUFVLG1CQUFmO0FBQW9Dc007QUFBcEMsV0FERCxHQUVHLElBdENOO0FBdUNFLDhCQUFDLGdCQUFELGFBQWtCLFNBQVNyTCxPQUEzQixFQUFvQyxhQUFhZixXQUFqRCxJQUFrRXlGLFlBQWxFO0FBdkNGLFNBREY7QUEyQ0QsT0E3Q0Q7O0FBK0NBO0FBQ0EsYUFBT3RILFdBQVdBLFNBQVNnSCxVQUFULEVBQXFCZ0gsU0FBckIsRUFBZ0MsSUFBaEMsQ0FBWCxHQUFtREEsV0FBMUQ7QUFDRDs7OztFQTMxQnFDdlEsUUFBUUQsVUFBVUgsU0FBVixDQUFSLEM7O0FBQW5CUSxVLENBQ1pGLFMsR0FBWUEsUztBQURBRSxVLENBRVpILFksR0FBZUEsWTtlQUZIRyxVIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbi8vXG5pbXBvcnQgXyBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IExpZmVjeWNsZSBmcm9tICcuL2xpZmVjeWNsZSdcbmltcG9ydCBNZXRob2RzIGZyb20gJy4vbWV0aG9kcydcbmltcG9ydCBkZWZhdWx0UHJvcHMgZnJvbSAnLi9kZWZhdWx0UHJvcHMnXG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gJy4vcHJvcFR5cGVzJ1xuXG5leHBvcnQgY29uc3QgUmVhY3RUYWJsZURlZmF1bHRzID0gZGVmYXVsdFByb3BzXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0VGFibGUgZXh0ZW5kcyBNZXRob2RzKExpZmVjeWNsZShDb21wb25lbnQpKSB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSBwcm9wVHlwZXNcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wc1xuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXREYXRhTW9kZWwgPSB0aGlzLmdldERhdGFNb2RlbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRTb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLmZpcmVGZXRjaERhdGEgPSB0aGlzLmZpcmVGZXRjaERhdGEuYmluZCh0aGlzKVxuICAgIHRoaXMuZ2V0UHJvcE9yU3RhdGUgPSB0aGlzLmdldFByb3BPclN0YXRlLmJpbmQodGhpcylcbiAgICB0aGlzLmdldFN0YXRlT3JQcm9wID0gdGhpcy5nZXRTdGF0ZU9yUHJvcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5maWx0ZXJEYXRhLmJpbmQodGhpcylcbiAgICB0aGlzLnNvcnREYXRhID0gdGhpcy5zb3J0RGF0YS5iaW5kKHRoaXMpXG4gICAgdGhpcy5nZXRNaW5Sb3dzID0gdGhpcy5nZXRNaW5Sb3dzLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZUNoYW5nZSA9IHRoaXMub25QYWdlQ2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uUGFnZVNpemVDaGFuZ2UgPSB0aGlzLm9uUGFnZVNpemVDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuc29ydENvbHVtbiA9IHRoaXMuc29ydENvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5maWx0ZXJDb2x1bW4gPSB0aGlzLmZpbHRlckNvbHVtbi5iaW5kKHRoaXMpXG4gICAgdGhpcy5yZXNpemVDb2x1bW5TdGFydCA9IHRoaXMucmVzaXplQ29sdW1uU3RhcnQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uRW5kID0gdGhpcy5yZXNpemVDb2x1bW5FbmQuYmluZCh0aGlzKVxuICAgIHRoaXMucmVzaXplQ29sdW1uTW92aW5nID0gdGhpcy5yZXNpemVDb2x1bW5Nb3ZpbmcuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhZ2U6IHByb3BzLmRlZmF1bHRQYWdlLFxuICAgICAgcGFnZVNpemU6IHByb3BzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIHNvcnRlZDogcHJvcHMuZGVmYXVsdFNvcnRlZCxcbiAgICAgIGV4cGFuZGVkOiBwcm9wcy5kZWZhdWx0RXhwYW5kZWQsXG4gICAgICBmaWx0ZXJlZDogcHJvcHMuZGVmYXVsdEZpbHRlcmVkLFxuICAgICAgcmVzaXplZDogcHJvcHMuZGVmYXVsdFJlc2l6ZWQsXG4gICAgICBjdXJyZW50bHlSZXNpemluZzogZmFsc2UsXG4gICAgICBza2lwTmV4dFNvcnQ6IGZhbHNlLFxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgcmVzb2x2ZWRTdGF0ZSA9IHRoaXMuZ2V0UmVzb2x2ZWRTdGF0ZSgpXG4gICAgY29uc3Qge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzdHlsZSxcbiAgICAgIGdldFByb3BzLFxuICAgICAgZ2V0VGFibGVQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyxcbiAgICAgIGdldFRoZWFkR3JvdXBUclByb3BzLFxuICAgICAgZ2V0VGhlYWRHcm91cFRoUHJvcHMsXG4gICAgICBnZXRUaGVhZFByb3BzLFxuICAgICAgZ2V0VGhlYWRUclByb3BzLFxuICAgICAgZ2V0VGhlYWRUaFByb3BzLFxuICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyVHJQcm9wcyxcbiAgICAgIGdldFRoZWFkRmlsdGVyVGhQcm9wcyxcbiAgICAgIGdldFRib2R5UHJvcHMsXG4gICAgICBnZXRUckdyb3VwUHJvcHMsXG4gICAgICBnZXRUclByb3BzLFxuICAgICAgZ2V0VGRQcm9wcyxcbiAgICAgIGdldFRmb290UHJvcHMsXG4gICAgICBnZXRUZm9vdFRyUHJvcHMsXG4gICAgICBnZXRUZm9vdFRkUHJvcHMsXG4gICAgICBnZXRQYWdpbmF0aW9uUHJvcHMsXG4gICAgICBnZXRMb2FkaW5nUHJvcHMsXG4gICAgICBnZXROb0RhdGFQcm9wcyxcbiAgICAgIGdldFJlc2l6ZXJQcm9wcyxcbiAgICAgIHNob3dQYWdpbmF0aW9uLFxuICAgICAgc2hvd1BhZ2luYXRpb25Ub3AsXG4gICAgICBzaG93UGFnaW5hdGlvbkJvdHRvbSxcbiAgICAgIG1hbnVhbCxcbiAgICAgIGxvYWRpbmdUZXh0LFxuICAgICAgbm9EYXRhVGV4dCxcbiAgICAgIHNvcnRhYmxlLFxuICAgICAgbXVsdGlTb3J0LFxuICAgICAgcmVzaXphYmxlLFxuICAgICAgZmlsdGVyYWJsZSxcbiAgICAgIGNvbmZpZ3VyYWJsZSxcbiAgICAgIC8vIFBpdm90aW5nIFN0YXRlXG4gICAgICBwaXZvdElES2V5LFxuICAgICAgcGl2b3RWYWxLZXksXG4gICAgICBwaXZvdEJ5LFxuICAgICAgc3ViUm93c0tleSxcbiAgICAgIGFnZ3JlZ2F0ZWRLZXksXG4gICAgICBvcmlnaW5hbEtleSxcbiAgICAgIGluZGV4S2V5LFxuICAgICAgZ3JvdXBlZEJ5UGl2b3RLZXksXG4gICAgICAvLyBTdGF0ZVxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VTaXplLFxuICAgICAgcGFnZSxcbiAgICAgIHNvcnRlZCxcbiAgICAgIGZpbHRlcmVkLFxuICAgICAgcmVzaXplZCxcbiAgICAgIGV4cGFuZGVkLFxuICAgICAgcGFnZXMsXG4gICAgICBvbkV4cGFuZGVkQ2hhbmdlLFxuICAgICAgLy8gQ29tcG9uZW50c1xuICAgICAgVGFibGVDb21wb25lbnQsXG4gICAgICBDb25maWdDb21wb25lbnQsXG4gICAgICBUaGVhZENvbXBvbmVudCxcbiAgICAgIFRib2R5Q29tcG9uZW50LFxuICAgICAgVHJHcm91cENvbXBvbmVudCxcbiAgICAgIFRyQ29tcG9uZW50LFxuICAgICAgVGhDb21wb25lbnQsXG4gICAgICBUZENvbXBvbmVudCxcbiAgICAgIFRmb290Q29tcG9uZW50LFxuICAgICAgUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgICBTdWJDb21wb25lbnQsXG4gICAgICBOb0RhdGFDb21wb25lbnQsXG4gICAgICBSZXNpemVyQ29tcG9uZW50LFxuICAgICAgRXhwYW5kZXJDb21wb25lbnQsXG4gICAgICBQaXZvdFZhbHVlQ29tcG9uZW50LFxuICAgICAgUGl2b3RDb21wb25lbnQsXG4gICAgICBBZ2dyZWdhdGVkQ29tcG9uZW50LFxuICAgICAgRmlsdGVyQ29tcG9uZW50LFxuICAgICAgUGFkUm93Q29tcG9uZW50LFxuICAgICAgLy8gRGF0YSBtb2RlbFxuICAgICAgcmVzb2x2ZWREYXRhLFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICBoYXNIZWFkZXJHcm91cHMsXG4gICAgICAvLyBTb3J0ZWQgRGF0YVxuICAgICAgc29ydGVkRGF0YSxcbiAgICAgIGN1cnJlbnRseVJlc2l6aW5nLFxuICAgIH0gPSByZXNvbHZlZFN0YXRlXG5cbiAgICAvLyBQYWdpbmF0aW9uXG4gICAgY29uc3Qgc3RhcnRSb3cgPSBwYWdlU2l6ZSAqIHBhZ2VcbiAgICBjb25zdCBlbmRSb3cgPSBzdGFydFJvdyArIHBhZ2VTaXplXG4gICAgbGV0IHBhZ2VSb3dzID0gbWFudWFsID8gcmVzb2x2ZWREYXRhIDogc29ydGVkRGF0YS5zbGljZShzdGFydFJvdywgZW5kUm93KVxuICAgIGNvbnN0IG1pblJvd3MgPSB0aGlzLmdldE1pblJvd3MoKVxuICAgIGNvbnN0IHBhZFJvd3MgPSBfLnJhbmdlKE1hdGgubWF4KG1pblJvd3MgLSBwYWdlUm93cy5sZW5ndGgsIDApKVxuXG4gICAgY29uc3QgaGFzQ29sdW1uRm9vdGVyID0gYWxsVmlzaWJsZUNvbHVtbnMuc29tZShkID0+IGQuRm9vdGVyKVxuICAgIGNvbnN0IGhhc0ZpbHRlcnMgPSBmaWx0ZXJhYmxlIHx8IGFsbFZpc2libGVDb2x1bW5zLnNvbWUoZCA9PiBkLmZpbHRlcmFibGUpXG5cbiAgICBjb25zdCByZWN1cnNlUm93c1ZpZXdJbmRleCA9IChyb3dzLCBwYXRoID0gW10sIGluZGV4ID0gLTEpID0+IFtcbiAgICAgIHJvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgaW5kZXggKz0gMVxuICAgICAgICBjb25zdCByb3dXaXRoVmlld0luZGV4ID0ge1xuICAgICAgICAgIC4uLnJvdyxcbiAgICAgICAgICBfdmlld0luZGV4OiBpbmRleCxcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoW2ldKVxuICAgICAgICBpZiAocm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSAmJiBfLmdldChleHBhbmRlZCwgbmV3UGF0aCkpIHtcbiAgICAgICAgICBbcm93V2l0aFZpZXdJbmRleFtzdWJSb3dzS2V5XSwgaW5kZXhdID0gcmVjdXJzZVJvd3NWaWV3SW5kZXgoXG4gICAgICAgICAgICByb3dXaXRoVmlld0luZGV4W3N1YlJvd3NLZXldLFxuICAgICAgICAgICAgbmV3UGF0aCxcbiAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dXaXRoVmlld0luZGV4XG4gICAgICB9KSxcbiAgICAgIGluZGV4LFxuICAgIF07XG4gICAgW3BhZ2VSb3dzXSA9IHJlY3Vyc2VSb3dzVmlld0luZGV4KHBhZ2VSb3dzKVxuXG4gICAgY29uc3QgY2FuUHJldmlvdXMgPSBwYWdlID4gMFxuICAgIGNvbnN0IGNhbk5leHQgPSBwYWdlICsgMSA8IHBhZ2VzXG5cbiAgICBjb25zdCByb3dNaW5XaWR0aCA9IF8uc3VtKFxuICAgICAgYWxsVmlzaWJsZUNvbHVtbnMubWFwKGQgPT4ge1xuICAgICAgICBjb25zdCByZXNpemVkQ29sdW1uID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gZC5pZCkgfHwge31cbiAgICAgICAgcmV0dXJuIF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2x1bW4udmFsdWUsIGQud2lkdGgsIGQubWluV2lkdGgpXG4gICAgICB9KVxuICAgIClcblxuICAgIGxldCByb3dJbmRleCA9IC0xXG5cbiAgICBjb25zdCBmaW5hbFN0YXRlID0ge1xuICAgICAgLi4ucmVzb2x2ZWRTdGF0ZSxcbiAgICAgIHN0YXJ0Um93LFxuICAgICAgZW5kUm93LFxuICAgICAgcGFnZVJvd3MsXG4gICAgICBtaW5Sb3dzLFxuICAgICAgcGFkUm93cyxcbiAgICAgIGhhc0NvbHVtbkZvb3RlcixcbiAgICAgIGNhblByZXZpb3VzLFxuICAgICAgY2FuTmV4dCxcbiAgICAgIHJvd01pbldpZHRoLFxuICAgIH1cblxuICAgIGNvbnN0IHJvb3RQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgY29uc3QgdGFibGVQcm9wcyA9IF8uc3BsaXRQcm9wcyhnZXRUYWJsZVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICBjb25zdCB0Qm9keVByb3BzID0gXy5zcGxpdFByb3BzKGdldFRib2R5UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgIGNvbnN0IGxvYWRpbmdQcm9wcyA9IGdldExvYWRpbmdQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICBjb25zdCBub0RhdGFQcm9wcyA9IGdldE5vRGF0YVByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuXG4gICAgLy8gVmlzdWFsIENvbXBvbmVudHNcblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cCA9IChjb2x1bW4sIGkpID0+IHtcbiAgICAgIGNvbnN0IHJlc2l6ZWRWYWx1ZSA9IGNvbCA9PiAocmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sLmlkKSB8fCB7fSkudmFsdWVcbiAgICAgIGNvbnN0IGZsZXggPSBfLnN1bShcbiAgICAgICAgY29sdW1uLmNvbHVtbnMubWFwKGNvbCA9PiAoY29sLndpZHRoIHx8IHJlc2l6ZWRWYWx1ZShjb2wpID8gMCA6IGNvbC5taW5XaWR0aCkpXG4gICAgICApXG4gICAgICBjb25zdCB3aWR0aCA9IF8uc3VtKFxuICAgICAgICBjb2x1bW4uY29sdW1ucy5tYXAoY29sID0+IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRWYWx1ZShjb2wpLCBjb2wud2lkdGgsIGNvbC5taW5XaWR0aCkpXG4gICAgICApXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uc3VtKFxuICAgICAgICBjb2x1bW4uY29sdW1ucy5tYXAoY29sID0+IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRWYWx1ZShjb2wpLCBjb2wud2lkdGgsIGNvbC5tYXhXaWR0aCkpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IGNvbHVtbkhlYWRlclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBjb2x1bW4uZ2V0SGVhZGVyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG5cbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICAgIGNvbHVtbi5oZWFkZXJDbGFzc05hbWUsXG4gICAgICAgIHRoZWFkR3JvdXBUaFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uSGVhZGVyUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgXVxuXG4gICAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICAgIC4uLmNvbHVtbi5oZWFkZXJTdHlsZSxcbiAgICAgICAgLi4udGhlYWRHcm91cFRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEdyb3VwVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBmbGV4U3R5bGVzID0ge1xuICAgICAgICBmbGV4OiBgJHtmbGV4fSAwIGF1dG9gLFxuICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoY2xhc3Nlcyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIC4uLmZsZXhTdHlsZXMsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uSGVhZGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb25maWcgPSAoKSA9PiBDb25maWdDb21wb25lbnRcblxuICAgIGNvbnN0IG1ha2VIZWFkZXJHcm91cHMgPSAoKSA9PiB7XG4gICAgICBjb25zdCB0aGVhZEdyb3VwUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFRoZWFkR3JvdXBQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkR3JvdXBUclByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEdyb3VwVHJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlckdyb3VwcycsIHRoZWFkR3JvdXBQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi50aGVhZEdyb3VwUHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRoZWFkR3JvdXBQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkR3JvdXBUclByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIHN0eWxlPXt0aGVhZEdyb3VwVHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50aGVhZEdyb3VwVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoZWFkZXJHcm91cHMubWFwKG1ha2VIZWFkZXJHcm91cCl9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNvcnQgPSBzb3J0ZWQuZmluZChkID0+IGQuaWQgPT09IGNvbHVtbi5pZClcbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1heFdpZHRoKVxuICAgICAgY29uc3QgdGhlYWRUaFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRoZWFkVGhQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW2NvbHVtbi5oZWFkZXJDbGFzc05hbWUsIHRoZWFkVGhQcm9wcy5jbGFzc05hbWUsIGNvbHVtbkhlYWRlclByb3BzLmNsYXNzTmFtZV1cblxuICAgICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgICAuLi5jb2x1bW4uaGVhZGVyU3R5bGUsXG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMuc3R5bGUsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3QgPSB7XG4gICAgICAgIC4uLnRoZWFkVGhQcm9wcy5yZXN0LFxuICAgICAgICAuLi5jb2x1bW5IZWFkZXJQcm9wcy5yZXN0LFxuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1Jlc2l6YWJsZSA9IF8uZ2V0Rmlyc3REZWZpbmVkKGNvbHVtbi5yZXNpemFibGUsIHJlc2l6YWJsZSwgZmFsc2UpXG4gICAgICBjb25zdCByZXNpemVyID0gaXNSZXNpemFibGUgPyAoXG4gICAgICAgIDxSZXNpemVyQ29tcG9uZW50XG4gICAgICAgICAgb25Nb3VzZURvd249e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChlLCBjb2x1bW4sIGZhbHNlKX1cbiAgICAgICAgICBvblRvdWNoU3RhcnQ9e2UgPT4gdGhpcy5yZXNpemVDb2x1bW5TdGFydChlLCBjb2x1bW4sIHRydWUpfVxuICAgICAgICAgIHsuLi5nZXRSZXNpemVyUHJvcHMoJ2ZpbmFsU3RhdGUnLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcyl9XG4gICAgICAgIC8+XG4gICAgICApIDogbnVsbFxuXG4gICAgICBjb25zdCBpc1NvcnRhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLnNvcnRhYmxlLCBzb3J0YWJsZSwgZmFsc2UpXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaENvbXBvbmVudFxuICAgICAgICAgIGtleT17YCR7aX0tJHtjb2x1bW4uaWR9YH1cbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgaXNSZXNpemFibGUgJiYgJ3J0LXJlc2l6YWJsZS1oZWFkZXInLFxuICAgICAgICAgICAgc29ydCA/IChzb3J0LmRlc2MgPyAnLXNvcnQtZGVzYycgOiAnLXNvcnQtYXNjJykgOiAnJyxcbiAgICAgICAgICAgIGlzU29ydGFibGUgJiYgJy1jdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgICAhc2hvdyAmJiAnLWhpZGRlbicsXG4gICAgICAgICAgICBwaXZvdEJ5ICYmIHBpdm90Qnkuc2xpY2UoMCwgLTEpLmluY2x1ZGVzKGNvbHVtbi5pZCkgJiYgJ3J0LWhlYWRlci1waXZvdCdcbiAgICAgICAgICApfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0b2dnbGVTb3J0PXtlID0+IHtcbiAgICAgICAgICAgIGlmIChpc1NvcnRhYmxlKSB0aGlzLnNvcnRDb2x1bW4oY29sdW1uLCBtdWx0aVNvcnQgPyBlLnNoaWZ0S2V5IDogZmFsc2UpXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGlzUmVzaXphYmxlICYmICdydC1yZXNpemFibGUtaGVhZGVyLWNvbnRlbnQnKX0+XG4gICAgICAgICAgICB7Xy5ub3JtYWxpemVDb21wb25lbnQoY29sdW1uLkhlYWRlciwge1xuICAgICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7cmVzaXplcn1cbiAgICAgICAgPC9UaENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlSGVhZGVycyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRoZWFkUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGhlYWRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgICBjb25zdCB0aGVhZFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGhlYWRUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUaGVhZENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnLWhlYWRlcicsIHRoZWFkUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUhlYWRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlRmlsdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1heFdpZHRoKVxuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJUaFByb3BzID0gXy5zcGxpdFByb3BzKFxuICAgICAgICBnZXRUaGVhZEZpbHRlclRoUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpXG4gICAgICApXG4gICAgICBjb25zdCBjb2x1bW5IZWFkZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgY29sdW1uLmdldEhlYWRlclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgY29sdW1uLCB0aGlzKVxuICAgICAgKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW1xuICAgICAgICBjb2x1bW4uaGVhZGVyQ2xhc3NOYW1lLFxuICAgICAgICB0aGVhZEZpbHRlclRoUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5IZWFkZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4uY29sdW1uLmhlYWRlclN0eWxlLFxuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMuc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtbkhlYWRlclByb3BzLnN0eWxlLFxuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN0ID0ge1xuICAgICAgICAuLi50aGVhZEZpbHRlclRoUHJvcHMucmVzdCxcbiAgICAgICAgLi4uY29sdW1uSGVhZGVyUHJvcHMucmVzdCxcbiAgICAgIH1cblxuICAgICAgY29uc3QgZmlsdGVyID0gZmlsdGVyZWQuZmluZChmaWx0ZXIgPT4gZmlsdGVyLmlkID09PSBjb2x1bW4uaWQpXG5cbiAgICAgIGNvbnN0IFJlc29sdmVkRmlsdGVyQ29tcG9uZW50ID0gY29sdW1uLkZpbHRlciB8fCBGaWx0ZXJDb21wb25lbnRcblxuICAgICAgY29uc3QgaXNGaWx0ZXJhYmxlID0gXy5nZXRGaXJzdERlZmluZWQoY29sdW1uLmZpbHRlcmFibGUsIGZpbHRlcmFibGUsIGZhbHNlKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhDb21wb25lbnRcbiAgICAgICAgICBrZXk9e2Ake2l9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKGNsYXNzZXMpfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAuLi5zdHlsZXMsXG4gICAgICAgICAgICBmbGV4OiBgJHt3aWR0aH0gMCBhdXRvYCxcbiAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgbWF4V2lkdGg6IF8uYXNQeChtYXhXaWR0aCksXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0ZpbHRlcmFibGVcbiAgICAgICAgICAgID8gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgUmVzb2x2ZWRGaWx0ZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6IHZhbHVlID0+IHRoaXMuZmlsdGVyQ29sdW1uKGNvbHVtbiwgdmFsdWUpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdFByb3BzLmNvbHVtbi5GaWx0ZXJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L1RoQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VGaWx0ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdGhlYWRGaWx0ZXJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIGNvbnN0IHRoZWFkRmlsdGVyVHJQcm9wcyA9IF8uc3BsaXRQcm9wcyhcbiAgICAgICAgZ2V0VGhlYWRGaWx0ZXJUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKVxuICAgICAgKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRoZWFkQ29tcG9uZW50XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCctZmlsdGVycycsIHRoZWFkRmlsdGVyUHJvcHMuY2xhc3NOYW1lKX1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgLi4udGhlYWRGaWx0ZXJQcm9wcy5zdHlsZSxcbiAgICAgICAgICAgIG1pbldpZHRoOiBgJHtyb3dNaW5XaWR0aH1weGAsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB7Li4udGhlYWRGaWx0ZXJQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e3RoZWFkRmlsdGVyVHJQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgICBzdHlsZT17dGhlYWRGaWx0ZXJUclByb3BzLnN0eWxlfVxuICAgICAgICAgICAgey4uLnRoZWFkRmlsdGVyVHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAobWFrZUZpbHRlcil9XG4gICAgICAgICAgPC9UckNvbXBvbmVudD5cbiAgICAgICAgPC9UaGVhZENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlUGFnZVJvdyA9IChyb3csIGksIHBhdGggPSBbXSkgPT4ge1xuICAgICAgY29uc3Qgcm93SW5mbyA9IHtcbiAgICAgICAgb3JpZ2luYWw6IHJvd1tvcmlnaW5hbEtleV0sXG4gICAgICAgIHJvdyxcbiAgICAgICAgaW5kZXg6IHJvd1tpbmRleEtleV0sXG4gICAgICAgIHZpZXdJbmRleDogKHJvd0luZGV4ICs9IDEpLFxuICAgICAgICBwYWdlU2l6ZSxcbiAgICAgICAgcGFnZSxcbiAgICAgICAgbGV2ZWw6IHBhdGgubGVuZ3RoLFxuICAgICAgICBuZXN0aW5nUGF0aDogcGF0aC5jb25jYXQoW2ldKSxcbiAgICAgICAgYWdncmVnYXRlZDogcm93W2FnZ3JlZ2F0ZWRLZXldLFxuICAgICAgICBncm91cGVkQnlQaXZvdDogcm93W2dyb3VwZWRCeVBpdm90S2V5XSxcbiAgICAgICAgc3ViUm93czogcm93W3N1YlJvd3NLZXldLFxuICAgICAgfVxuICAgICAgY29uc3QgaXNFeHBhbmRlZCA9IF8uZ2V0KGV4cGFuZGVkLCByb3dJbmZvLm5lc3RpbmdQYXRoKVxuICAgICAgY29uc3QgdHJHcm91cFByb3BzID0gZ2V0VHJHcm91cFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIGNvbnN0IHRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VHJQcm9wcyhmaW5hbFN0YXRlLCByb3dJbmZvLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyR3JvdXBDb21wb25lbnQga2V5PXtyb3dJbmZvLm5lc3RpbmdQYXRoLmpvaW4oJ18nKX0gey4uLnRyR3JvdXBQcm9wc30+XG4gICAgICAgICAgPFRyQ29tcG9uZW50XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModHJQcm9wcy5jbGFzc05hbWUsIHJvdy5fdmlld0luZGV4ICUgMiA/ICctZXZlbicgOiAnLW9kZCcpfVxuICAgICAgICAgICAgc3R5bGU9e3RyUHJvcHMuc3R5bGV9XG4gICAgICAgICAgICB7Li4udHJQcm9wcy5yZXN0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHthbGxWaXNpYmxlQ29sdW1ucy5tYXAoKGNvbHVtbiwgaTIpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgICAgICAgICAgY29uc3Qgc2hvdyA9IHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1pbldpZHRoKVxuICAgICAgICAgICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1heFdpZHRoKVxuICAgICAgICAgICAgICBjb25zdCB0ZFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRkUHJvcHMoZmluYWxTdGF0ZSwgcm93SW5mbywgY29sdW1uLCB0aGlzKSlcbiAgICAgICAgICAgICAgY29uc3QgY29sdW1uUHJvcHMgPSBfLnNwbGl0UHJvcHMoY29sdW1uLmdldFByb3BzKGZpbmFsU3RhdGUsIHJvd0luZm8sIGNvbHVtbiwgdGhpcykpXG5cbiAgICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFt0ZFByb3BzLmNsYXNzTmFtZSwgY29sdW1uLmNsYXNzTmFtZSwgY29sdW1uUHJvcHMuY2xhc3NOYW1lXVxuXG4gICAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgICAgICAgICAuLi50ZFByb3BzLnN0eWxlLFxuICAgICAgICAgICAgICAgIC4uLmNvbHVtbi5zdHlsZSxcbiAgICAgICAgICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IGNlbGxJbmZvID0ge1xuICAgICAgICAgICAgICAgIC4uLnJvd0luZm8sXG4gICAgICAgICAgICAgICAgaXNFeHBhbmRlZCxcbiAgICAgICAgICAgICAgICBjb2x1bW46IHsgLi4uY29sdW1uIH0sXG4gICAgICAgICAgICAgICAgdmFsdWU6IHJvd0luZm8ucm93W2NvbHVtbi5pZF0sXG4gICAgICAgICAgICAgICAgcGl2b3RlZDogY29sdW1uLnBpdm90ZWQsXG4gICAgICAgICAgICAgICAgZXhwYW5kZXI6IGNvbHVtbi5leHBhbmRlcixcbiAgICAgICAgICAgICAgICByZXNpemVkLFxuICAgICAgICAgICAgICAgIHNob3csXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGgsXG4gICAgICAgICAgICAgICAgdGRQcm9wcyxcbiAgICAgICAgICAgICAgICBjb2x1bW5Qcm9wcyxcbiAgICAgICAgICAgICAgICBjbGFzc2VzLFxuICAgICAgICAgICAgICAgIHN0eWxlcyxcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2VsbEluZm8udmFsdWVcblxuICAgICAgICAgICAgICBsZXQgdXNlT25FeHBhbmRlckNsaWNrXG4gICAgICAgICAgICAgIGxldCBpc0JyYW5jaFxuICAgICAgICAgICAgICBsZXQgaXNQcmV2aWV3XG5cbiAgICAgICAgICAgICAgY29uc3Qgb25FeHBhbmRlckNsaWNrID0gZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0V4cGFuZGVkID0gXy5jbG9uZShleHBhbmRlZClcbiAgICAgICAgICAgICAgICBpZiAoaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICAgICAgbmV3RXhwYW5kZWQgPSBfLnNldChuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdFeHBhbmRlZCA9IF8uc2V0KG5ld0V4cGFuZGVkLCBjZWxsSW5mby5uZXN0aW5nUGF0aCwge30pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0U3RhdGVXaXRoRGF0YShcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IG5ld0V4cGFuZGVkLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICgpID0+IG9uRXhwYW5kZWRDaGFuZ2UgJiYgb25FeHBhbmRlZENoYW5nZShuZXdFeHBhbmRlZCwgY2VsbEluZm8ubmVzdGluZ1BhdGgsIGUpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gRGVmYXVsdCB0byBhIHN0YW5kYXJkIGNlbGxcbiAgICAgICAgICAgICAgbGV0IHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KGNvbHVtbi5DZWxsLCBjZWxsSW5mbywgdmFsdWUpXG5cbiAgICAgICAgICAgICAgLy8gUmVzb2x2ZSBSZW5kZXJlcnNcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50ID1cbiAgICAgICAgICAgICAgICBjb2x1bW4uQWdncmVnYXRlZCB8fCAoIWNvbHVtbi5hZ2dyZWdhdGUgPyBBZ2dyZWdhdGVkQ29tcG9uZW50IDogY29sdW1uLkNlbGwpXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgPSBjb2x1bW4uRXhwYW5kZXIgfHwgRXhwYW5kZXJDb21wb25lbnRcbiAgICAgICAgICAgICAgY29uc3QgUmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50ID0gY29sdW1uLlBpdm90VmFsdWUgfHwgUGl2b3RWYWx1ZUNvbXBvbmVudFxuICAgICAgICAgICAgICBjb25zdCBEZWZhdWx0UmVzb2x2ZWRQaXZvdENvbXBvbmVudCA9XG4gICAgICAgICAgICAgICAgUGl2b3RDb21wb25lbnQgfHxcbiAgICAgICAgICAgICAgICAocHJvcHMgPT4gKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFJlc29sdmVkRXhwYW5kZXJDb21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8UmVzb2x2ZWRQaXZvdFZhbHVlQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGNvbnN0IFJlc29sdmVkUGl2b3RDb21wb25lbnQgPSBjb2x1bW4uUGl2b3QgfHwgRGVmYXVsdFJlc29sdmVkUGl2b3RDb21wb25lbnRcblxuICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNlbGwgZXhwYW5kYWJsZT9cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgfHwgY2VsbEluZm8uZXhwYW5kZXIpIHtcbiAgICAgICAgICAgICAgICAvLyBNYWtlIGl0IGV4cGFuZGFibGUgYnkgZGVmdWFsdFxuICAgICAgICAgICAgICAgIGNlbGxJbmZvLmV4cGFuZGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgdXNlT25FeHBhbmRlckNsaWNrID0gdHJ1ZVxuICAgICAgICAgICAgICAgIC8vIElmIHBpdm90ZWQsIGhhcyBubyBzdWJSb3dzLCBhbmQgZG9lcyBub3QgaGF2ZSBhIHN1YkNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyBkbyBub3QgbWFrZSBleHBhbmRhYmxlXG4gICAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQgJiYgIWNlbGxJbmZvLnN1YlJvd3MgJiYgIVN1YkNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgY2VsbEluZm8uZXhwYW5kYWJsZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLnBpdm90ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBJcyB0aGlzIGNvbHVtbiBhIGJyYW5jaD9cbiAgICAgICAgICAgICAgICBpc0JyYW5jaCA9IHJvd0luZm8ucm93W3Bpdm90SURLZXldID09PSBjb2x1bW4uaWQgJiYgY2VsbEluZm8uc3ViUm93c1xuICAgICAgICAgICAgICAgIC8vIFNob3VsZCB0aGlzIGNvbHVtbiBiZSBibGFuaz9cbiAgICAgICAgICAgICAgICBpc1ByZXZpZXcgPVxuICAgICAgICAgICAgICAgICAgcGl2b3RCeS5pbmRleE9mKGNvbHVtbi5pZCkgPiBwaXZvdEJ5LmluZGV4T2Yocm93SW5mby5yb3dbcGl2b3RJREtleV0pICYmXG4gICAgICAgICAgICAgICAgICBjZWxsSW5mby5zdWJSb3dzXG4gICAgICAgICAgICAgICAgLy8gUGl2b3QgQ2VsbCBSZW5kZXIgT3ZlcnJpZGVcbiAgICAgICAgICAgICAgICBpZiAoaXNCcmFuY2gpIHtcbiAgICAgICAgICAgICAgICAgIC8vIGlzUGl2b3RcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICBSZXNvbHZlZFBpdm90Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHJvd1twaXZvdFZhbEtleV0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJvd1twaXZvdFZhbEtleV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlzUHJldmlldykge1xuICAgICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgcGl2b3QgcHJldmlld1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoUmVzb2x2ZWRBZ2dyZWdhdGVkQ29tcG9uZW50LCBjZWxsSW5mbywgdmFsdWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2VsbEluZm8uYWdncmVnYXRlZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmVkQ2VsbCA9IF8ubm9ybWFsaXplQ29tcG9uZW50KFJlc29sdmVkQWdncmVnYXRlZENvbXBvbmVudCwgY2VsbEluZm8sIHZhbHVlKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGNlbGxJbmZvLmV4cGFuZGVyKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gXy5ub3JtYWxpemVDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICBSZXNvbHZlZEV4cGFuZGVyQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgY2VsbEluZm8sXG4gICAgICAgICAgICAgICAgICByb3dbcGl2b3RWYWxLZXldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGlmIChwaXZvdEJ5KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoY2VsbEluZm8uZ3JvdXBlZEJ5UGl2b3QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKCFjZWxsSW5mby5zdWJSb3dzICYmICFTdWJDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWRDZWxsID0gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkT25FeHBhbmRlckNsaWNrID0gdXNlT25FeHBhbmRlckNsaWNrID8gb25FeHBhbmRlckNsaWNrIDogKCkgPT4ge31cblxuICAgICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgb25DbGljayBldmVudHMsIG1ha2Ugc3VyZSB0aGV5IGRvbid0XG4gICAgICAgICAgICAgIC8vIG92ZXJyaWRlIGVhY2hvdGhlci4gVGhpcyBzaG91bGQgbWF5YmUgYmUgZXhwYW5kZWQgdG8gaGFuZGxlIGFsbFxuICAgICAgICAgICAgICAvLyBmdW5jdGlvbiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgIGNvbnN0IGludGVyYWN0aW9uUHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgb25DbGljazogcmVzb2x2ZWRPbkV4cGFuZGVyQ2xpY2ssXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAodGRQcm9wcy5yZXN0Lm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzLm9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgIHRkUHJvcHMucmVzdC5vbkNsaWNrKGUsICgpID0+IHJlc29sdmVkT25FeHBhbmRlckNsaWNrKGUpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChjb2x1bW5Qcm9wcy5yZXN0Lm9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGlvblByb3BzLm9uQ2xpY2sgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbHVtblByb3BzLnJlc3Qub25DbGljayhlLCAoKSA9PiByZXNvbHZlZE9uRXhwYW5kZXJDbGljayhlKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNlbGxcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VGRDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICAgICAgICAgIGtleT17YCR7aTJ9LSR7Y29sdW1uLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMsXG4gICAgICAgICAgICAgICAgICAgICFzaG93ICYmICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBjZWxsSW5mby5leHBhbmRhYmxlICYmICdydC1leHBhbmRhYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgKGlzQnJhbmNoIHx8IGlzUHJldmlldykgJiYgJ3J0LXBpdm90J1xuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgICAgICAgICAgZmxleDogYCR7d2lkdGh9IDAgYXV0b2AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBfLmFzUHgod2lkdGgpLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB7Li4udGRQcm9wcy5yZXN0fVxuICAgICAgICAgICAgICAgICAgey4uLmNvbHVtblByb3BzLnJlc3R9XG4gICAgICAgICAgICAgICAgICB7Li4uaW50ZXJhY3Rpb25Qcm9wc31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cmVzb2x2ZWRDZWxsfVxuICAgICAgICAgICAgICAgIDwvVGRDb21wb25lbnQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgICAge3Jvd0luZm8uc3ViUm93cyAmJlxuICAgICAgICAgICAgaXNFeHBhbmRlZCAmJlxuICAgICAgICAgICAgcm93SW5mby5zdWJSb3dzLm1hcCgoZCwgaSkgPT4gbWFrZVBhZ2VSb3coZCwgaSwgcm93SW5mby5uZXN0aW5nUGF0aCkpfVxuICAgICAgICAgIHtTdWJDb21wb25lbnQgJiYgIXJvd0luZm8uc3ViUm93cyAmJiBpc0V4cGFuZGVkICYmIFN1YkNvbXBvbmVudChyb3dJbmZvKX1cbiAgICAgICAgPC9Uckdyb3VwQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRDb2x1bW4gPSAoY29sdW1uLCBpKSA9PiB7XG4gICAgICBjb25zdCByZXNpemVkQ29sID0gcmVzaXplZC5maW5kKHggPT4geC5pZCA9PT0gY29sdW1uLmlkKSB8fCB7fVxuICAgICAgY29uc3Qgc2hvdyA9IHR5cGVvZiBjb2x1bW4uc2hvdyA9PT0gJ2Z1bmN0aW9uJyA/IGNvbHVtbi5zaG93KCkgOiBjb2x1bW4uc2hvd1xuICAgICAgY29uc3Qgd2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5taW5XaWR0aClcbiAgICAgIGNvbnN0IGZsZXggPSB3aWR0aFxuICAgICAgY29uc3QgbWF4V2lkdGggPSBfLmdldEZpcnN0RGVmaW5lZChyZXNpemVkQ29sLnZhbHVlLCBjb2x1bW4ud2lkdGgsIGNvbHVtbi5tYXhXaWR0aClcbiAgICAgIGNvbnN0IHRkUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcykpXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpKVxuXG4gICAgICBjb25zdCBjbGFzc2VzID0gW3RkUHJvcHMuY2xhc3NOYW1lLCBjb2x1bW4uY2xhc3NOYW1lLCBjb2x1bW5Qcm9wcy5jbGFzc05hbWVdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udGRQcm9wcy5zdHlsZSxcbiAgICAgICAgLi4uY29sdW1uLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Qcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGAke2ZsZXh9IDAgYXV0b2AsXG4gICAgICAgICAgICB3aWR0aDogXy5hc1B4KHdpZHRoKSxcbiAgICAgICAgICAgIG1heFdpZHRoOiBfLmFzUHgobWF4V2lkdGgpLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRkUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChQYWRSb3dDb21wb25lbnQpfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VQYWRSb3cgPSAocm93LCBpKSA9PiB7XG4gICAgICBpZiAoaSA9PT0gMCAmJiAhcGFnZVJvd3MubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG4gICAgICBjb25zdCB0ckdyb3VwUHJvcHMgPSBnZXRUckdyb3VwUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0clByb3BzID0gXy5zcGxpdFByb3BzKGdldFRyUHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRyR3JvdXBDb21wb25lbnQga2V5PXtgcGFkLSR7aX1gfSB7Li4udHJHcm91cFByb3BzfT5cbiAgICAgICAgICA8VHJDb21wb25lbnRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgICAgJy1wYWRSb3cnLFxuICAgICAgICAgICAgICAocGFnZVJvd3MubGVuZ3RoICsgaSkgJSAyID8gJy1ldmVuJyA6ICctb2RkJyxcbiAgICAgICAgICAgICAgdHJQcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzdHlsZT17dHJQcm9wcy5zdHlsZSB8fCB7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VQYWRDb2x1bW4pfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVHJHcm91cENvbXBvbmVudD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlQ29sdW1uRm9vdGVyID0gKGNvbHVtbiwgaSkgPT4ge1xuICAgICAgY29uc3QgcmVzaXplZENvbCA9IHJlc2l6ZWQuZmluZCh4ID0+IHguaWQgPT09IGNvbHVtbi5pZCkgfHwge31cbiAgICAgIGNvbnN0IHNob3cgPSB0eXBlb2YgY29sdW1uLnNob3cgPT09ICdmdW5jdGlvbicgPyBjb2x1bW4uc2hvdygpIDogY29sdW1uLnNob3dcbiAgICAgIGNvbnN0IHdpZHRoID0gXy5nZXRGaXJzdERlZmluZWQocmVzaXplZENvbC52YWx1ZSwgY29sdW1uLndpZHRoLCBjb2x1bW4ubWluV2lkdGgpXG4gICAgICBjb25zdCBtYXhXaWR0aCA9IF8uZ2V0Rmlyc3REZWZpbmVkKHJlc2l6ZWRDb2wudmFsdWUsIGNvbHVtbi53aWR0aCwgY29sdW1uLm1heFdpZHRoKVxuICAgICAgY29uc3QgdEZvb3RUZFByb3BzID0gXy5zcGxpdFByb3BzKGdldFRmb290VGRQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcykpXG4gICAgICBjb25zdCBjb2x1bW5Qcm9wcyA9IF8uc3BsaXRQcm9wcyhjb2x1bW4uZ2V0UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCBjb2x1bW4sIHRoaXMpKVxuICAgICAgY29uc3QgY29sdW1uRm9vdGVyUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGNvbHVtbi5nZXRGb290ZXJQcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIGNvbHVtbiwgdGhpcylcbiAgICAgIClcblxuICAgICAgY29uc3QgY2xhc3NlcyA9IFtcbiAgICAgICAgdEZvb3RUZFByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uLmNsYXNzTmFtZSxcbiAgICAgICAgY29sdW1uUHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjb2x1bW5Gb290ZXJQcm9wcy5jbGFzc05hbWUsXG4gICAgICBdXG5cbiAgICAgIGNvbnN0IHN0eWxlcyA9IHtcbiAgICAgICAgLi4udEZvb3RUZFByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW4uc3R5bGUsXG4gICAgICAgIC4uLmNvbHVtblByb3BzLnN0eWxlLFxuICAgICAgICAuLi5jb2x1bW5Gb290ZXJQcm9wcy5zdHlsZSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFRkQ29tcG9uZW50XG4gICAgICAgICAga2V5PXtgJHtpfS0ke2NvbHVtbi5pZH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhjbGFzc2VzLCAhc2hvdyAmJiAnaGlkZGVuJyl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlcyxcbiAgICAgICAgICAgIGZsZXg6IGAke3dpZHRofSAwIGF1dG9gLFxuICAgICAgICAgICAgd2lkdGg6IF8uYXNQeCh3aWR0aCksXG4gICAgICAgICAgICBtYXhXaWR0aDogXy5hc1B4KG1heFdpZHRoKSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHsuLi5jb2x1bW5Qcm9wcy5yZXN0fVxuICAgICAgICAgIHsuLi50Rm9vdFRkUHJvcHMucmVzdH1cbiAgICAgICAgICB7Li4uY29sdW1uRm9vdGVyUHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIHtfLm5vcm1hbGl6ZUNvbXBvbmVudChjb2x1bW4uRm9vdGVyLCB7XG4gICAgICAgICAgICBkYXRhOiBzb3J0ZWREYXRhLFxuICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RkQ29tcG9uZW50PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IG1ha2VDb2x1bW5Gb290ZXJzID0gKCkgPT4ge1xuICAgICAgY29uc3QgdEZvb3RQcm9wcyA9IGdldFRmb290UHJvcHMoZmluYWxTdGF0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMpXG4gICAgICBjb25zdCB0Rm9vdFRyUHJvcHMgPSBfLnNwbGl0UHJvcHMoZ2V0VGZvb3RUclByb3BzKGZpbmFsU3RhdGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzKSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxUZm9vdENvbXBvbmVudFxuICAgICAgICAgIGNsYXNzTmFtZT17dEZvb3RQcm9wcy5jbGFzc05hbWV9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnRGb290UHJvcHMuc3R5bGUsXG4gICAgICAgICAgICBtaW5XaWR0aDogYCR7cm93TWluV2lkdGh9cHhgLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnRGb290UHJvcHMucmVzdH1cbiAgICAgICAgPlxuICAgICAgICAgIDxUckNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRGb290VHJQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgc3R5bGU9e3RGb290VHJQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50Rm9vdFRyUHJvcHMucmVzdH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YWxsVmlzaWJsZUNvbHVtbnMubWFwKG1ha2VDb2x1bW5Gb290ZXIpfVxuICAgICAgICAgIDwvVHJDb21wb25lbnQ+XG4gICAgICAgIDwvVGZvb3RDb21wb25lbnQ+XG4gICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbWFrZVBhZ2luYXRpb24gPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uUHJvcHMgPSBfLnNwbGl0UHJvcHMoXG4gICAgICAgIGdldFBhZ2luYXRpb25Qcm9wcyhmaW5hbFN0YXRlLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdGhpcylcbiAgICAgIClcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdpbmF0aW9uQ29tcG9uZW50XG4gICAgICAgICAgey4uLnJlc29sdmVkU3RhdGV9XG4gICAgICAgICAgcGFnZXM9e3BhZ2VzfVxuICAgICAgICAgIGNhblByZXZpb3VzPXtjYW5QcmV2aW91c31cbiAgICAgICAgICBjYW5OZXh0PXtjYW5OZXh0fVxuICAgICAgICAgIG9uUGFnZUNoYW5nZT17dGhpcy5vblBhZ2VDaGFuZ2V9XG4gICAgICAgICAgb25QYWdlU2l6ZUNoYW5nZT17dGhpcy5vblBhZ2VTaXplQ2hhbmdlfVxuICAgICAgICAgIGNsYXNzTmFtZT17cGFnaW5hdGlvblByb3BzLmNsYXNzTmFtZX1cbiAgICAgICAgICBzdHlsZT17cGFnaW5hdGlvblByb3BzLnN0eWxlfVxuICAgICAgICAgIHsuLi5wYWdpbmF0aW9uUHJvcHMucmVzdH1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBtYWtlVGFibGUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gbWFrZVBhZ2luYXRpb24oKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnUmVhY3RUYWJsZScsIGNsYXNzTmFtZSwgcm9vdFByb3BzLmNsYXNzTmFtZSl9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIC4uLnN0eWxlLFxuICAgICAgICAgICAgLi4ucm9vdFByb3BzLnN0eWxlLFxuICAgICAgICAgIH19XG4gICAgICAgICAgey4uLnJvb3RQcm9wcy5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3dQYWdpbmF0aW9uICYmIHNob3dQYWdpbmF0aW9uVG9wID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uLXRvcFwiPntwYWdpbmF0aW9ufTwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgIDxUYWJsZUNvbXBvbmVudFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKHRhYmxlUHJvcHMuY2xhc3NOYW1lLCBjdXJyZW50bHlSZXNpemluZyA/ICdydC1yZXNpemluZycgOiAnJyl9XG4gICAgICAgICAgICBzdHlsZT17dGFibGVQcm9wcy5zdHlsZX1cbiAgICAgICAgICAgIHsuLi50YWJsZVByb3BzLnJlc3R9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbmZpZ3VyYWJsZSA/IG1ha2VDb25maWcoKSA6IG51bGx9XG4gICAgICAgICAgICB7aGFzSGVhZGVyR3JvdXBzID8gbWFrZUhlYWRlckdyb3VwcygpIDogbnVsbH1cbiAgICAgICAgICAgIHttYWtlSGVhZGVycygpfVxuICAgICAgICAgICAge2hhc0ZpbHRlcnMgPyBtYWtlRmlsdGVycygpIDogbnVsbH1cbiAgICAgICAgICAgIDxUYm9keUNvbXBvbmVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzbmFtZXModEJvZHlQcm9wcy5jbGFzc05hbWUpfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIC4uLnRCb2R5UHJvcHMuc3R5bGUsXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IGAke3Jvd01pbldpZHRofXB4YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnRCb2R5UHJvcHMucmVzdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3BhZ2VSb3dzLm1hcCgoZCwgaSkgPT4gbWFrZVBhZ2VSb3coZCwgaSkpfVxuICAgICAgICAgICAgICB7cGFkUm93cy5tYXAobWFrZVBhZFJvdyl9XG4gICAgICAgICAgICAgIHshcGFnZVJvd3MubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8Tm9EYXRhQ29tcG9uZW50IHsuLi5ub0RhdGFQcm9wc30+e18ubm9ybWFsaXplQ29tcG9uZW50KG5vRGF0YVRleHQpfTwvTm9EYXRhQ29tcG9uZW50PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9UYm9keUNvbXBvbmVudD5cbiAgICAgICAgICAgIHtoYXNDb2x1bW5Gb290ZXIgPyBtYWtlQ29sdW1uRm9vdGVycygpIDogbnVsbH1cbiAgICAgICAgICA8L1RhYmxlQ29tcG9uZW50PlxuICAgICAgICAgIHtzaG93UGFnaW5hdGlvbiAmJiBzaG93UGFnaW5hdGlvbkJvdHRvbSA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbi1ib3R0b21cIj57cGFnaW5hdGlvbn08L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8TG9hZGluZ0NvbXBvbmVudCBsb2FkaW5nPXtsb2FkaW5nfSBsb2FkaW5nVGV4dD17bG9hZGluZ1RleHR9IHsuLi5sb2FkaW5nUHJvcHN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIGNoaWxkUHJvcHMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIHRvIGEgZnVuY3Rpb24tYXMtYS1jaGlsZFxuICAgIHJldHVybiBjaGlsZHJlbiA/IGNoaWxkcmVuKGZpbmFsU3RhdGUsIG1ha2VUYWJsZSwgdGhpcykgOiBtYWtlVGFibGUoKVxuICB9XG59XG4iXX0=