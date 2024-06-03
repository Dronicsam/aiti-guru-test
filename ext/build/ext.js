/*
This file is part of Ext JS 6.0.0.640

Copyright (c) 2011-2015 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Version: 6.0.0.640 Build date: 2015-06-28 12:48:37 (134671ed5b6bf074e014e83502b615cd2e26a515)

*/
var Ext = Ext || {};
(function (b) {
  if (!Ext.manifest) {
    Ext.manifest = b;
  } else {
    for (var a in b) {
      Ext.manifest[a] = b[a];
    }
  }
})({
  paths: {
    Ext: "../classic/classic/src",
    "Ext.AbstractManager": "../packages/core/src/AbstractManager.js",
    "Ext.Ajax": "../packages/core/src/Ajax.js",
    "Ext.AnimationQueue": "../packages/core/src/AnimationQueue.js",
    "Ext.ComponentManager": "../packages/core/src/ComponentManager.js",
    "Ext.ComponentQuery": "../packages/core/src/ComponentQuery.js",
    "Ext.Deferred": "../packages/core/src/Deferred.js",
    "Ext.Evented": "../packages/core/src/Evented.js",
    "Ext.Factory": "../packages/core/src/mixin/Factoryable.js",
    "Ext.GlobalEvents": "../packages/core/src/GlobalEvents.js",
    "Ext.JSON": "../packages/core/src/JSON.js",
    "Ext.Mixin": "../packages/core/src/class/Mixin.js",
    "Ext.Msg": "../classic/classic/src/window/MessageBox.js",
    "Ext.Promise": "../packages/core/src/Promise.js",
    "Ext.String.format": "../packages/core/src/Template.js",
    "Ext.TaskQueue": "../packages/core/src/TaskQueue.js",
    "Ext.Template": "../packages/core/src/Template.js",
    "Ext.Widget": "../packages/core/src/Widget.js",
    "Ext.XTemplate": "../packages/core/src/XTemplate.js",
    "Ext.app": "../packages/core/src/app",
    "Ext.data": "../packages/core/src/data",
    "Ext.direct": "../packages/core/src/direct",
    "Ext.dom": "../packages/core/src/dom",
    "Ext.dom.ButtonElement": "../classic/classic/src/dom/ButtonElement.js",
    "Ext.dom.Layer": "../classic/classic/src/dom/Layer.js",
    "Ext.event": "../packages/core/src/event",
    "Ext.event.publisher.MouseEnterLeave":
      "../classic/classic/src/event/publisher/MouseEnterLeave.js",
    "Ext.fx.Animation": "../packages/core/src/fx/Animation.js",
    "Ext.fx.Runner": "../packages/core/src/fx/Runner.js",
    "Ext.fx.State": "../packages/core/src/fx/State.js",
    "Ext.fx.animation": "../packages/core/src/fx/animation",
    "Ext.fx.easing": "../packages/core/src/fx/easing",
    "Ext.fx.layout": "../packages/core/src/fx/layout",
    "Ext.fx.runner": "../packages/core/src/fx/runner",
    "Ext.list": "../packages/core/src/list",
    "Ext.mixin": "../packages/core/src/mixin",
    "Ext.perf": "../packages/core/src/perf",
    "Ext.plugin.Abstract": "../packages/core/src/plugin/Abstract.js",
    "Ext.plugin.LazyItems": "../packages/core/src/plugin/LazyItems.js",
    "Ext.promise": "../packages/core/src/promise",
    "Ext.scroll": "../packages/core/src/scroll",
    "Ext.util": "../packages/core/src/util",
    "Ext.util.Animate": "../classic/classic/src/util/Animate.js",
    "Ext.util.CSS": "../classic/classic/src/util/CSS.js",
    "Ext.util.ClickRepeater": "../classic/classic/src/util/ClickRepeater.js",
    "Ext.util.ComponentDragger":
      "../classic/classic/src/util/ComponentDragger.js",
    "Ext.util.Cookies": "../classic/classic/src/util/Cookies.js",
    "Ext.util.ElementContainer":
      "../classic/classic/src/util/ElementContainer.js",
    "Ext.util.Floating": "../classic/classic/src/util/Floating.js",
    "Ext.util.FocusTrap": "../classic/classic/src/util/FocusTrap.js",
    "Ext.util.Focusable": "../classic/classic/src/util/Focusable.js",
    "Ext.util.FocusableContainer":
      "../classic/classic/src/util/FocusableContainer.js",
    "Ext.util.Format.format": "../packages/core/src/Template.js",
    "Ext.util.KeyMap": "../classic/classic/src/util/KeyMap.js",
    "Ext.util.KeyNav": "../classic/classic/src/util/KeyNav.js",
    "Ext.util.KeyboardInteractive":
      "../classic/classic/src/util/KeyboardInteractive.js",
    "Ext.util.Memento": "../classic/classic/src/util/Memento.js",
    "Ext.util.ProtoElement": "../classic/classic/src/util/ProtoElement.js",
    "Ext.util.Queue": "../classic/classic/src/util/Queue.js",
    "Ext.util.Renderable": "../classic/classic/src/util/Renderable.js",
    "Ext.util.StoreHolder": "../classic/classic/src/util/StoreHolder.js",
  },
  loadOrder: [
    {
      path: "../packages/core/src/class/Mixin.js",
      requires: [],
      uses: [],
      idx: 0,
    },
    {
      path: "../packages/core/src/util/DelayedTask.js",
      requires: [],
      uses: [77],
      idx: 1,
    },
    {
      path: "../packages/core/src/util/Event.js",
      requires: [1],
      uses: [],
      idx: 2,
    },
    {
      path: "../packages/core/src/mixin/Identifiable.js",
      requires: [],
      uses: [],
      idx: 3,
    },
    {
      path: "../packages/core/src/mixin/Observable.js",
      requires: [0, 2, 3],
      uses: [52],
      idx: 4,
    },
    {
      path: "../packages/core/src/util/HashMap.js",
      requires: [4],
      uses: [],
      idx: 5,
    },
    {
      path: "../packages/core/src/AbstractManager.js",
      requires: [5],
      uses: [],
      idx: 6,
    },
    {
      path: "../packages/core/src/promise/Consequence.js",
      requires: [],
      uses: [8],
      idx: 7,
    },
    {
      path: "../packages/core/src/promise/Deferred.js",
      requires: [7],
      uses: [9],
      idx: 8,
    },
    {
      path: "../packages/core/src/promise/Promise.js",
      requires: [8],
      uses: [],
      idx: 9,
    },
    {
      path: "../packages/core/src/Promise.js",
      requires: [9],
      uses: [8],
      idx: 10,
    },
    {
      path: "../packages/core/src/Deferred.js",
      requires: [8, 10],
      uses: [9],
      idx: 11,
    },
    {
      path: "../packages/core/src/mixin/Factoryable.js",
      requires: [],
      uses: [],
      idx: 12,
    },
    {
      path: "../packages/core/src/data/request/Base.js",
      requires: [11, 12],
      uses: [17],
      idx: 13,
    },
    {
      path: "../packages/core/src/data/flash/BinaryXhr.js",
      requires: [],
      uses: [77],
      idx: 14,
    },
    {
      path: "../packages/core/src/data/request/Ajax.js",
      requires: [13, 14],
      uses: [77],
      idx: 15,
    },
    {
      path: "../packages/core/src/data/request/Form.js",
      requires: [13],
      uses: [],
      idx: 16,
    },
    {
      path: "../packages/core/src/data/Connection.js",
      requires: [4, 11, 14, 15, 16],
      uses: [12, 50],
      idx: 17,
    },
    { path: "../packages/core/src/Ajax.js", requires: [17], uses: [], idx: 18 },
    {
      path: "../packages/core/src/AnimationQueue.js",
      requires: [],
      uses: [],
      idx: 19,
    },
    {
      path: "../packages/core/src/ComponentManager.js",
      requires: [],
      uses: [50],
      idx: 20,
    },
    {
      path: "../packages/core/src/util/Operators.js",
      requires: [],
      uses: [],
      idx: 21,
    },
    {
      path: "../packages/core/src/util/LruCache.js",
      requires: [5],
      uses: [],
      idx: 22,
    },
    {
      path: "../packages/core/src/ComponentQuery.js",
      requires: [20, 21, 22],
      uses: [80],
      idx: 23,
    },
    {
      path: "../packages/core/src/Evented.js",
      requires: [4],
      uses: [],
      idx: 24,
    },
    {
      path: "../packages/core/src/util/Positionable.js",
      requires: [],
      uses: [33, 50],
      idx: 25,
    },
    {
      path: "../packages/core/src/dom/UnderlayPool.js",
      requires: [],
      uses: [50],
      idx: 26,
    },
    {
      path: "../packages/core/src/dom/Underlay.js",
      requires: [26],
      uses: [],
      idx: 27,
    },
    {
      path: "../packages/core/src/dom/Shadow.js",
      requires: [27],
      uses: [],
      idx: 28,
    },
    {
      path: "../packages/core/src/dom/Shim.js",
      requires: [27],
      uses: [],
      idx: 29,
    },
    {
      path: "../packages/core/src/dom/ElementEvent.js",
      requires: [2],
      uses: [36],
      idx: 30,
    },
    {
      path: "../packages/core/src/event/publisher/Publisher.js",
      requires: [],
      uses: [],
      idx: 31,
    },
    {
      path: "../packages/core/src/util/Offset.js",
      requires: [],
      uses: [],
      idx: 32,
    },
    {
      path: "../packages/core/src/util/Region.js",
      requires: [32],
      uses: [],
      idx: 33,
    },
    {
      path: "../packages/core/src/util/Point.js",
      requires: [33],
      uses: [],
      idx: 34,
    },
    {
      path: "../packages/core/src/event/Event.js",
      requires: [34],
      uses: [],
      idx: 35,
    },
    {
      path: "../packages/core/src/event/publisher/Dom.js",
      requires: [31, 35],
      uses: [77],
      idx: 36,
    },
    {
      path: "../packages/core/src/event/publisher/Gesture.js",
      requires: [19, 34, 36],
      uses: [
        35, 50, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268,
      ],
      idx: 37,
    },
    {
      path: "../packages/core/src/mixin/Templatable.js",
      requires: [0],
      uses: [50],
      idx: 38,
    },
    {
      path: "../packages/core/src/TaskQueue.js",
      requires: [19],
      uses: [],
      idx: 39,
    },
    {
      path: "../packages/core/src/util/sizemonitor/Abstract.js",
      requires: [38, 39],
      uses: [],
      idx: 40,
    },
    {
      path: "../packages/core/src/util/sizemonitor/Default.js",
      requires: [40],
      uses: [],
      idx: 41,
    },
    {
      path: "../packages/core/src/util/sizemonitor/Scroll.js",
      requires: [40],
      uses: [39],
      idx: 42,
    },
    {
      path: "../packages/core/src/util/sizemonitor/OverflowChange.js",
      requires: [40],
      uses: [39],
      idx: 43,
    },
    {
      path: "../packages/core/src/util/SizeMonitor.js",
      requires: [41, 42, 43],
      uses: [],
      idx: 44,
    },
    {
      path: "../packages/core/src/event/publisher/ElementSize.js",
      requires: [31, 44],
      uses: [39],
      idx: 45,
    },
    {
      path: "../packages/core/src/util/paintmonitor/Abstract.js",
      requires: [],
      uses: [50],
      idx: 46,
    },
    {
      path: "../packages/core/src/util/paintmonitor/CssAnimation.js",
      requires: [46],
      uses: [],
      idx: 47,
    },
    {
      path: "../packages/core/src/util/PaintMonitor.js",
      requires: [47],
      uses: [],
      idx: 48,
    },
    {
      path: "../packages/core/src/event/publisher/ElementPaint.js",
      requires: [31, 39, 48],
      uses: [],
      idx: 49,
    },
    {
      path: "../packages/core/src/dom/Element.js",
      requires: [4, 25, 28, 29, 30, 36, 37, 45, 49],
      uses: [31, 33, 75, 76, 77, 80, 91, 229, 269, 279, 281],
      idx: 50,
    },
    {
      path: "../packages/core/src/util/Filter.js",
      requires: [],
      uses: [],
      idx: 51,
    },
    {
      path: "../packages/core/src/util/Observable.js",
      requires: [4],
      uses: [],
      idx: 52,
    },
    {
      path: "../packages/core/src/util/AbstractMixedCollection.js",
      requires: [51, 52],
      uses: [],
      idx: 53,
    },
    {
      path: "../packages/core/src/util/Sorter.js",
      requires: [],
      uses: [],
      idx: 54,
    },
    {
      path: "../packages/core/src/util/Sortable.js",
      requires: [54],
      uses: [56],
      idx: 55,
    },
    {
      path: "../packages/core/src/util/MixedCollection.js",
      requires: [53, 55],
      uses: [],
      idx: 56,
    },
    {
      path: "../packages/core/src/util/TaskRunner.js",
      requires: [],
      uses: [77],
      idx: 57,
    },
    {
      path: "../classic/classic/src/fx/target/Target.js",
      requires: [],
      uses: [],
      idx: 58,
    },
    {
      path: "../classic/classic/src/fx/target/Element.js",
      requires: [58],
      uses: [],
      idx: 59,
    },
    {
      path: "../classic/classic/src/fx/target/ElementCSS.js",
      requires: [59],
      uses: [],
      idx: 60,
    },
    {
      path: "../classic/classic/src/fx/target/CompositeElement.js",
      requires: [59],
      uses: [],
      idx: 61,
    },
    {
      path: "../classic/classic/src/fx/target/CompositeElementCSS.js",
      requires: [60, 61],
      uses: [],
      idx: 62,
    },
    {
      path: "../classic/classic/src/fx/target/Sprite.js",
      requires: [58],
      uses: [],
      idx: 63,
    },
    {
      path: "../classic/classic/src/fx/target/CompositeSprite.js",
      requires: [63],
      uses: [],
      idx: 64,
    },
    {
      path: "../classic/classic/src/fx/target/Component.js",
      requires: [58],
      uses: [77],
      idx: 65,
    },
    {
      path: "../classic/classic/src/fx/Queue.js",
      requires: [5],
      uses: [],
      idx: 66,
    },
    {
      path: "../classic/classic/src/fx/Manager.js",
      requires: [56, 57, 59, 60, 61, 62, 63, 64, 65, 66],
      uses: [],
      idx: 67,
    },
    {
      path: "../classic/classic/src/fx/Animator.js",
      requires: [52, 67],
      uses: [73],
      idx: 68,
    },
    {
      path: "../classic/classic/src/fx/CubicBezier.js",
      requires: [],
      uses: [],
      idx: 69,
    },
    {
      path: "../classic/classic/src/fx/Easing.js",
      requires: [69],
      uses: [],
      idx: 70,
    },
    {
      path: "../classic/classic/src/fx/DrawPath.js",
      requires: [],
      uses: [],
      idx: 71,
    },
    {
      path: "../classic/classic/src/fx/PropertyHandler.js",
      requires: [71],
      uses: [],
      idx: 72,
    },
    {
      path: "../classic/classic/src/fx/Anim.js",
      requires: [52, 67, 68, 69, 70, 72],
      uses: [],
      idx: 73,
    },
    {
      path: "../classic/classic/src/util/Animate.js",
      requires: [67, 73],
      uses: [],
      idx: 74,
    },
    {
      path: "../packages/core/src/dom/Fly.js",
      requires: [50],
      uses: [],
      idx: 75,
    },
    {
      path: "../packages/core/src/dom/CompositeElementLite.js",
      requires: [75],
      uses: [50],
      idx: 76,
    },
    {
      path: "../packages/core/src/GlobalEvents.js",
      requires: [4, 50],
      uses: [],
      idx: 77,
    },
    { path: "../packages/core/src/JSON.js", requires: [], uses: [], idx: 78 },
    {
      path: "../packages/core/src/util/Format.js",
      requires: [],
      uses: [80, 229],
      idx: 79,
    },
    {
      path: "../packages/core/src/Template.js",
      requires: [79],
      uses: [229],
      idx: 80,
    },
    {
      path: "../packages/core/src/mixin/Inheritable.js",
      requires: [0],
      uses: [20],
      idx: 81,
    },
    {
      path: "../packages/core/src/mixin/Bindable.js",
      requires: [],
      uses: [12],
      idx: 82,
    },
    {
      path: "../packages/core/src/mixin/ComponentDelegation.js",
      requires: [0, 4],
      uses: [2],
      idx: 83,
    },
    {
      path: "../packages/core/src/Widget.js",
      requires: [24, 50, 81, 82, 83],
      uses: [20, 23],
      idx: 84,
    },
    {
      path: "../packages/core/src/util/XTemplateParser.js",
      requires: [],
      uses: [],
      idx: 85,
    },
    {
      path: "../packages/core/src/util/XTemplateCompiler.js",
      requires: [85],
      uses: [],
      idx: 86,
    },
    {
      path: "../packages/core/src/XTemplate.js",
      requires: [80, 86],
      uses: [],
      idx: 87,
    },
    {
      path: "../packages/core/src/app/EventDomain.js",
      requires: [2],
      uses: [],
      idx: 88,
    },
    {
      path: "../packages/core/src/app/domain/Component.js",
      requires: [84, 88],
      uses: [],
      idx: 89,
    },
    {
      path: "../classic/classic/src/util/ProtoElement.js",
      requires: [],
      uses: [50, 229],
      idx: 90,
    },
    {
      path: "../packages/core/src/dom/CompositeElement.js",
      requires: [76],
      uses: [],
      idx: 91,
    },
    {
      path: "../packages/core/src/scroll/Scroller.js",
      requires: [12, 24],
      uses: [77, 107, 108],
      idx: 92,
    },
    {
      path: "../packages/core/src/fx/easing/Abstract.js",
      requires: [],
      uses: [],
      idx: 93,
    },
    {
      path: "../packages/core/src/fx/easing/Momentum.js",
      requires: [93],
      uses: [],
      idx: 94,
    },
    {
      path: "../packages/core/src/fx/easing/Bounce.js",
      requires: [93],
      uses: [],
      idx: 95,
    },
    {
      path: "../packages/core/src/fx/easing/BoundMomentum.js",
      requires: [93, 94, 95],
      uses: [],
      idx: 96,
    },
    {
      path: "../packages/core/src/fx/easing/Linear.js",
      requires: [93],
      uses: [],
      idx: 97,
    },
    {
      path: "../packages/core/src/fx/easing/EaseOut.js",
      requires: [97],
      uses: [],
      idx: 98,
    },
    {
      path: "../packages/core/src/util/translatable/Abstract.js",
      requires: [24, 97],
      uses: [19],
      idx: 99,
    },
    {
      path: "../packages/core/src/util/translatable/Dom.js",
      requires: [99],
      uses: [],
      idx: 100,
    },
    {
      path: "../packages/core/src/util/translatable/CssTransform.js",
      requires: [100],
      uses: [],
      idx: 101,
    },
    {
      path: "../packages/core/src/util/translatable/ScrollPosition.js",
      requires: [100],
      uses: [],
      idx: 102,
    },
    {
      path: "../packages/core/src/util/translatable/ScrollParent.js",
      requires: [100],
      uses: [],
      idx: 103,
    },
    {
      path: "../packages/core/src/util/translatable/CssPosition.js",
      requires: [100],
      uses: [],
      idx: 104,
    },
    {
      path: "../packages/core/src/util/Translatable.js",
      requires: [101, 102, 103, 104],
      uses: [],
      idx: 105,
    },
    {
      path: "../packages/core/src/scroll/Indicator.js",
      requires: [84],
      uses: [],
      idx: 106,
    },
    {
      path: "../packages/core/src/scroll/TouchScroller.js",
      requires: [77, 92, 96, 98, 105, 106],
      uses: [],
      idx: 107,
    },
    {
      path: "../packages/core/src/scroll/DomScroller.js",
      requires: [92],
      uses: [],
      idx: 108,
    },
    {
      path: "../classic/classic/src/util/Floating.js",
      requires: [],
      uses: [20, 77, 332],
      idx: 109,
    },
    {
      path: "../classic/classic/src/util/ElementContainer.js",
      requires: [],
      uses: [],
      idx: 110,
    },
    {
      path: "../classic/classic/src/util/Renderable.js",
      requires: [50],
      uses: [87, 118, 229],
      idx: 111,
    },
    {
      path: "../classic/classic/src/state/Provider.js",
      requires: [52],
      uses: [],
      idx: 112,
    },
    {
      path: "../classic/classic/src/state/Manager.js",
      requires: [112],
      uses: [],
      idx: 113,
    },
    {
      path: "../classic/classic/src/state/Stateful.js",
      requires: [57, 113],
      uses: [],
      idx: 114,
    },
    {
      path: "../classic/classic/src/util/Focusable.js",
      requires: [1],
      uses: [23, 35, 50, 118],
      idx: 115,
    },
    {
      path: "../packages/core/src/mixin/Accessible.js",
      requires: [0],
      uses: [],
      idx: 116,
    },
    {
      path: "../classic/classic/src/util/KeyboardInteractive.js",
      requires: [0],
      uses: [35],
      idx: 117,
    },
    {
      path: "../classic/classic/src/Component.js",
      requires: [
        20, 23, 25, 52, 74, 77, 81, 82, 83, 90, 91, 92, 107, 108, 109, 110, 111,
        114, 115, 116, 117,
      ],
      uses: [
        1, 50, 67, 87, 194, 229, 327, 328, 329, 332, 339, 341, 411, 554, 568,
        572,
      ],
      idx: 118,
    },
    {
      path: "../classic/classic/src/layout/container/border/Region.js",
      requires: [],
      uses: [],
      idx: 119,
    },
    {
      path: "../packages/core/src/app/EventBus.js",
      requires: [89],
      uses: [88],
      idx: 120,
    },
    {
      path: "../packages/core/src/app/domain/Global.js",
      requires: [77, 88],
      uses: [],
      idx: 121,
    },
    {
      path: "../packages/core/src/app/BaseController.js",
      requires: [4, 120, 121],
      uses: [178, 179, 208],
      idx: 122,
    },
    {
      path: "../packages/core/src/app/Util.js",
      requires: [],
      uses: [],
      idx: 123,
    },
    {
      path: "../packages/core/src/util/CollectionKey.js",
      requires: [3],
      uses: [],
      idx: 124,
    },
    {
      path: "../packages/core/src/util/Grouper.js",
      requires: [54],
      uses: [],
      idx: 125,
    },
    {
      path: "../packages/core/src/util/Collection.js",
      requires: [4, 51, 54, 124, 125],
      uses: [168, 169, 170],
      idx: 126,
    },
    {
      path: "../packages/core/src/util/ObjectTemplate.js",
      requires: [87],
      uses: [],
      idx: 127,
    },
    {
      path: "../packages/core/src/data/schema/Role.js",
      requires: [],
      uses: [12],
      idx: 128,
    },
    {
      path: "../packages/core/src/data/schema/Association.js",
      requires: [128],
      uses: [],
      idx: 129,
    },
    {
      path: "../packages/core/src/data/schema/OneToOne.js",
      requires: [129],
      uses: [],
      idx: 130,
    },
    {
      path: "../packages/core/src/data/schema/ManyToOne.js",
      requires: [129],
      uses: [],
      idx: 131,
    },
    {
      path: "../packages/core/src/data/schema/ManyToMany.js",
      requires: [129],
      uses: [],
      idx: 132,
    },
    {
      path: "../packages/core/src/util/Inflector.js",
      requires: [],
      uses: [],
      idx: 133,
    },
    {
      path: "../packages/core/src/data/schema/Namer.js",
      requires: [12, 133],
      uses: [],
      idx: 134,
    },
    {
      path: "../packages/core/src/data/schema/Schema.js",
      requires: [12, 127, 130, 131, 132, 134],
      uses: [],
      idx: 135,
    },
    {
      path: "../packages/core/src/data/AbstractStore.js",
      requires: [4, 12, 51, 126, 135],
      uses: [174],
      idx: 136,
    },
    {
      path: "../packages/core/src/data/Error.js",
      requires: [],
      uses: [],
      idx: 137,
    },
    {
      path: "../packages/core/src/data/ErrorCollection.js",
      requires: [56, 137],
      uses: [146],
      idx: 138,
    },
    {
      path: "../packages/core/src/data/operation/Operation.js",
      requires: [],
      uses: [],
      idx: 139,
    },
    {
      path: "../packages/core/src/data/operation/Create.js",
      requires: [139],
      uses: [],
      idx: 140,
    },
    {
      path: "../packages/core/src/data/operation/Destroy.js",
      requires: [139],
      uses: [],
      idx: 141,
    },
    {
      path: "../packages/core/src/data/operation/Read.js",
      requires: [139],
      uses: [],
      idx: 142,
    },
    {
      path: "../packages/core/src/data/operation/Update.js",
      requires: [139],
      uses: [],
      idx: 143,
    },
    {
      path: "../packages/core/src/data/SortTypes.js",
      requires: [],
      uses: [],
      idx: 144,
    },
    {
      path: "../packages/core/src/data/validator/Validator.js",
      requires: [12],
      uses: [],
      idx: 145,
    },
    {
      path: "../packages/core/src/data/field/Field.js",
      requires: [12, 144, 145],
      uses: [],
      idx: 146,
    },
    {
      path: "../packages/core/src/data/field/Boolean.js",
      requires: [146],
      uses: [],
      idx: 147,
    },
    {
      path: "../packages/core/src/data/field/Date.js",
      requires: [146],
      uses: [],
      idx: 148,
    },
    {
      path: "../packages/core/src/data/field/Integer.js",
      requires: [146],
      uses: [],
      idx: 149,
    },
    {
      path: "../packages/core/src/data/field/Number.js",
      requires: [149],
      uses: [],
      idx: 150,
    },
    {
      path: "../packages/core/src/data/field/String.js",
      requires: [146],
      uses: [],
      idx: 151,
    },
    {
      path: "../packages/core/src/data/identifier/Generator.js",
      requires: [12],
      uses: [],
      idx: 152,
    },
    {
      path: "../packages/core/src/data/identifier/Sequential.js",
      requires: [152],
      uses: [],
      idx: 153,
    },
    {
      path: "../packages/core/src/data/Model.js",
      requires: [
        135, 138, 139, 140, 141, 142, 143, 145, 146, 147, 148, 149, 150, 151,
        152, 153,
      ],
      uses: [12, 156, 228],
      idx: 154,
    },
    {
      path: "../packages/core/src/data/ResultSet.js",
      requires: [],
      uses: [],
      idx: 155,
    },
    {
      path: "../packages/core/src/data/reader/Reader.js",
      requires: [4, 12, 22, 87, 155],
      uses: [135],
      idx: 156,
    },
    {
      path: "../packages/core/src/data/writer/Writer.js",
      requires: [12],
      uses: [],
      idx: 157,
    },
    {
      path: "../packages/core/src/data/proxy/Proxy.js",
      requires: [4, 12, 135, 156, 157],
      uses: [139, 140, 141, 142, 143, 154, 187],
      idx: 158,
    },
    {
      path: "../packages/core/src/data/proxy/Client.js",
      requires: [158],
      uses: [],
      idx: 159,
    },
    {
      path: "../packages/core/src/data/proxy/Memory.js",
      requires: [159],
      uses: [51, 55],
      idx: 160,
    },
    {
      path: "../packages/core/src/data/ProxyStore.js",
      requires: [136, 139, 140, 141, 142, 143, 154, 158, 160],
      uses: [1, 135],
      idx: 161,
    },
    {
      path: "../packages/core/src/data/LocalStore.js",
      requires: [0],
      uses: [126],
      idx: 162,
    },
    {
      path: "../packages/core/src/data/proxy/Server.js",
      requires: [158],
      uses: [80, 225],
      idx: 163,
    },
    {
      path: "../packages/core/src/data/proxy/Ajax.js",
      requires: [18, 163],
      uses: [],
      idx: 164,
    },
    {
      path: "../packages/core/src/data/reader/Json.js",
      requires: [78, 156],
      uses: [],
      idx: 165,
    },
    {
      path: "../packages/core/src/data/writer/Json.js",
      requires: [157],
      uses: [],
      idx: 166,
    },
    {
      path: "../packages/core/src/util/Group.js",
      requires: [126],
      uses: [],
      idx: 167,
    },
    {
      path: "../packages/core/src/util/SorterCollection.js",
      requires: [54, 126],
      uses: [],
      idx: 168,
    },
    {
      path: "../packages/core/src/util/FilterCollection.js",
      requires: [51, 126],
      uses: [],
      idx: 169,
    },
    {
      path: "../packages/core/src/util/GroupCollection.js",
      requires: [126, 167, 168, 169],
      uses: [],
      idx: 170,
    },
    {
      path: "../packages/core/src/data/Store.js",
      requires: [1, 154, 161, 162, 164, 165, 166, 170],
      uses: [125, 174, 213],
      idx: 171,
    },
    {
      path: "../packages/core/src/data/reader/Array.js",
      requires: [165],
      uses: [],
      idx: 172,
    },
    {
      path: "../packages/core/src/data/ArrayStore.js",
      requires: [160, 171, 172],
      uses: [],
      idx: 173,
    },
    {
      path: "../packages/core/src/data/StoreManager.js",
      requires: [56, 173],
      uses: [12, 160, 166, 171, 172],
      idx: 174,
    },
    {
      path: "../packages/core/src/app/domain/Store.js",
      requires: [88, 136],
      uses: [],
      idx: 175,
    },
    {
      path: "../packages/core/src/app/route/Queue.js",
      requires: [],
      uses: [56],
      idx: 176,
    },
    {
      path: "../packages/core/src/app/route/Route.js",
      requires: [],
      uses: [80],
      idx: 177,
    },
    {
      path: "../packages/core/src/util/History.js",
      requires: [52],
      uses: [322],
      idx: 178,
    },
    {
      path: "../packages/core/src/app/route/Router.js",
      requires: [176, 177, 178],
      uses: [],
      idx: 179,
    },
    {
      path: "../packages/core/src/app/Controller.js",
      requires: [20, 89, 122, 123, 174, 175, 179],
      uses: [23, 135],
      idx: 180,
    },
    {
      path: "../packages/core/src/app/Application.js",
      requires: [56, 178, 180],
      uses: [179],
      idx: 181,
    },
    {
      path: "../packages/core/src/app/Profile.js",
      requires: [4],
      uses: [180],
      idx: 182,
    },
    {
      path: "../packages/core/src/app/domain/View.js",
      requires: [88],
      uses: [],
      idx: 183,
    },
    {
      path: "../packages/core/src/app/ViewController.js",
      requires: [12, 122, 183],
      uses: [],
      idx: 184,
    },
    {
      path: "../packages/core/src/util/Bag.js",
      requires: [],
      uses: [],
      idx: 185,
    },
    {
      path: "../packages/core/src/util/Scheduler.js",
      requires: [4, 185],
      uses: [77],
      idx: 186,
    },
    {
      path: "../packages/core/src/data/Batch.js",
      requires: [4],
      uses: [],
      idx: 187,
    },
    {
      path: "../packages/core/src/data/matrix/Slice.js",
      requires: [],
      uses: [],
      idx: 188,
    },
    {
      path: "../packages/core/src/data/matrix/Side.js",
      requires: [188],
      uses: [],
      idx: 189,
    },
    {
      path: "../packages/core/src/data/matrix/Matrix.js",
      requires: [189],
      uses: [],
      idx: 190,
    },
    {
      path: "../packages/core/src/data/session/ChangesVisitor.js",
      requires: [],
      uses: [],
      idx: 191,
    },
    {
      path: "../packages/core/src/data/session/ChildChangesVisitor.js",
      requires: [191],
      uses: [],
      idx: 192,
    },
    {
      path: "../packages/core/src/data/session/BatchVisitor.js",
      requires: [],
      uses: [187],
      idx: 193,
    },
    {
      path: "../packages/core/src/data/Session.js",
      requires: [135, 187, 190, 191, 192, 193],
      uses: [],
      idx: 194,
    },
    {
      path: "../packages/core/src/util/Schedulable.js",
      requires: [],
      uses: [],
      idx: 195,
    },
    {
      path: "../packages/core/src/app/bind/BaseBinding.js",
      requires: [195],
      uses: [],
      idx: 196,
    },
    {
      path: "../packages/core/src/app/bind/Binding.js",
      requires: [196],
      uses: [],
      idx: 197,
    },
    {
      path: "../packages/core/src/app/bind/AbstractStub.js",
      requires: [195, 197],
      uses: [],
      idx: 198,
    },
    {
      path: "../packages/core/src/app/bind/Stub.js",
      requires: [197, 198],
      uses: [203],
      idx: 199,
    },
    {
      path: "../packages/core/src/app/bind/LinkStub.js",
      requires: [199],
      uses: [],
      idx: 200,
    },
    {
      path: "../packages/core/src/app/bind/RootStub.js",
      requires: [198, 199, 200],
      uses: [],
      idx: 201,
    },
    {
      path: "../packages/core/src/app/bind/Multi.js",
      requires: [196],
      uses: [],
      idx: 202,
    },
    {
      path: "../packages/core/src/app/bind/Formula.js",
      requires: [22, 195],
      uses: [],
      idx: 203,
    },
    {
      path: "../packages/core/src/app/bind/Template.js",
      requires: [79],
      uses: [],
      idx: 204,
    },
    {
      path: "../packages/core/src/app/bind/TemplateBinding.js",
      requires: [196, 202, 204],
      uses: [],
      idx: 205,
    },
    {
      path: "../packages/core/src/data/ChainedStore.js",
      requires: [136, 162],
      uses: [80, 174],
      idx: 206,
    },
    {
      path: "../packages/core/src/app/ViewModel.js",
      requires: [3, 12, 186, 194, 200, 201, 202, 203, 205, 206],
      uses: [1, 135],
      idx: 207,
    },
    {
      path: "../packages/core/src/app/domain/Controller.js",
      requires: [88, 180],
      uses: [122],
      idx: 208,
    },
    {
      path: "../packages/core/src/direct/Manager.js",
      requires: [4, 56],
      uses: [80],
      idx: 209,
    },
    {
      path: "../packages/core/src/direct/Provider.js",
      requires: [4, 209],
      uses: [],
      idx: 210,
    },
    {
      path: "../packages/core/src/app/domain/Direct.js",
      requires: [88, 210],
      uses: [],
      idx: 211,
    },
    {
      path: "../packages/core/src/data/PageMap.js",
      requires: [22],
      uses: [],
      idx: 212,
    },
    {
      path: "../packages/core/src/data/BufferedStore.js",
      requires: [51, 54, 125, 161, 212],
      uses: [168, 169, 170],
      idx: 213,
    },
    {
      path: "../packages/core/src/data/proxy/Direct.js",
      requires: [163, 209],
      uses: [],
      idx: 214,
    },
    {
      path: "../packages/core/src/data/DirectStore.js",
      requires: [171, 214],
      uses: [],
      idx: 215,
    },
    {
      path: "../packages/core/src/data/JsonP.js",
      requires: [],
      uses: [77],
      idx: 216,
    },
    {
      path: "../packages/core/src/data/proxy/JsonP.js",
      requires: [163, 216],
      uses: [],
      idx: 217,
    },
    {
      path: "../packages/core/src/data/JsonPStore.js",
      requires: [165, 171, 217],
      uses: [],
      idx: 218,
    },
    {
      path: "../packages/core/src/data/JsonStore.js",
      requires: [164, 165, 166, 171],
      uses: [],
      idx: 219,
    },
    {
      path: "../packages/core/src/data/ModelManager.js",
      requires: [135],
      uses: [154],
      idx: 220,
    },
    {
      path: "../packages/core/src/data/NodeInterface.js",
      requires: [4, 147, 149, 151, 166],
      uses: [135],
      idx: 221,
    },
    {
      path: "../packages/core/src/mixin/Queryable.js",
      requires: [],
      uses: [23],
      idx: 222,
    },
    {
      path: "../packages/core/src/data/TreeModel.js",
      requires: [154, 221, 222],
      uses: [],
      idx: 223,
    },
    {
      path: "../packages/core/src/data/NodeStore.js",
      requires: [171, 221, 223],
      uses: [154],
      idx: 224,
    },
    {
      path: "../packages/core/src/data/Request.js",
      requires: [],
      uses: [],
      idx: 225,
    },
    {
      path: "../packages/core/src/data/TreeStore.js",
      requires: [54, 171, 221, 223],
      uses: [154],
      idx: 226,
    },
    {
      path: "../packages/core/src/data/Types.js",
      requires: [144],
      uses: [],
      idx: 227,
    },
    {
      path: "../packages/core/src/data/Validation.js",
      requires: [154],
      uses: [],
      idx: 228,
    },
    {
      path: "../packages/core/src/dom/Helper.js",
      requires: [],
      uses: [80],
      idx: 229,
    },
    {
      path: "../packages/core/src/dom/Query.js",
      requires: [21, 229],
      uses: [22],
      idx: 230,
    },
    {
      path: "../packages/core/src/data/reader/Xml.js",
      requires: [156, 230],
      uses: [],
      idx: 231,
    },
    {
      path: "../packages/core/src/data/writer/Xml.js",
      requires: [157],
      uses: [],
      idx: 232,
    },
    {
      path: "../packages/core/src/data/XmlStore.js",
      requires: [164, 171, 231, 232],
      uses: [],
      idx: 233,
    },
    {
      path: "../packages/core/src/data/identifier/Negative.js",
      requires: [153],
      uses: [],
      idx: 234,
    },
    {
      path: "../packages/core/src/data/identifier/Uuid.js",
      requires: [152],
      uses: [],
      idx: 235,
    },
    {
      path: "../packages/core/src/data/proxy/WebStorage.js",
      requires: [153, 159],
      uses: [54, 80, 155],
      idx: 236,
    },
    {
      path: "../packages/core/src/data/proxy/LocalStorage.js",
      requires: [236],
      uses: [],
      idx: 237,
    },
    {
      path: "../packages/core/src/data/proxy/Rest.js",
      requires: [164],
      uses: [],
      idx: 238,
    },
    {
      path: "../packages/core/src/data/proxy/SessionStorage.js",
      requires: [236],
      uses: [],
      idx: 239,
    },
    {
      path: "../packages/core/src/data/validator/Bound.js",
      requires: [145],
      uses: [80],
      idx: 240,
    },
    {
      path: "../packages/core/src/data/validator/Format.js",
      requires: [145],
      uses: [],
      idx: 241,
    },
    {
      path: "../packages/core/src/data/validator/Email.js",
      requires: [241],
      uses: [],
      idx: 242,
    },
    {
      path: "../packages/core/src/data/validator/List.js",
      requires: [145],
      uses: [],
      idx: 243,
    },
    {
      path: "../packages/core/src/data/validator/Exclusion.js",
      requires: [243],
      uses: [],
      idx: 244,
    },
    {
      path: "../packages/core/src/data/validator/Inclusion.js",
      requires: [243],
      uses: [],
      idx: 245,
    },
    {
      path: "../packages/core/src/data/validator/Length.js",
      requires: [240],
      uses: [],
      idx: 246,
    },
    {
      path: "../packages/core/src/data/validator/Presence.js",
      requires: [145],
      uses: [],
      idx: 247,
    },
    {
      path: "../packages/core/src/data/validator/Range.js",
      requires: [240],
      uses: [],
      idx: 248,
    },
    {
      path: "../packages/core/src/direct/Event.js",
      requires: [],
      uses: [],
      idx: 249,
    },
    {
      path: "../packages/core/src/direct/RemotingEvent.js",
      requires: [249],
      uses: [209],
      idx: 250,
    },
    {
      path: "../packages/core/src/direct/ExceptionEvent.js",
      requires: [250],
      uses: [],
      idx: 251,
    },
    {
      path: "../packages/core/src/direct/JsonProvider.js",
      requires: [210],
      uses: [209, 251],
      idx: 252,
    },
    {
      path: "../packages/core/src/direct/PollingProvider.js",
      requires: [18, 57, 251, 252],
      uses: [209, 322],
      idx: 253,
    },
    {
      path: "../packages/core/src/direct/RemotingMethod.js",
      requires: [],
      uses: [],
      idx: 254,
    },
    {
      path: "../packages/core/src/direct/Transaction.js",
      requires: [],
      uses: [],
      idx: 255,
    },
    {
      path: "../packages/core/src/direct/RemotingProvider.js",
      requires: [1, 56, 209, 252, 254, 255],
      uses: [18, 78, 251],
      idx: 256,
    },
    {
      path: "../packages/core/src/dom/GarbageCollector.js",
      requires: [],
      uses: [50],
      idx: 257,
    },
    {
      path: "../packages/core/src/event/gesture/Recognizer.js",
      requires: [3, 37],
      uses: [],
      idx: 258,
    },
    {
      path: "../packages/core/src/event/gesture/SingleTouch.js",
      requires: [258],
      uses: [],
      idx: 259,
    },
    {
      path: "../packages/core/src/event/gesture/DoubleTap.js",
      requires: [259],
      uses: [],
      idx: 260,
    },
    {
      path: "../packages/core/src/event/gesture/Drag.js",
      requires: [259],
      uses: [],
      idx: 261,
    },
    {
      path: "../packages/core/src/event/gesture/Swipe.js",
      requires: [259],
      uses: [],
      idx: 262,
    },
    {
      path: "../packages/core/src/event/gesture/EdgeSwipe.js",
      requires: [262],
      uses: [50],
      idx: 263,
    },
    {
      path: "../packages/core/src/event/gesture/LongPress.js",
      requires: [259],
      uses: [],
      idx: 264,
    },
    {
      path: "../packages/core/src/event/gesture/MultiTouch.js",
      requires: [258],
      uses: [],
      idx: 265,
    },
    {
      path: "../packages/core/src/event/gesture/Pinch.js",
      requires: [265],
      uses: [],
      idx: 266,
    },
    {
      path: "../packages/core/src/event/gesture/Rotate.js",
      requires: [265],
      uses: [],
      idx: 267,
    },
    {
      path: "../packages/core/src/event/gesture/Tap.js",
      requires: [259],
      uses: [],
      idx: 268,
    },
    {
      path: "../packages/core/src/event/publisher/Focus.js",
      requires: [36, 50, 77],
      uses: [35],
      idx: 269,
    },
    {
      path: "../packages/core/src/fx/State.js",
      requires: [],
      uses: [],
      idx: 270,
    },
    {
      path: "../packages/core/src/fx/animation/Abstract.js",
      requires: [24, 270],
      uses: [],
      idx: 271,
    },
    {
      path: "../packages/core/src/fx/animation/Slide.js",
      requires: [271],
      uses: [],
      idx: 272,
    },
    {
      path: "../packages/core/src/fx/animation/SlideOut.js",
      requires: [272],
      uses: [],
      idx: 273,
    },
    {
      path: "../packages/core/src/fx/animation/Fade.js",
      requires: [271],
      uses: [],
      idx: 274,
    },
    {
      path: "../packages/core/src/fx/animation/FadeOut.js",
      requires: [274],
      uses: [],
      idx: 275,
    },
    {
      path: "../packages/core/src/fx/animation/Flip.js",
      requires: [271],
      uses: [],
      idx: 276,
    },
    {
      path: "../packages/core/src/fx/animation/Pop.js",
      requires: [271],
      uses: [],
      idx: 277,
    },
    {
      path: "../packages/core/src/fx/animation/PopOut.js",
      requires: [277],
      uses: [],
      idx: 278,
    },
    {
      path: "../packages/core/src/fx/Animation.js",
      requires: [272, 273, 274, 275, 276, 277, 278],
      uses: [271],
      idx: 279,
    },
    {
      path: "../packages/core/src/fx/runner/Css.js",
      requires: [24, 279],
      uses: [],
      idx: 280,
    },
    {
      path: "../packages/core/src/fx/runner/CssTransition.js",
      requires: [19, 280],
      uses: [279],
      idx: 281,
    },
    {
      path: "../packages/core/src/fx/Runner.js",
      requires: [281],
      uses: [],
      idx: 282,
    },
    {
      path: "../packages/core/src/fx/animation/Cube.js",
      requires: [271],
      uses: [],
      idx: 283,
    },
    {
      path: "../packages/core/src/fx/animation/Wipe.js",
      requires: [279],
      uses: [],
      idx: 284,
    },
    {
      path: "../packages/core/src/fx/animation/WipeOut.js",
      requires: [284],
      uses: [],
      idx: 285,
    },
    {
      path: "../packages/core/src/fx/easing/EaseIn.js",
      requires: [97],
      uses: [],
      idx: 286,
    },
    {
      path: "../packages/core/src/fx/easing/Easing.js",
      requires: [97],
      uses: [],
      idx: 287,
    },
    {
      path: "../packages/core/src/fx/layout/card/Abstract.js",
      requires: [24],
      uses: [],
      idx: 288,
    },
    {
      path: "../packages/core/src/fx/layout/card/Style.js",
      requires: [279, 288],
      uses: [281],
      idx: 289,
    },
    {
      path: "../packages/core/src/fx/layout/card/Slide.js",
      requires: [289],
      uses: [],
      idx: 290,
    },
    {
      path: "../packages/core/src/fx/layout/card/Cover.js",
      requires: [289],
      uses: [],
      idx: 291,
    },
    {
      path: "../packages/core/src/fx/layout/card/Reveal.js",
      requires: [289],
      uses: [],
      idx: 292,
    },
    {
      path: "../packages/core/src/fx/layout/card/Fade.js",
      requires: [289],
      uses: [],
      idx: 293,
    },
    {
      path: "../packages/core/src/fx/layout/card/Flip.js",
      requires: [289],
      uses: [],
      idx: 294,
    },
    {
      path: "../packages/core/src/fx/layout/card/Pop.js",
      requires: [289],
      uses: [],
      idx: 295,
    },
    {
      path: "../packages/core/src/fx/layout/card/Scroll.js",
      requires: [97, 288],
      uses: [19],
      idx: 296,
    },
    {
      path: "../packages/core/src/fx/layout/Card.js",
      requires: [290, 291, 292, 293, 294, 295, 296],
      uses: [288],
      idx: 297,
    },
    {
      path: "../packages/core/src/fx/layout/card/Cube.js",
      requires: [289],
      uses: [],
      idx: 298,
    },
    {
      path: "../packages/core/src/fx/layout/card/ScrollCover.js",
      requires: [296],
      uses: [],
      idx: 299,
    },
    {
      path: "../packages/core/src/fx/layout/card/ScrollReveal.js",
      requires: [296],
      uses: [],
      idx: 300,
    },
    {
      path: "../packages/core/src/fx/runner/CssAnimation.js",
      requires: [280],
      uses: [279],
      idx: 301,
    },
    {
      path: "../packages/core/src/list/AbstractTreeItem.js",
      requires: [84],
      uses: [],
      idx: 302,
    },
    {
      path: "../packages/core/src/list/RootTreeItem.js",
      requires: [302],
      uses: [],
      idx: 303,
    },
    {
      path: "../packages/core/src/list/TreeItem.js",
      requires: [302],
      uses: [],
      idx: 304,
    },
    {
      path: "../packages/core/src/list/Tree.js",
      requires: [84, 194, 303, 304],
      uses: [174],
      idx: 305,
    },
    {
      path: "../packages/core/src/mixin/Container.js",
      requires: [0],
      uses: [20],
      idx: 306,
    },
    {
      path: "../packages/core/src/mixin/Hookable.js",
      requires: [0],
      uses: [],
      idx: 307,
    },
    {
      path: "../packages/core/src/mixin/Mashup.js",
      requires: [0],
      uses: [],
      idx: 308,
    },
    {
      path: "../packages/core/src/mixin/Responsive.js",
      requires: [0, 77],
      uses: [50],
      idx: 309,
    },
    {
      path: "../packages/core/src/mixin/Selectable.js",
      requires: [0],
      uses: [56],
      idx: 310,
    },
    {
      path: "../packages/core/src/mixin/Traversable.js",
      requires: [0],
      uses: [],
      idx: 311,
    },
    {
      path: "../packages/core/src/perf/Accumulator.js",
      requires: [87],
      uses: [],
      idx: 312,
    },
    {
      path: "../packages/core/src/perf/Monitor.js",
      requires: [312],
      uses: [],
      idx: 313,
    },
    {
      path: "../packages/core/src/plugin/Abstract.js",
      requires: [],
      uses: [],
      idx: 314,
    },
    {
      path: "../packages/core/src/plugin/LazyItems.js",
      requires: [314],
      uses: [],
      idx: 315,
    },
    {
      path: "../packages/core/src/util/Base64.js",
      requires: [],
      uses: [],
      idx: 316,
    },
    {
      path: "../packages/core/src/util/DelimitedValue.js",
      requires: [],
      uses: [],
      idx: 317,
    },
    {
      path: "../packages/core/src/util/CSV.js",
      requires: [317],
      uses: [],
      idx: 318,
    },
    {
      path: "../packages/core/src/util/ItemCollection.js",
      requires: [56],
      uses: [],
      idx: 319,
    },
    {
      path: "../packages/core/src/util/LocalStorage.js",
      requires: [],
      uses: [],
      idx: 320,
    },
    {
      path: "../packages/core/src/util/TSV.js",
      requires: [317],
      uses: [],
      idx: 321,
    },
    {
      path: "../packages/core/src/util/TaskManager.js",
      requires: [57],
      uses: [],
      idx: 322,
    },
    {
      path: "../packages/core/src/util/TextMetrics.js",
      requires: [50],
      uses: [],
      idx: 323,
    },
    {
      path: "../packages/core/src/util/paintmonitor/OverflowChange.js",
      requires: [46],
      uses: [],
      idx: 324,
    },
    {
      path: "../classic/classic/src/Action.js",
      requires: [],
      uses: [],
      idx: 325,
    },
    {
      path: "../classic/classic/src/ElementLoader.js",
      requires: [52],
      uses: [17, 18],
      idx: 326,
    },
    {
      path: "../classic/classic/src/ComponentLoader.js",
      requires: [326],
      uses: [],
      idx: 327,
    },
    {
      path: "../classic/classic/src/layout/SizeModel.js",
      requires: [],
      uses: [],
      idx: 328,
    },
    {
      path: "../classic/classic/src/layout/Layout.js",
      requires: [12, 87, 328],
      uses: [554],
      idx: 329,
    },
    {
      path: "../classic/classic/src/layout/container/Container.js",
      requires: [87, 110, 329],
      uses: [229],
      idx: 330,
    },
    {
      path: "../classic/classic/src/layout/container/Auto.js",
      requires: [330],
      uses: [87],
      idx: 331,
    },
    {
      path: "../classic/classic/src/ZIndexManager.js",
      requires: [77, 168, 169],
      uses: [50, 126],
      idx: 332,
    },
    {
      path: "../classic/classic/src/container/Container.js",
      requires: [56, 118, 222, 306, 331, 332],
      uses: [12, 20, 23, 319],
      idx: 333,
    },
    {
      path: "../classic/classic/src/layout/container/Editor.js",
      requires: [330],
      uses: [],
      idx: 334,
    },
    {
      path: "../classic/classic/src/Editor.js",
      requires: [333, 334],
      uses: [1, 20],
      idx: 335,
    },
    {
      path: "../classic/classic/src/EventManager.js",
      requires: [],
      uses: [77],
      idx: 336,
    },
    {
      path: "../classic/classic/src/Img.js",
      requires: [118],
      uses: [],
      idx: 337,
    },
    {
      path: "../classic/classic/src/util/StoreHolder.js",
      requires: [174],
      uses: [],
      idx: 338,
    },
    {
      path: "../classic/classic/src/LoadMask.js",
      requires: [118, 338],
      uses: [77, 174],
      idx: 339,
    },
    {
      path: "../classic/classic/src/layout/component/Component.js",
      requires: [329],
      uses: [],
      idx: 340,
    },
    {
      path: "../classic/classic/src/layout/component/Auto.js",
      requires: [340],
      uses: [],
      idx: 341,
    },
    {
      path: "../classic/classic/src/layout/component/ProgressBar.js",
      requires: [341],
      uses: [],
      idx: 342,
    },
    {
      path: "../classic/classic/src/ProgressBar.js",
      requires: [80, 91, 118, 322, 342],
      uses: [73, 87],
      idx: 343,
    },
    {
      path: "../classic/classic/src/ProgressBarWidget.js",
      requires: [84, 343],
      uses: [87],
      idx: 344,
    },
    {
      path: "../classic/classic/src/dom/ButtonElement.js",
      requires: [50],
      uses: [],
      idx: 345,
    },
    {
      path: "../classic/classic/src/button/Manager.js",
      requires: [],
      uses: [],
      idx: 346,
    },
    {
      path: "../classic/classic/src/menu/Manager.js",
      requires: [],
      uses: [20, 118, 519],
      idx: 347,
    },
    {
      path: "../classic/classic/src/util/ClickRepeater.js",
      requires: [52],
      uses: [],
      idx: 348,
    },
    {
      path: "../classic/classic/src/button/Button.js",
      requires: [117, 118, 222, 323, 345, 346, 347, 348],
      uses: [467],
      idx: 349,
    },
    {
      path: "../classic/classic/src/button/Split.js",
      requires: [349],
      uses: [50, 118],
      idx: 350,
    },
    {
      path: "../classic/classic/src/button/Cycle.js",
      requires: [350],
      uses: [],
      idx: 351,
    },
    {
      path: "../classic/classic/src/layout/container/SegmentedButton.js",
      requires: [330],
      uses: [],
      idx: 352,
    },
    {
      path: "../classic/classic/src/button/Segmented.js",
      requires: [333, 349, 352],
      uses: [],
      idx: 353,
    },
    {
      path: "../classic/classic/src/panel/Bar.js",
      requires: [333],
      uses: [],
      idx: 354,
    },
    {
      path: "../classic/classic/src/panel/Title.js",
      requires: [118],
      uses: [],
      idx: 355,
    },
    {
      path: "../classic/classic/src/panel/Tool.js",
      requires: [118],
      uses: [467],
      idx: 356,
    },
    {
      path: "../classic/classic/src/util/KeyMap.js",
      requires: [],
      uses: [],
      idx: 357,
    },
    {
      path: "../classic/classic/src/util/KeyNav.js",
      requires: [357],
      uses: [],
      idx: 358,
    },
    {
      path: "../classic/classic/src/util/FocusableContainer.js",
      requires: [0, 358],
      uses: [118],
      idx: 359,
    },
    {
      path: "../classic/classic/src/panel/Header.js",
      requires: [194, 341, 354, 355, 356, 359],
      uses: [20, 118],
      idx: 360,
    },
    {
      path: "../classic/classic/src/layout/container/boxOverflow/None.js",
      requires: [12],
      uses: [],
      idx: 361,
    },
    {
      path: "../classic/classic/src/layout/container/boxOverflow/Scroller.js",
      requires: [4, 50, 348, 361],
      uses: [],
      idx: 362,
    },
    {
      path: "../classic/classic/src/dd/DragDropManager.js",
      requires: [33],
      uses: [395, 467],
      idx: 363,
    },
    {
      path: "../classic/classic/src/resizer/Splitter.js",
      requires: [87, 118],
      uses: [391],
      idx: 364,
    },
    {
      path: "../classic/classic/src/layout/container/Box.js",
      requires: [79, 330, 361, 362, 363, 364],
      uses: [12, 194, 328, 341],
      idx: 365,
    },
    {
      path: "../classic/classic/src/layout/container/HBox.js",
      requires: [365],
      uses: [],
      idx: 366,
    },
    {
      path: "../classic/classic/src/layout/container/VBox.js",
      requires: [365],
      uses: [],
      idx: 367,
    },
    {
      path: "../classic/classic/src/toolbar/Toolbar.js",
      requires: [194, 333, 341, 359, 366, 367],
      uses: [449, 470, 602],
      idx: 368,
    },
    {
      path: "../classic/classic/src/dd/DragDrop.js",
      requires: [363],
      uses: [50],
      idx: 369,
    },
    {
      path: "../classic/classic/src/dd/DD.js",
      requires: [363, 369],
      uses: [50],
      idx: 370,
    },
    {
      path: "../classic/classic/src/dd/DDProxy.js",
      requires: [370],
      uses: [363],
      idx: 371,
    },
    {
      path: "../classic/classic/src/dd/StatusProxy.js",
      requires: [118],
      uses: [],
      idx: 372,
    },
    {
      path: "../classic/classic/src/dd/DragSource.js",
      requires: [363, 371, 372],
      uses: [194, 341],
      idx: 373,
    },
    {
      path: "../classic/classic/src/panel/Proxy.js",
      requires: [],
      uses: [50],
      idx: 374,
    },
    {
      path: "../classic/classic/src/panel/DD.js",
      requires: [373, 374],
      uses: [],
      idx: 375,
    },
    {
      path: "../classic/classic/src/layout/component/Dock.js",
      requires: [340],
      uses: [23, 50, 328],
      idx: 376,
    },
    {
      path: "../classic/classic/src/util/Memento.js",
      requires: [],
      uses: [],
      idx: 377,
    },
    {
      path: "../classic/classic/src/container/DockingContainer.js",
      requires: [50, 56],
      uses: [23, 229, 319],
      idx: 378,
    },
    {
      path: "../classic/classic/src/panel/Panel.js",
      requires: [50, 56, 73, 87, 333, 357, 360, 368, 375, 376, 377, 378],
      uses: [1, 20, 90, 91, 118, 194, 229, 331, 341, 356, 358, 411, 471],
      idx: 379,
    },
    {
      path: "../classic/classic/src/layout/container/Table.js",
      requires: [330],
      uses: [],
      idx: 380,
    },
    {
      path: "../classic/classic/src/container/ButtonGroup.js",
      requires: [359, 379, 380],
      uses: [],
      idx: 381,
    },
    {
      path: "../classic/classic/src/container/Monitor.js",
      requires: [],
      uses: [56],
      idx: 382,
    },
    {
      path: "../classic/classic/src/plugin/Responsive.js",
      requires: [309],
      uses: [],
      idx: 383,
    },
    {
      path: "../classic/classic/src/plugin/Viewport.js",
      requires: [383],
      uses: [50, 118, 328],
      idx: 384,
    },
    {
      path: "../classic/classic/src/container/Viewport.js",
      requires: [309, 333, 384],
      uses: [],
      idx: 385,
    },
    {
      path: "../classic/classic/src/layout/container/Anchor.js",
      requires: [331],
      uses: [],
      idx: 386,
    },
    {
      path: "../classic/classic/src/dashboard/Panel.js",
      requires: [379],
      uses: [20],
      idx: 387,
    },
    {
      path: "../classic/classic/src/dashboard/Column.js",
      requires: [333, 386, 387],
      uses: [],
      idx: 388,
    },
    {
      path: "../classic/classic/src/layout/container/Column.js",
      requires: [331],
      uses: [],
      idx: 389,
    },
    {
      path: "../classic/classic/src/dd/DragTracker.js",
      requires: [52],
      uses: [33, 358],
      idx: 390,
    },
    {
      path: "../classic/classic/src/resizer/SplitterTracker.js",
      requires: [33, 390],
      uses: [50, 97],
      idx: 391,
    },
    {
      path: "../classic/classic/src/layout/container/ColumnSplitterTracker.js",
      requires: [391],
      uses: [],
      idx: 392,
    },
    {
      path: "../classic/classic/src/layout/container/ColumnSplitter.js",
      requires: [364, 392],
      uses: [],
      idx: 393,
    },
    {
      path: "../classic/classic/src/layout/container/Dashboard.js",
      requires: [389, 393],
      uses: [194, 341],
      idx: 394,
    },
    {
      path: "../classic/classic/src/dd/DDTarget.js",
      requires: [369],
      uses: [],
      idx: 395,
    },
    {
      path: "../classic/classic/src/dd/ScrollManager.js",
      requires: [363],
      uses: [],
      idx: 396,
    },
    {
      path: "../classic/classic/src/dd/DropTarget.js",
      requires: [395, 396],
      uses: [],
      idx: 397,
    },
    {
      path: "../classic/classic/src/dashboard/DropZone.js",
      requires: [397],
      uses: [],
      idx: 398,
    },
    {
      path: "../classic/classic/src/dashboard/Part.js",
      requires: [3, 12, 127],
      uses: [],
      idx: 399,
    },
    {
      path: "../classic/classic/src/dashboard/Dashboard.js",
      requires: [379, 388, 394, 398, 399],
      uses: [12, 113, 126],
      idx: 400,
    },
    {
      path: "../classic/classic/src/dd/DragZone.js",
      requires: [373],
      uses: [396, 402],
      idx: 401,
    },
    {
      path: "../classic/classic/src/dd/Registry.js",
      requires: [],
      uses: [],
      idx: 402,
    },
    {
      path: "../classic/classic/src/dd/DropZone.js",
      requires: [397, 402],
      uses: [363],
      idx: 403,
    },
    {
      path: "../classic/classic/src/dom/Layer.js",
      requires: [50],
      uses: [229],
      idx: 404,
    },
    {
      path: "../classic/classic/src/enums.js",
      requires: [],
      uses: [],
      idx: 405,
    },
    {
      path: "../classic/classic/src/event/publisher/MouseEnterLeave.js",
      requires: [36],
      uses: [],
      idx: 406,
    },
    {
      path: "../classic/classic/src/flash/Component.js",
      requires: [118],
      uses: [],
      idx: 407,
    },
    {
      path: "../classic/classic/src/form/action/Action.js",
      requires: [],
      uses: [],
      idx: 408,
    },
    {
      path: "../classic/classic/src/form/action/Load.js",
      requires: [17, 408],
      uses: [18],
      idx: 409,
    },
    {
      path: "../classic/classic/src/form/action/Submit.js",
      requires: [408],
      uses: [18, 229],
      idx: 410,
    },
    {
      path: "../classic/classic/src/util/ComponentDragger.js",
      requires: [390],
      uses: [33, 50],
      idx: 411,
    },
    {
      path: "../classic/classic/src/util/FocusTrap.js",
      requires: [0],
      uses: [],
      idx: 412,
    },
    {
      path: "../classic/classic/src/window/Window.js",
      requires: [33, 379, 411, 412],
      uses: [],
      idx: 413,
    },
    {
      path: "../classic/classic/src/form/Labelable.js",
      requires: [0, 87],
      uses: [50, 466],
      idx: 414,
    },
    {
      path: "../classic/classic/src/form/field/Field.js",
      requires: [],
      uses: [],
      idx: 415,
    },
    {
      path: "../classic/classic/src/form/field/Base.js",
      requires: [1, 87, 118, 414, 415],
      uses: [229],
      idx: 416,
    },
    {
      path: "../classic/classic/src/form/field/VTypes.js",
      requires: [],
      uses: [],
      idx: 417,
    },
    {
      path: "../classic/classic/src/form/trigger/Trigger.js",
      requires: [12, 348],
      uses: [50, 87],
      idx: 418,
    },
    {
      path: "../classic/classic/src/form/field/Text.js",
      requires: [323, 416, 417, 418],
      uses: [79, 80, 91],
      idx: 419,
    },
    {
      path: "../classic/classic/src/form/field/TextArea.js",
      requires: [1, 87, 419],
      uses: [79, 323],
      idx: 420,
    },
    {
      path: "../classic/classic/src/window/MessageBox.js",
      requires: [343, 349, 366, 368, 386, 413, 419, 420],
      uses: [118, 194, 333, 341, 342, 471],
      idx: 421,
    },
    {
      path: "../classic/classic/src/form/Basic.js",
      requires: [1, 52, 56, 138, 409, 410, 421],
      uses: [382],
      idx: 422,
    },
    {
      path: "../classic/classic/src/form/FieldAncestor.js",
      requires: [0, 382],
      uses: [],
      idx: 423,
    },
    {
      path: "../classic/classic/src/layout/component/field/FieldContainer.js",
      requires: [341],
      uses: [],
      idx: 424,
    },
    {
      path: "../classic/classic/src/form/FieldContainer.js",
      requires: [333, 414, 423, 424],
      uses: [],
      idx: 425,
    },
    {
      path: "../classic/classic/src/layout/container/CheckboxGroup.js",
      requires: [330],
      uses: [229],
      idx: 426,
    },
    {
      path: "../classic/classic/src/form/CheckboxManager.js",
      requires: [56],
      uses: [],
      idx: 427,
    },
    {
      path: "../classic/classic/src/form/field/Checkbox.js",
      requires: [87, 416, 427],
      uses: [],
      idx: 428,
    },
    {
      path: "../classic/classic/src/form/CheckboxGroup.js",
      requires: [415, 416, 425, 426, 428],
      uses: [],
      idx: 429,
    },
    {
      path: "../classic/classic/src/form/FieldSet.js",
      requires: [333, 423],
      uses: [50, 90, 118, 194, 229, 341, 356, 386, 428, 557],
      idx: 430,
    },
    {
      path: "../classic/classic/src/form/Label.js",
      requires: [79, 118],
      uses: [],
      idx: 431,
    },
    {
      path: "../classic/classic/src/form/Panel.js",
      requires: [57, 379, 422, 423],
      uses: [],
      idx: 432,
    },
    {
      path: "../classic/classic/src/form/RadioManager.js",
      requires: [56],
      uses: [],
      idx: 433,
    },
    {
      path: "../classic/classic/src/form/field/Radio.js",
      requires: [428, 433],
      uses: [],
      idx: 434,
    },
    {
      path: "../classic/classic/src/form/RadioGroup.js",
      requires: [359, 429, 434],
      uses: [433],
      idx: 435,
    },
    {
      path: "../classic/classic/src/form/action/DirectAction.js",
      requires: [0],
      uses: [209],
      idx: 436,
    },
    {
      path: "../classic/classic/src/form/action/DirectLoad.js",
      requires: [209, 409, 436],
      uses: [],
      idx: 437,
    },
    {
      path: "../classic/classic/src/form/action/DirectSubmit.js",
      requires: [209, 410, 436],
      uses: [],
      idx: 438,
    },
    {
      path: "../classic/classic/src/form/action/StandardSubmit.js",
      requires: [410],
      uses: [],
      idx: 439,
    },
    {
      path: "../classic/classic/src/form/field/Picker.js",
      requires: [358, 419],
      uses: [],
      idx: 440,
    },
    {
      path: "../classic/classic/src/selection/Model.js",
      requires: [4, 12, 338],
      uses: [126],
      idx: 441,
    },
    {
      path: "../classic/classic/src/selection/DataViewModel.js",
      requires: [358, 441],
      uses: [],
      idx: 442,
    },
    {
      path: "../classic/classic/src/view/NavigationModel.js",
      requires: [12, 52, 338],
      uses: [50, 358],
      idx: 443,
    },
    {
      path: "../classic/classic/src/view/AbstractView.js",
      requires: [76, 118, 338, 339, 442, 443],
      uses: [12, 19, 80, 87, 174, 229, 322],
      idx: 444,
    },
    {
      path: "../classic/classic/src/view/View.js",
      requires: [444],
      uses: [],
      idx: 445,
    },
    {
      path: "../classic/classic/src/view/BoundListKeyNav.js",
      requires: [443],
      uses: [35, 358],
      idx: 446,
    },
    {
      path: "../classic/classic/src/layout/component/BoundList.js",
      requires: [341],
      uses: [],
      idx: 447,
    },
    {
      path: "../classic/classic/src/toolbar/Item.js",
      requires: [118, 368],
      uses: [],
      idx: 448,
    },
    {
      path: "../classic/classic/src/toolbar/TextItem.js",
      requires: [87, 368, 448],
      uses: [],
      idx: 449,
    },
    {
      path: "../classic/classic/src/form/trigger/Spinner.js",
      requires: [418],
      uses: [],
      idx: 450,
    },
    {
      path: "../classic/classic/src/form/field/Spinner.js",
      requires: [358, 419, 450],
      uses: [],
      idx: 451,
    },
    {
      path: "../classic/classic/src/form/field/Number.js",
      requires: [451],
      uses: [79, 80],
      idx: 452,
    },
    {
      path: "../classic/classic/src/toolbar/Paging.js",
      requires: [338, 368, 449, 452],
      uses: [80, 194, 341, 450],
      idx: 453,
    },
    {
      path: "../classic/classic/src/view/BoundList.js",
      requires: [50, 222, 445, 446, 447, 453],
      uses: [87, 194, 341, 471],
      idx: 454,
    },
    {
      path: "../classic/classic/src/form/field/ComboBox.js",
      requires: [1, 174, 338, 440, 454],
      uses: [35, 50, 51, 87, 126, 154, 169, 194, 229, 442, 446, 447],
      idx: 455,
    },
    {
      path: "../classic/classic/src/picker/Month.js",
      requires: [87, 118, 348, 349],
      uses: [194, 341],
      idx: 456,
    },
    {
      path: "../classic/classic/src/picker/Date.js",
      requires: [67, 87, 118, 348, 349, 350, 358, 456],
      uses: [80, 194, 229, 341],
      idx: 457,
    },
    {
      path: "../classic/classic/src/form/field/Date.js",
      requires: [440, 457],
      uses: [80, 194, 341],
      idx: 458,
    },
    {
      path: "../classic/classic/src/form/field/Display.js",
      requires: [79, 87, 416],
      uses: [],
      idx: 459,
    },
    {
      path: "../classic/classic/src/form/field/FileButton.js",
      requires: [349],
      uses: [118],
      idx: 460,
    },
    {
      path: "../classic/classic/src/form/trigger/Component.js",
      requires: [418],
      uses: [],
      idx: 461,
    },
    {
      path: "../classic/classic/src/form/field/File.js",
      requires: [419, 460, 461],
      uses: [194, 341],
      idx: 462,
    },
    {
      path: "../classic/classic/src/form/field/Hidden.js",
      requires: [416],
      uses: [],
      idx: 463,
    },
    {
      path: "../classic/classic/src/tip/Tip.js",
      requires: [379],
      uses: [118],
      idx: 464,
    },
    {
      path: "../classic/classic/src/tip/ToolTip.js",
      requires: [464],
      uses: [50],
      idx: 465,
    },
    {
      path: "../classic/classic/src/tip/QuickTip.js",
      requires: [465],
      uses: [],
      idx: 466,
    },
    {
      path: "../classic/classic/src/tip/QuickTipManager.js",
      requires: [466],
      uses: [],
      idx: 467,
    },
    {
      path: "../classic/classic/src/picker/Color.js",
      requires: [87, 118],
      uses: [],
      idx: 468,
    },
    {
      path: "../classic/classic/src/layout/component/field/HtmlEditor.js",
      requires: [424],
      uses: [],
      idx: 469,
    },
    {
      path: "../classic/classic/src/toolbar/Separator.js",
      requires: [368, 448],
      uses: [],
      idx: 470,
    },
    {
      path: "../classic/classic/src/layout/container/boxOverflow/Menu.js",
      requires: [349, 361, 470],
      uses: [194, 341, 362, 367, 376, 519, 602],
      idx: 471,
    },
    {
      path: "../classic/classic/src/form/field/HtmlEditor.js",
      requires: [79, 322, 367, 368, 415, 425, 448, 467, 468, 469, 471],
      uses: [1, 80, 118, 194, 229, 341, 362, 376, 519],
      idx: 472,
    },
    {
      path: "../classic/classic/src/form/field/Tag.js",
      requires: [171, 206, 441, 455],
      uses: [51, 87],
      idx: 473,
    },
    {
      path: "../classic/classic/src/picker/Time.js",
      requires: [171, 454],
      uses: [51],
      idx: 474,
    },
    {
      path: "../classic/classic/src/form/field/Time.js",
      requires: [446, 455, 458, 474],
      uses: [80, 87, 194, 442, 447],
      idx: 475,
    },
    {
      path: "../classic/classic/src/form/field/Trigger.js",
      requires: [229, 348, 419],
      uses: [],
      idx: 476,
    },
    {
      path: "../classic/classic/src/grid/CellContext.js",
      requires: [],
      uses: [],
      idx: 477,
    },
    {
      path: "../classic/classic/src/grid/CellEditor.js",
      requires: [335],
      uses: [],
      idx: 478,
    },
    {
      path: "../classic/classic/src/grid/ColumnComponentLayout.js",
      requires: [341],
      uses: [],
      idx: 479,
    },
    {
      path: "../classic/classic/src/layout/container/Fit.js",
      requires: [330],
      uses: [],
      idx: 480,
    },
    {
      path: "../classic/classic/src/panel/Table.js",
      requires: [379, 480],
      uses: [1, 174, 229, 484, 499, 531, 532, 573, 574, 575],
      idx: 481,
    },
    {
      path: "../classic/classic/src/grid/ColumnLayout.js",
      requires: [366, 481],
      uses: [],
      idx: 482,
    },
    {
      path: "../classic/classic/src/grid/ColumnManager.js",
      requires: [],
      uses: [],
      idx: 483,
    },
    {
      path: "../classic/classic/src/grid/NavigationModel.js",
      requires: [443],
      uses: [20, 35, 50, 75, 118, 358, 477],
      idx: 484,
    },
    {
      path: "../classic/classic/src/view/TableLayout.js",
      requires: [341],
      uses: [],
      idx: 485,
    },
    {
      path: "../classic/classic/src/grid/locking/RowSynchronizer.js",
      requires: [],
      uses: [],
      idx: 486,
    },
    {
      path: "../classic/classic/src/view/NodeCache.js",
      requires: [76],
      uses: [50, 75],
      idx: 487,
    },
    {
      path: "../classic/classic/src/view/Table.js",
      requires: [1, 56, 445, 477, 485, 486, 487],
      uses: [12, 50, 75, 87, 118, 154, 499],
      idx: 488,
    },
    {
      path: "../classic/classic/src/grid/Panel.js",
      requires: [481, 488],
      uses: [],
      idx: 489,
    },
    {
      path: "../classic/classic/src/grid/RowEditorButtons.js",
      requires: [333],
      uses: [194, 341, 349, 379],
      idx: 490,
    },
    {
      path: "../classic/classic/src/grid/RowEditor.js",
      requires: [358, 432, 465, 490],
      uses: [77, 194, 331, 333, 341, 376, 459, 477],
      idx: 491,
    },
    {
      path: "../classic/classic/src/grid/Scroller.js",
      requires: [],
      uses: [],
      idx: 492,
    },
    {
      path: "../classic/classic/src/view/DropZone.js",
      requires: [403],
      uses: [118, 194, 341],
      idx: 493,
    },
    {
      path: "../classic/classic/src/grid/ViewDropZone.js",
      requires: [493],
      uses: [],
      idx: 494,
    },
    {
      path: "../classic/classic/src/grid/plugin/HeaderResizer.js",
      requires: [33, 314, 390],
      uses: [500],
      idx: 495,
    },
    {
      path: "../classic/classic/src/grid/header/DragZone.js",
      requires: [401],
      uses: [],
      idx: 496,
    },
    {
      path: "../classic/classic/src/grid/header/DropZone.js",
      requires: [403],
      uses: [363],
      idx: 497,
    },
    {
      path: "../classic/classic/src/grid/plugin/HeaderReorderer.js",
      requires: [314, 496, 497],
      uses: [],
      idx: 498,
    },
    {
      path: "../classic/classic/src/grid/header/Container.js",
      requires: [333, 358, 359, 482, 495, 498],
      uses: [1, 118, 194, 341, 362, 367, 376, 483, 500, 517, 518, 519],
      idx: 499,
    },
    {
      path: "../classic/classic/src/grid/column/Column.js",
      requires: [204, 479, 482, 499],
      uses: [79, 495],
      idx: 500,
    },
    {
      path: "../classic/classic/src/grid/column/Action.js",
      requires: [500],
      uses: [50],
      idx: 501,
    },
    {
      path: "../classic/classic/src/grid/column/Boolean.js",
      requires: [500],
      uses: [],
      idx: 502,
    },
    {
      path: "../classic/classic/src/grid/column/Check.js",
      requires: [500],
      uses: [],
      idx: 503,
    },
    {
      path: "../classic/classic/src/grid/column/Date.js",
      requires: [500],
      uses: [79],
      idx: 504,
    },
    {
      path: "../classic/classic/src/grid/column/Number.js",
      requires: [79, 500],
      uses: [],
      idx: 505,
    },
    {
      path: "../classic/classic/src/grid/column/RowNumberer.js",
      requires: [500],
      uses: [],
      idx: 506,
    },
    {
      path: "../classic/classic/src/grid/column/Template.js",
      requires: [87, 500],
      uses: [503],
      idx: 507,
    },
    {
      path: "../classic/classic/src/grid/column/Widget.js",
      requires: [500],
      uses: [],
      idx: 508,
    },
    {
      path: "../classic/classic/src/grid/feature/Feature.js",
      requires: [52],
      uses: [],
      idx: 509,
    },
    {
      path: "../classic/classic/src/grid/feature/AbstractSummary.js",
      requires: [509],
      uses: [],
      idx: 510,
    },
    {
      path: "../classic/classic/src/grid/feature/GroupStore.js",
      requires: [52],
      uses: [126],
      idx: 511,
    },
    {
      path: "../classic/classic/src/grid/feature/Grouping.js",
      requires: [509, 510, 511],
      uses: [87, 154, 499],
      idx: 512,
    },
    {
      path: "../classic/classic/src/grid/feature/GroupingSummary.js",
      requires: [512],
      uses: [],
      idx: 513,
    },
    {
      path: "../classic/classic/src/grid/feature/RowBody.js",
      requires: [509],
      uses: [87],
      idx: 514,
    },
    {
      path: "../classic/classic/src/grid/feature/Summary.js",
      requires: [510],
      uses: [87, 118, 154, 194, 341],
      idx: 515,
    },
    {
      path: "../classic/classic/src/menu/Item.js",
      requires: [118, 222],
      uses: [347, 467],
      idx: 516,
    },
    {
      path: "../classic/classic/src/menu/CheckItem.js",
      requires: [516],
      uses: [347],
      idx: 517,
    },
    {
      path: "../classic/classic/src/menu/Separator.js",
      requires: [516],
      uses: [],
      idx: 518,
    },
    {
      path: "../classic/classic/src/menu/Menu.js",
      requires: [347, 359, 367, 379, 516, 517, 518],
      uses: [20, 50, 194, 341],
      idx: 519,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/Base.js",
      requires: [12, 194, 362, 367, 376, 519],
      uses: [1, 51],
      idx: 520,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/SingleFilter.js",
      requires: [520],
      uses: [],
      idx: 521,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/Boolean.js",
      requires: [521],
      uses: [],
      idx: 522,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/TriFilter.js",
      requires: [520],
      uses: [],
      idx: 523,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/Date.js",
      requires: [194, 341, 517, 523],
      uses: [457, 519],
      idx: 524,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/List.js",
      requires: [521],
      uses: [171, 174],
      idx: 525,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/Number.js",
      requires: [194, 341, 450, 523],
      uses: [452],
      idx: 526,
    },
    {
      path: "../classic/classic/src/grid/filters/filter/String.js",
      requires: [194, 341, 419, 521],
      uses: [],
      idx: 527,
    },
    {
      path: "../classic/classic/src/grid/filters/Filters.js",
      requires: [314, 338, 520, 521, 522, 523, 524, 525, 526, 527],
      uses: [12],
      idx: 528,
    },
    {
      path: "../classic/classic/src/grid/locking/HeaderContainer.js",
      requires: [483, 499],
      uses: [],
      idx: 529,
    },
    {
      path: "../classic/classic/src/grid/locking/View.js",
      requires: [52, 115, 118, 338, 444, 488],
      uses: [339, 477],
      idx: 530,
    },
    {
      path: "../classic/classic/src/grid/locking/Lockable.js",
      requires: [118, 488, 499, 529, 530],
      uses: [1, 174, 194, 331, 341, 364, 365],
      idx: 531,
    },
    {
      path: "../classic/classic/src/grid/plugin/BufferedRenderer.js",
      requires: [314],
      uses: [1, 50, 486],
      idx: 532,
    },
    {
      path: "../classic/classic/src/grid/plugin/Editing.js",
      requires: [4, 314, 358, 416, 488, 500],
      uses: [20, 194, 341, 477],
      idx: 533,
    },
    {
      path: "../classic/classic/src/grid/plugin/CellEditing.js",
      requires: [1, 478, 533],
      uses: [56, 194, 334, 341, 477],
      idx: 534,
    },
    {
      path: "../classic/classic/src/plugin/AbstractClipboard.js",
      requires: [314, 357],
      uses: [50],
      idx: 535,
    },
    {
      path: "../classic/classic/src/grid/plugin/Clipboard.js",
      requires: [79, 321, 535],
      uses: [477],
      idx: 536,
    },
    {
      path: "../classic/classic/src/grid/plugin/DragDrop.js",
      requires: [314],
      uses: [494, 608],
      idx: 537,
    },
    {
      path: "../classic/classic/src/grid/plugin/RowEditing.js",
      requires: [491, 533],
      uses: [],
      idx: 538,
    },
    {
      path: "../classic/classic/src/grid/plugin/RowExpander.js",
      requires: [314, 514],
      uses: [87, 500],
      idx: 539,
    },
    {
      path: "../classic/classic/src/grid/property/Grid.js",
      requires: [489],
      uses: [
        20, 87, 154, 194, 334, 341, 416, 419, 450, 452, 455, 458, 478, 488, 534,
        541, 544,
      ],
      idx: 540,
    },
    {
      path: "../classic/classic/src/grid/property/HeaderContainer.js",
      requires: [79, 499],
      uses: [],
      idx: 541,
    },
    {
      path: "../classic/classic/src/grid/property/Property.js",
      requires: [154],
      uses: [],
      idx: 542,
    },
    {
      path: "../classic/classic/src/grid/property/Reader.js",
      requires: [156],
      uses: [155],
      idx: 543,
    },
    {
      path: "../classic/classic/src/grid/property/Store.js",
      requires: [160, 171, 542, 543],
      uses: [166],
      idx: 544,
    },
    {
      path: "../classic/classic/src/grid/selection/Selection.js",
      requires: [],
      uses: [],
      idx: 545,
    },
    {
      path: "../classic/classic/src/grid/selection/Cells.js",
      requires: [545],
      uses: [477],
      idx: 546,
    },
    {
      path: "../classic/classic/src/grid/selection/Columns.js",
      requires: [545],
      uses: [477],
      idx: 547,
    },
    {
      path: "../classic/classic/src/grid/selection/Replicator.js",
      requires: [314],
      uses: [],
      idx: 548,
    },
    {
      path: "../classic/classic/src/grid/selection/Rows.js",
      requires: [126, 545],
      uses: [477],
      idx: 549,
    },
    {
      path: "../classic/classic/src/grid/selection/SelectionExtender.js",
      requires: [390],
      uses: [50, 322],
      idx: 550,
    },
    {
      path: "../classic/classic/src/grid/selection/SpreadsheetModel.js",
      requires: [441, 506, 545, 546, 547, 549, 550],
      uses: [194, 331, 396, 477, 479],
      idx: 551,
    },
    {
      path: "../classic/classic/src/util/Queue.js",
      requires: [],
      uses: [],
      idx: 552,
    },
    {
      path: "../classic/classic/src/layout/ContextItem.js",
      requires: [],
      uses: [56, 67, 73, 328],
      idx: 553,
    },
    {
      path: "../classic/classic/src/layout/Context.js",
      requires: [67, 73, 313, 329, 552, 553],
      uses: [],
      idx: 554,
    },
    {
      path: "../classic/classic/src/layout/SizePolicy.js",
      requires: [],
      uses: [],
      idx: 555,
    },
    {
      path: "../classic/classic/src/layout/component/Body.js",
      requires: [341],
      uses: [],
      idx: 556,
    },
    {
      path: "../classic/classic/src/layout/component/FieldSet.js",
      requires: [556],
      uses: [],
      idx: 557,
    },
    {
      path: "../classic/classic/src/layout/container/Absolute.js",
      requires: [386],
      uses: [],
      idx: 558,
    },
    {
      path: "../classic/classic/src/layout/container/Accordion.js",
      requires: [367],
      uses: [],
      idx: 559,
    },
    {
      path: "../classic/classic/src/resizer/BorderSplitter.js",
      requires: [364],
      uses: [569],
      idx: 560,
    },
    {
      path: "../classic/classic/src/layout/container/Border.js",
      requires: [73, 119, 330, 560],
      uses: [79, 194, 341],
      idx: 561,
    },
    {
      path: "../classic/classic/src/layout/container/Card.js",
      requires: [480],
      uses: [50],
      idx: 562,
    },
    {
      path: "../classic/classic/src/layout/container/Center.js",
      requires: [480],
      uses: [],
      idx: 563,
    },
    {
      path: "../classic/classic/src/layout/container/Form.js",
      requires: [331],
      uses: [],
      idx: 564,
    },
    {
      path: "../classic/classic/src/menu/ColorPicker.js",
      requires: [468, 519],
      uses: [194, 341, 347],
      idx: 565,
    },
    {
      path: "../classic/classic/src/menu/DatePicker.js",
      requires: [457, 519],
      uses: [194, 341, 347],
      idx: 566,
    },
    {
      path: "../classic/classic/src/panel/Pinnable.js",
      requires: [0],
      uses: [194, 341, 356],
      idx: 567,
    },
    {
      path: "../classic/classic/src/plugin/Manager.js",
      requires: [],
      uses: [],
      idx: 568,
    },
    {
      path: "../classic/classic/src/resizer/BorderSplitterTracker.js",
      requires: [33, 391],
      uses: [],
      idx: 569,
    },
    {
      path: "../classic/classic/src/resizer/Handle.js",
      requires: [118],
      uses: [],
      idx: 570,
    },
    {
      path: "../classic/classic/src/resizer/ResizeTracker.js",
      requires: [390],
      uses: [],
      idx: 571,
    },
    {
      path: "../classic/classic/src/resizer/Resizer.js",
      requires: [52],
      uses: [50, 80, 118, 229, 571],
      idx: 572,
    },
    {
      path: "../classic/classic/src/selection/CellModel.js",
      requires: [442, 477],
      uses: [],
      idx: 573,
    },
    {
      path: "../classic/classic/src/selection/RowModel.js",
      requires: [442, 477],
      uses: [],
      idx: 574,
    },
    {
      path: "../classic/classic/src/selection/CheckboxModel.js",
      requires: [574],
      uses: [194, 331, 477, 479, 500],
      idx: 575,
    },
    {
      path: "../classic/classic/src/selection/TreeModel.js",
      requires: [574],
      uses: [],
      idx: 576,
    },
    {
      path: "../classic/classic/src/slider/Thumb.js",
      requires: [79, 390],
      uses: [73],
      idx: 577,
    },
    {
      path: "../classic/classic/src/slider/Tip.js",
      requires: [464],
      uses: [],
      idx: 578,
    },
    {
      path: "../classic/classic/src/slider/Multi.js",
      requires: [79, 80, 416, 577, 578],
      uses: [229],
      idx: 579,
    },
    {
      path: "../classic/classic/src/slider/Single.js",
      requires: [579],
      uses: [],
      idx: 580,
    },
    {
      path: "../classic/classic/src/slider/Widget.js",
      requires: [84, 579],
      uses: [73, 79],
      idx: 581,
    },
    {
      path: "../classic/classic/src/sparkline/Shape.js",
      requires: [],
      uses: [],
      idx: 582,
    },
    {
      path: "../classic/classic/src/sparkline/CanvasBase.js",
      requires: [582],
      uses: [],
      idx: 583,
    },
    {
      path: "../classic/classic/src/sparkline/CanvasCanvas.js",
      requires: [583],
      uses: [],
      idx: 584,
    },
    {
      path: "../classic/classic/src/sparkline/VmlCanvas.js",
      requires: [583],
      uses: [],
      idx: 585,
    },
    {
      path: "../classic/classic/src/sparkline/Base.js",
      requires: [84, 87, 194, 331, 376, 465, 584, 585],
      uses: [],
      idx: 586,
    },
    {
      path: "../classic/classic/src/sparkline/BarBase.js",
      requires: [586],
      uses: [],
      idx: 587,
    },
    {
      path: "../classic/classic/src/sparkline/RangeMap.js",
      requires: [],
      uses: [],
      idx: 588,
    },
    {
      path: "../classic/classic/src/sparkline/Bar.js",
      requires: [87, 587, 588],
      uses: [],
      idx: 589,
    },
    {
      path: "../classic/classic/src/sparkline/Box.js",
      requires: [87, 586],
      uses: [],
      idx: 590,
    },
    {
      path: "../classic/classic/src/sparkline/Bullet.js",
      requires: [87, 586],
      uses: [],
      idx: 591,
    },
    {
      path: "../classic/classic/src/sparkline/Discrete.js",
      requires: [87, 587],
      uses: [],
      idx: 592,
    },
    {
      path: "../classic/classic/src/sparkline/Line.js",
      requires: [87, 586, 588],
      uses: [],
      idx: 593,
    },
    {
      path: "../classic/classic/src/sparkline/Pie.js",
      requires: [87, 586],
      uses: [],
      idx: 594,
    },
    {
      path: "../classic/classic/src/sparkline/TriState.js",
      requires: [87, 587, 588],
      uses: [],
      idx: 595,
    },
    {
      path: "../classic/classic/src/state/CookieProvider.js",
      requires: [112],
      uses: [],
      idx: 596,
    },
    {
      path: "../classic/classic/src/state/LocalStorageProvider.js",
      requires: [112, 320],
      uses: [],
      idx: 597,
    },
    {
      path: "../classic/classic/src/tab/Tab.js",
      requires: [349],
      uses: [],
      idx: 598,
    },
    {
      path: "../classic/classic/src/tab/Bar.js",
      requires: [34, 354, 359, 556, 598],
      uses: [33],
      idx: 599,
    },
    {
      path: "../classic/classic/src/tab/Panel.js",
      requires: [379, 562, 599],
      uses: [194, 341, 598],
      idx: 600,
    },
    {
      path: "../classic/classic/src/toolbar/Breadcrumb.js",
      requires: [226, 333, 350, 359],
      uses: [174],
      idx: 601,
    },
    {
      path: "../classic/classic/src/toolbar/Fill.js",
      requires: [118, 368],
      uses: [],
      idx: 602,
    },
    {
      path: "../classic/classic/src/toolbar/Spacer.js",
      requires: [118, 368],
      uses: [],
      idx: 603,
    },
    {
      path: "../classic/classic/src/tree/Column.js",
      requires: [500],
      uses: [],
      idx: 604,
    },
    {
      path: "../classic/classic/src/tree/NavigationModel.js",
      requires: [484],
      uses: [35],
      idx: 605,
    },
    {
      path: "../classic/classic/src/tree/View.js",
      requires: [488],
      uses: [50, 87],
      idx: 606,
    },
    {
      path: "../classic/classic/src/tree/Panel.js",
      requires: [226, 481, 576, 604, 605, 606],
      uses: [174, 194, 331, 479],
      idx: 607,
    },
    {
      path: "../classic/classic/src/view/DragZone.js",
      requires: [401],
      uses: [80],
      idx: 608,
    },
    {
      path: "../classic/classic/src/tree/ViewDragZone.js",
      requires: [608],
      uses: [80],
      idx: 609,
    },
    {
      path: "../classic/classic/src/tree/ViewDropZone.js",
      requires: [493],
      uses: [],
      idx: 610,
    },
    {
      path: "../classic/classic/src/tree/plugin/TreeViewDragDrop.js",
      requires: [314],
      uses: [609, 610],
      idx: 611,
    },
    {
      path: "../classic/classic/src/util/CSS.js",
      requires: [],
      uses: [50],
      idx: 612,
    },
    {
      path: "../classic/classic/src/util/Cookies.js",
      requires: [],
      uses: [],
      idx: 613,
    },
    {
      path: "../classic/classic/src/view/MultiSelectorSearch.js",
      requires: [379],
      uses: [51, 174, 194, 341, 376, 419, 480, 489],
      idx: 614,
    },
    {
      path: "../classic/classic/src/view/MultiSelector.js",
      requires: [194, 376, 480, 489, 614],
      uses: [],
      idx: 615,
    },
    {
      path: "../classic/classic/src/window/Toast.js",
      requires: [413],
      uses: [1],
      idx: 616,
    },
  ],
  classes: {
    "Ext.AbstractManager": { idx: 6, alias: [], alternates: [] },
    "Ext.Action": { idx: 325, alias: [], alternates: [] },
    "Ext.Ajax": { idx: 18, alias: [], alternates: [] },
    "Ext.AnimationQueue": { idx: 19, alias: [], alternates: [] },
    "Ext.Component": {
      idx: 118,
      alias: ["widget.box", "widget.component"],
      alternates: ["Ext.AbstractComponent"],
    },
    "Ext.ComponentLoader": { idx: 327, alias: [], alternates: [] },
    "Ext.ComponentManager": {
      idx: 20,
      alias: [],
      alternates: ["Ext.ComponentMgr"],
    },
    "Ext.ComponentQuery": { idx: 23, alias: [], alternates: [] },
    "Ext.Deferred": { idx: 11, alias: [], alternates: [] },
    "Ext.Editor": { idx: 335, alias: ["widget.editor"], alternates: [] },
    "Ext.ElementLoader": { idx: 326, alias: [], alternates: [] },
    "Ext.EventManager": { idx: 336, alias: [], alternates: [] },
    "Ext.Evented": { idx: 24, alias: [], alternates: ["Ext.EventedBase"] },
    "Ext.GlobalEvents": {
      idx: 77,
      alias: [],
      alternates: ["Ext.globalEvents"],
    },
    "Ext.Img": {
      idx: 337,
      alias: ["widget.image", "widget.imagecomponent"],
      alternates: [],
    },
    "Ext.LoadMask": { idx: 339, alias: ["widget.loadmask"], alternates: [] },
    "Ext.Mixin": { idx: 0, alias: [], alternates: [] },
    "Ext.ProgressBar": {
      idx: 343,
      alias: ["widget.progressbar"],
      alternates: [],
    },
    "Ext.ProgressBarWidget": {
      idx: 344,
      alias: ["widget.progressbarwidget"],
      alternates: [],
    },
    "Ext.Promise": { idx: 10, alias: [], alternates: [] },
    "Ext.TaskQueue": { idx: 39, alias: [], alternates: [] },
    "Ext.Template": { idx: 80, alias: [], alternates: [] },
    "Ext.Widget": { idx: 84, alias: ["widget.widget"], alternates: [] },
    "Ext.XTemplate": { idx: 87, alias: [], alternates: [] },
    "Ext.ZIndexManager": {
      idx: 332,
      alias: [],
      alternates: ["Ext.WindowGroup"],
    },
    "Ext.app.Application": { idx: 181, alias: [], alternates: [] },
    "Ext.app.BaseController": { idx: 122, alias: [], alternates: [] },
    "Ext.app.Controller": { idx: 180, alias: [], alternates: [] },
    "Ext.app.EventBus": { idx: 120, alias: [], alternates: [] },
    "Ext.app.EventDomain": { idx: 88, alias: [], alternates: [] },
    "Ext.app.Profile": { idx: 182, alias: [], alternates: [] },
    "Ext.app.Util": { idx: 123, alias: [], alternates: [] },
    "Ext.app.ViewController": { idx: 184, alias: [], alternates: [] },
    "Ext.app.ViewModel": {
      idx: 207,
      alias: ["viewmodel.default"],
      alternates: [],
    },
    "Ext.app.bind.AbstractStub": { idx: 198, alias: [], alternates: [] },
    "Ext.app.bind.BaseBinding": { idx: 196, alias: [], alternates: [] },
    "Ext.app.bind.Binding": { idx: 197, alias: [], alternates: [] },
    "Ext.app.bind.Formula": { idx: 203, alias: [], alternates: [] },
    "Ext.app.bind.LinkStub": { idx: 200, alias: [], alternates: [] },
    "Ext.app.bind.Multi": { idx: 202, alias: [], alternates: [] },
    "Ext.app.bind.RootStub": { idx: 201, alias: [], alternates: [] },
    "Ext.app.bind.Stub": { idx: 199, alias: [], alternates: [] },
    "Ext.app.bind.Template": { idx: 204, alias: [], alternates: [] },
    "Ext.app.bind.TemplateBinding": { idx: 205, alias: [], alternates: [] },
    "Ext.app.domain.Component": { idx: 89, alias: [], alternates: [] },
    "Ext.app.domain.Controller": { idx: 208, alias: [], alternates: [] },
    "Ext.app.domain.Direct": { idx: 211, alias: [], alternates: [] },
    "Ext.app.domain.Global": { idx: 121, alias: [], alternates: [] },
    "Ext.app.domain.Store": { idx: 175, alias: [], alternates: [] },
    "Ext.app.domain.View": { idx: 183, alias: [], alternates: [] },
    "Ext.app.route.Queue": { idx: 176, alias: [], alternates: [] },
    "Ext.app.route.Route": { idx: 177, alias: [], alternates: [] },
    "Ext.app.route.Router": { idx: 179, alias: [], alternates: [] },
    "Ext.button.Button": {
      idx: 349,
      alias: ["widget.button"],
      alternates: ["Ext.Button"],
    },
    "Ext.button.Cycle": {
      idx: 351,
      alias: ["widget.cycle"],
      alternates: ["Ext.CycleButton"],
    },
    "Ext.button.Manager": {
      idx: 346,
      alias: [],
      alternates: ["Ext.ButtonToggleManager"],
    },
    "Ext.button.Segmented": {
      idx: 353,
      alias: ["widget.segmentedbutton"],
      alternates: [],
    },
    "Ext.button.Split": {
      idx: 350,
      alias: ["widget.splitbutton"],
      alternates: ["Ext.SplitButton"],
    },
    "Ext.container.ButtonGroup": {
      idx: 381,
      alias: ["widget.buttongroup"],
      alternates: ["Ext.ButtonGroup"],
    },
    "Ext.container.Container": {
      idx: 333,
      alias: ["widget.container"],
      alternates: ["Ext.Container", "Ext.AbstractContainer"],
    },
    "Ext.container.DockingContainer": { idx: 378, alias: [], alternates: [] },
    "Ext.container.Monitor": { idx: 382, alias: [], alternates: [] },
    "Ext.container.Viewport": {
      idx: 385,
      alias: ["widget.viewport"],
      alternates: ["Ext.Viewport"],
    },
    "Ext.dashboard.Column": {
      idx: 388,
      alias: ["widget.dashboard-column"],
      alternates: [],
    },
    "Ext.dashboard.Dashboard": {
      idx: 400,
      alias: ["widget.dashboard"],
      alternates: [],
    },
    "Ext.dashboard.DropZone": { idx: 398, alias: [], alternates: [] },
    "Ext.dashboard.Panel": {
      idx: 387,
      alias: ["widget.dashboard-panel"],
      alternates: [],
    },
    "Ext.dashboard.Part": { idx: 399, alias: ["part.part"], alternates: [] },
    "Ext.data.AbstractStore": { idx: 136, alias: [], alternates: [] },
    "Ext.data.ArrayStore": {
      idx: 173,
      alias: ["store.array"],
      alternates: ["Ext.data.SimpleStore"],
    },
    "Ext.data.Batch": { idx: 187, alias: [], alternates: [] },
    "Ext.data.BufferedStore": {
      idx: 213,
      alias: ["store.buffered"],
      alternates: [],
    },
    "Ext.data.ChainedStore": {
      idx: 206,
      alias: ["store.chained"],
      alternates: [],
    },
    "Ext.data.Connection": { idx: 17, alias: [], alternates: [] },
    "Ext.data.DirectStore": {
      idx: 215,
      alias: ["store.direct"],
      alternates: [],
    },
    "Ext.data.Error": { idx: 137, alias: [], alternates: [] },
    "Ext.data.ErrorCollection": {
      idx: 138,
      alias: [],
      alternates: ["Ext.data.Errors"],
    },
    "Ext.data.JsonP": { idx: 216, alias: [], alternates: [] },
    "Ext.data.JsonPStore": { idx: 218, alias: ["store.jsonp"], alternates: [] },
    "Ext.data.JsonStore": { idx: 219, alias: ["store.json"], alternates: [] },
    "Ext.data.LocalStore": { idx: 162, alias: [], alternates: [] },
    "Ext.data.Model": { idx: 154, alias: [], alternates: ["Ext.data.Record"] },
    "Ext.data.ModelManager": {
      idx: 220,
      alias: [],
      alternates: ["Ext.ModelMgr"],
    },
    "Ext.data.NodeInterface": { idx: 221, alias: [], alternates: [] },
    "Ext.data.NodeStore": { idx: 224, alias: ["store.node"], alternates: [] },
    "Ext.data.PageMap": { idx: 212, alias: [], alternates: [] },
    "Ext.data.ProxyStore": { idx: 161, alias: [], alternates: [] },
    "Ext.data.Request": { idx: 225, alias: [], alternates: [] },
    "Ext.data.ResultSet": { idx: 155, alias: [], alternates: [] },
    "Ext.data.Session": { idx: 194, alias: [], alternates: [] },
    "Ext.data.SortTypes": { idx: 144, alias: [], alternates: [] },
    "Ext.data.Store": { idx: 171, alias: ["store.store"], alternates: [] },
    "Ext.data.StoreManager": {
      idx: 174,
      alias: [],
      alternates: ["Ext.StoreMgr", "Ext.data.StoreMgr", "Ext.StoreManager"],
    },
    "Ext.data.TreeModel": { idx: 223, alias: [], alternates: [] },
    "Ext.data.TreeStore": { idx: 226, alias: ["store.tree"], alternates: [] },
    "Ext.data.Types": { idx: 227, alias: [], alternates: [] },
    "Ext.data.Validation": { idx: 228, alias: [], alternates: [] },
    "Ext.data.XmlStore": { idx: 233, alias: ["store.xml"], alternates: [] },
    "Ext.data.field.Boolean": {
      idx: 147,
      alias: ["data.field.bool", "data.field.boolean"],
      alternates: [],
    },
    "Ext.data.field.Date": {
      idx: 148,
      alias: ["data.field.date"],
      alternates: [],
    },
    "Ext.data.field.Field": {
      idx: 146,
      alias: ["data.field.auto"],
      alternates: ["Ext.data.Field"],
    },
    "Ext.data.field.Integer": {
      idx: 149,
      alias: ["data.field.int", "data.field.integer"],
      alternates: [],
    },
    "Ext.data.field.Number": {
      idx: 150,
      alias: ["data.field.float", "data.field.number"],
      alternates: [],
    },
    "Ext.data.field.String": {
      idx: 151,
      alias: ["data.field.string"],
      alternates: [],
    },
    "Ext.data.flash.BinaryXhr": { idx: 14, alias: [], alternates: [] },
    "Ext.data.identifier.Generator": {
      idx: 152,
      alias: ["data.identifier.default"],
      alternates: [],
    },
    "Ext.data.identifier.Negative": {
      idx: 234,
      alias: ["data.identifier.negative"],
      alternates: [],
    },
    "Ext.data.identifier.Sequential": {
      idx: 153,
      alias: ["data.identifier.sequential"],
      alternates: [],
    },
    "Ext.data.identifier.Uuid": {
      idx: 235,
      alias: ["data.identifier.uuid"],
      alternates: [],
    },
    "Ext.data.matrix.Matrix": { idx: 190, alias: [], alternates: [] },
    "Ext.data.matrix.Side": { idx: 189, alias: [], alternates: [] },
    "Ext.data.matrix.Slice": { idx: 188, alias: [], alternates: [] },
    "Ext.data.operation.Create": {
      idx: 140,
      alias: ["data.operation.create"],
      alternates: [],
    },
    "Ext.data.operation.Destroy": {
      idx: 141,
      alias: ["data.operation.destroy"],
      alternates: [],
    },
    "Ext.data.operation.Operation": {
      idx: 139,
      alias: [],
      alternates: ["Ext.data.Operation"],
    },
    "Ext.data.operation.Read": {
      idx: 142,
      alias: ["data.operation.read"],
      alternates: [],
    },
    "Ext.data.operation.Update": {
      idx: 143,
      alias: ["data.operation.update"],
      alternates: [],
    },
    "Ext.data.proxy.Ajax": {
      idx: 164,
      alias: ["proxy.ajax"],
      alternates: ["Ext.data.HttpProxy", "Ext.data.AjaxProxy"],
    },
    "Ext.data.proxy.Client": {
      idx: 159,
      alias: [],
      alternates: ["Ext.data.ClientProxy"],
    },
    "Ext.data.proxy.Direct": {
      idx: 214,
      alias: ["proxy.direct"],
      alternates: ["Ext.data.DirectProxy"],
    },
    "Ext.data.proxy.JsonP": {
      idx: 217,
      alias: ["proxy.jsonp", "proxy.scripttag"],
      alternates: ["Ext.data.ScriptTagProxy"],
    },
    "Ext.data.proxy.LocalStorage": {
      idx: 237,
      alias: ["proxy.localstorage"],
      alternates: ["Ext.data.LocalStorageProxy"],
    },
    "Ext.data.proxy.Memory": {
      idx: 160,
      alias: ["proxy.memory"],
      alternates: ["Ext.data.MemoryProxy"],
    },
    "Ext.data.proxy.Proxy": {
      idx: 158,
      alias: ["proxy.proxy"],
      alternates: ["Ext.data.DataProxy", "Ext.data.Proxy"],
    },
    "Ext.data.proxy.Rest": {
      idx: 238,
      alias: ["proxy.rest"],
      alternates: ["Ext.data.RestProxy"],
    },
    "Ext.data.proxy.Server": {
      idx: 163,
      alias: ["proxy.server"],
      alternates: ["Ext.data.ServerProxy"],
    },
    "Ext.data.proxy.SessionStorage": {
      idx: 239,
      alias: ["proxy.sessionstorage"],
      alternates: ["Ext.data.SessionStorageProxy"],
    },
    "Ext.data.proxy.WebStorage": {
      idx: 236,
      alias: [],
      alternates: ["Ext.data.WebStorageProxy"],
    },
    "Ext.data.reader.Array": {
      idx: 172,
      alias: ["reader.array"],
      alternates: ["Ext.data.ArrayReader"],
    },
    "Ext.data.reader.Json": {
      idx: 165,
      alias: ["reader.json"],
      alternates: ["Ext.data.JsonReader"],
    },
    "Ext.data.reader.Reader": {
      idx: 156,
      alias: ["reader.base"],
      alternates: ["Ext.data.Reader", "Ext.data.DataReader"],
    },
    "Ext.data.reader.Xml": {
      idx: 231,
      alias: ["reader.xml"],
      alternates: ["Ext.data.XmlReader"],
    },
    "Ext.data.request.Ajax": {
      idx: 15,
      alias: ["request.ajax"],
      alternates: [],
    },
    "Ext.data.request.Base": { idx: 13, alias: [], alternates: [] },
    "Ext.data.request.Form": {
      idx: 16,
      alias: ["request.form"],
      alternates: [],
    },
    "Ext.data.schema.Association": { idx: 129, alias: [], alternates: [] },
    "Ext.data.schema.ManyToMany": { idx: 132, alias: [], alternates: [] },
    "Ext.data.schema.ManyToOne": { idx: 131, alias: [], alternates: [] },
    "Ext.data.schema.Namer": {
      idx: 134,
      alias: ["namer.default"],
      alternates: [],
    },
    "Ext.data.schema.OneToOne": { idx: 130, alias: [], alternates: [] },
    "Ext.data.schema.Role": { idx: 128, alias: [], alternates: [] },
    "Ext.data.schema.Schema": {
      idx: 135,
      alias: ["schema.default"],
      alternates: [],
    },
    "Ext.data.session.BatchVisitor": { idx: 193, alias: [], alternates: [] },
    "Ext.data.session.ChangesVisitor": { idx: 191, alias: [], alternates: [] },
    "Ext.data.session.ChildChangesVisitor": {
      idx: 192,
      alias: [],
      alternates: [],
    },
    "Ext.data.validator.Bound": {
      idx: 240,
      alias: ["data.validator.bound"],
      alternates: [],
    },
    "Ext.data.validator.Email": {
      idx: 242,
      alias: ["data.validator.email"],
      alternates: [],
    },
    "Ext.data.validator.Exclusion": {
      idx: 244,
      alias: ["data.validator.exclusion"],
      alternates: [],
    },
    "Ext.data.validator.Format": {
      idx: 241,
      alias: ["data.validator.format"],
      alternates: [],
    },
    "Ext.data.validator.Inclusion": {
      idx: 245,
      alias: ["data.validator.inclusion"],
      alternates: [],
    },
    "Ext.data.validator.Length": {
      idx: 246,
      alias: ["data.validator.length"],
      alternates: [],
    },
    "Ext.data.validator.List": {
      idx: 243,
      alias: ["data.validator.list"],
      alternates: [],
    },
    "Ext.data.validator.Presence": {
      idx: 247,
      alias: ["data.validator.presence"],
      alternates: [],
    },
    "Ext.data.validator.Range": {
      idx: 248,
      alias: ["data.validator.range"],
      alternates: [],
    },
    "Ext.data.validator.Validator": {
      idx: 145,
      alias: ["data.validator.base"],
      alternates: [],
    },
    "Ext.data.writer.Json": {
      idx: 166,
      alias: ["writer.json"],
      alternates: ["Ext.data.JsonWriter"],
    },
    "Ext.data.writer.Writer": {
      idx: 157,
      alias: ["writer.base"],
      alternates: ["Ext.data.DataWriter", "Ext.data.Writer"],
    },
    "Ext.data.writer.Xml": {
      idx: 232,
      alias: ["writer.xml"],
      alternates: ["Ext.data.XmlWriter"],
    },
    "Ext.dd.DD": { idx: 370, alias: [], alternates: [] },
    "Ext.dd.DDProxy": { idx: 371, alias: [], alternates: [] },
    "Ext.dd.DDTarget": { idx: 395, alias: [], alternates: [] },
    "Ext.dd.DragDrop": { idx: 369, alias: [], alternates: [] },
    "Ext.dd.DragDropManager": {
      idx: 363,
      alias: [],
      alternates: ["Ext.dd.DragDropMgr", "Ext.dd.DDM"],
    },
    "Ext.dd.DragSource": { idx: 373, alias: [], alternates: [] },
    "Ext.dd.DragTracker": { idx: 390, alias: [], alternates: [] },
    "Ext.dd.DragZone": { idx: 401, alias: [], alternates: [] },
    "Ext.dd.DropTarget": { idx: 397, alias: [], alternates: [] },
    "Ext.dd.DropZone": { idx: 403, alias: [], alternates: [] },
    "Ext.dd.Registry": { idx: 402, alias: [], alternates: [] },
    "Ext.dd.ScrollManager": { idx: 396, alias: [], alternates: [] },
    "Ext.dd.StatusProxy": { idx: 372, alias: [], alternates: [] },
    "Ext.direct.Event": { idx: 249, alias: ["direct.event"], alternates: [] },
    "Ext.direct.ExceptionEvent": {
      idx: 251,
      alias: ["direct.exception"],
      alternates: [],
    },
    "Ext.direct.JsonProvider": {
      idx: 252,
      alias: ["direct.jsonprovider"],
      alternates: [],
    },
    "Ext.direct.Manager": { idx: 209, alias: [], alternates: [] },
    "Ext.direct.PollingProvider": {
      idx: 253,
      alias: ["direct.pollingprovider"],
      alternates: [],
    },
    "Ext.direct.Provider": {
      idx: 210,
      alias: ["direct.provider"],
      alternates: [],
    },
    "Ext.direct.RemotingEvent": {
      idx: 250,
      alias: ["direct.rpc"],
      alternates: [],
    },
    "Ext.direct.RemotingMethod": { idx: 254, alias: [], alternates: [] },
    "Ext.direct.RemotingProvider": {
      idx: 256,
      alias: ["direct.remotingprovider"],
      alternates: [],
    },
    "Ext.direct.Transaction": {
      idx: 255,
      alias: ["direct.transaction"],
      alternates: ["Ext.Direct.Transaction"],
    },
    "Ext.dom.ButtonElement": { idx: 345, alias: [], alternates: [] },
    "Ext.dom.CompositeElement": {
      idx: 91,
      alias: [],
      alternates: ["Ext.CompositeElement"],
    },
    "Ext.dom.CompositeElementLite": {
      idx: 76,
      alias: [],
      alternates: ["Ext.CompositeElementLite"],
    },
    "Ext.dom.Element": { idx: 50, alias: [], alternates: ["Ext.Element"] },
    "Ext.dom.ElementEvent": { idx: 30, alias: [], alternates: [] },
    "Ext.dom.Fly": { idx: 75, alias: [], alternates: ["Ext.dom.Element.Fly"] },
    "Ext.dom.GarbageCollector": { idx: 257, alias: [], alternates: [] },
    "Ext.dom.Helper": {
      idx: 229,
      alias: [],
      alternates: ["Ext.DomHelper", "Ext.core.DomHelper"],
    },
    "Ext.dom.Layer": { idx: 404, alias: [], alternates: ["Ext.Layer"] },
    "Ext.dom.Query": {
      idx: 230,
      alias: [],
      alternates: ["Ext.core.DomQuery", "Ext.DomQuery"],
    },
    "Ext.dom.Shadow": { idx: 28, alias: [], alternates: ["Ext.Shadow"] },
    "Ext.dom.Shim": { idx: 29, alias: [], alternates: [] },
    "Ext.dom.Underlay": { idx: 27, alias: [], alternates: [] },
    "Ext.dom.UnderlayPool": { idx: 26, alias: [], alternates: [] },
    "Ext.event.Event": {
      idx: 35,
      alias: [],
      alternates: ["Ext.EventObjectImpl"],
    },
    "Ext.event.gesture.DoubleTap": { idx: 260, alias: [], alternates: [] },
    "Ext.event.gesture.Drag": { idx: 261, alias: [], alternates: [] },
    "Ext.event.gesture.EdgeSwipe": { idx: 263, alias: [], alternates: [] },
    "Ext.event.gesture.LongPress": { idx: 264, alias: [], alternates: [] },
    "Ext.event.gesture.MultiTouch": { idx: 265, alias: [], alternates: [] },
    "Ext.event.gesture.Pinch": { idx: 266, alias: [], alternates: [] },
    "Ext.event.gesture.Recognizer": { idx: 258, alias: [], alternates: [] },
    "Ext.event.gesture.Rotate": { idx: 267, alias: [], alternates: [] },
    "Ext.event.gesture.SingleTouch": { idx: 259, alias: [], alternates: [] },
    "Ext.event.gesture.Swipe": { idx: 262, alias: [], alternates: [] },
    "Ext.event.gesture.Tap": { idx: 268, alias: [], alternates: [] },
    "Ext.event.publisher.Dom": { idx: 36, alias: [], alternates: [] },
    "Ext.event.publisher.ElementPaint": { idx: 49, alias: [], alternates: [] },
    "Ext.event.publisher.ElementSize": { idx: 45, alias: [], alternates: [] },
    "Ext.event.publisher.Focus": { idx: 269, alias: [], alternates: [] },
    "Ext.event.publisher.Gesture": { idx: 37, alias: [], alternates: [] },
    "Ext.event.publisher.MouseEnterLeave": {
      idx: 406,
      alias: [],
      alternates: [],
    },
    "Ext.event.publisher.Publisher": { idx: 31, alias: [], alternates: [] },
    "Ext.flash.Component": {
      idx: 407,
      alias: ["widget.flash"],
      alternates: ["Ext.FlashComponent"],
    },
    "Ext.form.Basic": {
      idx: 422,
      alias: [],
      alternates: ["Ext.form.BasicForm"],
    },
    "Ext.form.CheckboxGroup": {
      idx: 429,
      alias: ["widget.checkboxgroup"],
      alternates: [],
    },
    "Ext.form.CheckboxManager": { idx: 427, alias: [], alternates: [] },
    "Ext.form.FieldAncestor": { idx: 423, alias: [], alternates: [] },
    "Ext.form.FieldContainer": {
      idx: 425,
      alias: ["widget.fieldcontainer"],
      alternates: [],
    },
    "Ext.form.FieldSet": {
      idx: 430,
      alias: ["widget.fieldset"],
      alternates: [],
    },
    "Ext.form.Label": { idx: 431, alias: ["widget.label"], alternates: [] },
    "Ext.form.Labelable": { idx: 414, alias: [], alternates: [] },
    "Ext.form.Panel": {
      idx: 432,
      alias: ["widget.form"],
      alternates: ["Ext.FormPanel", "Ext.form.FormPanel"],
    },
    "Ext.form.RadioGroup": {
      idx: 435,
      alias: ["widget.radiogroup"],
      alternates: [],
    },
    "Ext.form.RadioManager": { idx: 433, alias: [], alternates: [] },
    "Ext.form.action.Action": {
      idx: 408,
      alias: [],
      alternates: ["Ext.form.Action"],
    },
    "Ext.form.action.DirectAction": { idx: 436, alias: [], alternates: [] },
    "Ext.form.action.DirectLoad": {
      idx: 437,
      alias: ["formaction.directload"],
      alternates: ["Ext.form.Action.DirectLoad"],
    },
    "Ext.form.action.DirectSubmit": {
      idx: 438,
      alias: ["formaction.directsubmit"],
      alternates: ["Ext.form.Action.DirectSubmit"],
    },
    "Ext.form.action.Load": {
      idx: 409,
      alias: ["formaction.load"],
      alternates: ["Ext.form.Action.Load"],
    },
    "Ext.form.action.StandardSubmit": {
      idx: 439,
      alias: ["formaction.standardsubmit"],
      alternates: [],
    },
    "Ext.form.action.Submit": {
      idx: 410,
      alias: ["formaction.submit"],
      alternates: ["Ext.form.Action.Submit"],
    },
    "Ext.form.field.Base": {
      idx: 416,
      alias: ["widget.field"],
      alternates: ["Ext.form.Field", "Ext.form.BaseField"],
    },
    "Ext.form.field.Checkbox": {
      idx: 428,
      alias: ["widget.checkbox", "widget.checkboxfield"],
      alternates: ["Ext.form.Checkbox"],
    },
    "Ext.form.field.ComboBox": {
      idx: 455,
      alias: ["widget.combo", "widget.combobox"],
      alternates: ["Ext.form.ComboBox"],
    },
    "Ext.form.field.Date": {
      idx: 458,
      alias: ["widget.datefield"],
      alternates: ["Ext.form.DateField", "Ext.form.Date"],
    },
    "Ext.form.field.Display": {
      idx: 459,
      alias: ["widget.displayfield"],
      alternates: ["Ext.form.DisplayField", "Ext.form.Display"],
    },
    "Ext.form.field.Field": { idx: 415, alias: [], alternates: [] },
    "Ext.form.field.File": {
      idx: 462,
      alias: ["widget.filefield", "widget.fileuploadfield"],
      alternates: [
        "Ext.form.FileUploadField",
        "Ext.ux.form.FileUploadField",
        "Ext.form.File",
      ],
    },
    "Ext.form.field.FileButton": {
      idx: 460,
      alias: ["widget.filebutton"],
      alternates: [],
    },
    "Ext.form.field.Hidden": {
      idx: 463,
      alias: ["widget.hidden", "widget.hiddenfield"],
      alternates: ["Ext.form.Hidden"],
    },
    "Ext.form.field.HtmlEditor": {
      idx: 472,
      alias: ["widget.htmleditor"],
      alternates: ["Ext.form.HtmlEditor"],
    },
    "Ext.form.field.Number": {
      idx: 452,
      alias: ["widget.numberfield"],
      alternates: ["Ext.form.NumberField", "Ext.form.Number"],
    },
    "Ext.form.field.Picker": {
      idx: 440,
      alias: ["widget.pickerfield"],
      alternates: ["Ext.form.Picker"],
    },
    "Ext.form.field.Radio": {
      idx: 434,
      alias: ["widget.radio", "widget.radiofield"],
      alternates: ["Ext.form.Radio"],
    },
    "Ext.form.field.Spinner": {
      idx: 451,
      alias: ["widget.spinnerfield"],
      alternates: ["Ext.form.Spinner"],
    },
    "Ext.form.field.Tag": {
      idx: 473,
      alias: ["widget.tagfield"],
      alternates: [],
    },
    "Ext.form.field.Text": {
      idx: 419,
      alias: ["widget.textfield"],
      alternates: ["Ext.form.TextField", "Ext.form.Text"],
    },
    "Ext.form.field.TextArea": {
      idx: 420,
      alias: ["widget.textarea", "widget.textareafield"],
      alternates: ["Ext.form.TextArea"],
    },
    "Ext.form.field.Time": {
      idx: 475,
      alias: ["widget.timefield"],
      alternates: ["Ext.form.TimeField", "Ext.form.Time"],
    },
    "Ext.form.field.Trigger": {
      idx: 476,
      alias: ["widget.trigger", "widget.triggerfield"],
      alternates: [
        "Ext.form.TriggerField",
        "Ext.form.TwinTriggerField",
        "Ext.form.Trigger",
      ],
    },
    "Ext.form.field.VTypes": {
      idx: 417,
      alias: [],
      alternates: ["Ext.form.VTypes"],
    },
    "Ext.form.trigger.Component": {
      idx: 461,
      alias: ["trigger.component"],
      alternates: [],
    },
    "Ext.form.trigger.Spinner": {
      idx: 450,
      alias: ["trigger.spinner"],
      alternates: [],
    },
    "Ext.form.trigger.Trigger": {
      idx: 418,
      alias: ["trigger.trigger"],
      alternates: [],
    },
    "Ext.fx.Anim": { idx: 73, alias: [], alternates: [] },
    "Ext.fx.Animation": { idx: 279, alias: [], alternates: [] },
    "Ext.fx.Animator": { idx: 68, alias: [], alternates: [] },
    "Ext.fx.CubicBezier": { idx: 69, alias: [], alternates: [] },
    "Ext.fx.DrawPath": { idx: 71, alias: [], alternates: [] },
    "Ext.fx.Easing": { idx: 70, alias: [], alternates: [] },
    "Ext.fx.Manager": { idx: 67, alias: [], alternates: [] },
    "Ext.fx.PropertyHandler": { idx: 72, alias: [], alternates: [] },
    "Ext.fx.Queue": { idx: 66, alias: [], alternates: [] },
    "Ext.fx.Runner": { idx: 282, alias: [], alternates: [] },
    "Ext.fx.State": { idx: 270, alias: [], alternates: [] },
    "Ext.fx.animation.Abstract": { idx: 271, alias: [], alternates: [] },
    "Ext.fx.animation.Cube": {
      idx: 283,
      alias: ["animation.cube"],
      alternates: [],
    },
    "Ext.fx.animation.Fade": {
      idx: 274,
      alias: ["animation.fade", "animation.fadeIn"],
      alternates: ["Ext.fx.animation.FadeIn"],
    },
    "Ext.fx.animation.FadeOut": {
      idx: 275,
      alias: ["animation.fadeOut"],
      alternates: [],
    },
    "Ext.fx.animation.Flip": {
      idx: 276,
      alias: ["animation.flip"],
      alternates: [],
    },
    "Ext.fx.animation.Pop": {
      idx: 277,
      alias: ["animation.pop", "animation.popIn"],
      alternates: ["Ext.fx.animation.PopIn"],
    },
    "Ext.fx.animation.PopOut": {
      idx: 278,
      alias: ["animation.popOut"],
      alternates: [],
    },
    "Ext.fx.animation.Slide": {
      idx: 272,
      alias: ["animation.slide", "animation.slideIn"],
      alternates: ["Ext.fx.animation.SlideIn"],
    },
    "Ext.fx.animation.SlideOut": {
      idx: 273,
      alias: ["animation.slideOut"],
      alternates: [],
    },
    "Ext.fx.animation.Wipe": {
      idx: 284,
      alias: [],
      alternates: ["Ext.fx.animation.WipeIn"],
    },
    "Ext.fx.animation.WipeOut": { idx: 285, alias: [], alternates: [] },
    "Ext.fx.easing.Abstract": { idx: 93, alias: [], alternates: [] },
    "Ext.fx.easing.Bounce": { idx: 95, alias: [], alternates: [] },
    "Ext.fx.easing.BoundMomentum": { idx: 96, alias: [], alternates: [] },
    "Ext.fx.easing.EaseIn": {
      idx: 286,
      alias: ["easing.ease-in"],
      alternates: [],
    },
    "Ext.fx.easing.EaseOut": {
      idx: 98,
      alias: ["easing.ease-out"],
      alternates: [],
    },
    "Ext.fx.easing.Easing": { idx: 287, alias: [], alternates: [] },
    "Ext.fx.easing.Linear": {
      idx: 97,
      alias: ["easing.linear"],
      alternates: [],
    },
    "Ext.fx.easing.Momentum": { idx: 94, alias: [], alternates: [] },
    "Ext.fx.layout.Card": { idx: 297, alias: [], alternates: [] },
    "Ext.fx.layout.card.Abstract": { idx: 288, alias: [], alternates: [] },
    "Ext.fx.layout.card.Cover": {
      idx: 291,
      alias: ["fx.layout.card.cover"],
      alternates: [],
    },
    "Ext.fx.layout.card.Cube": {
      idx: 298,
      alias: ["fx.layout.card.cube"],
      alternates: [],
    },
    "Ext.fx.layout.card.Fade": {
      idx: 293,
      alias: ["fx.layout.card.fade"],
      alternates: [],
    },
    "Ext.fx.layout.card.Flip": {
      idx: 294,
      alias: ["fx.layout.card.flip"],
      alternates: [],
    },
    "Ext.fx.layout.card.Pop": {
      idx: 295,
      alias: ["fx.layout.card.pop"],
      alternates: [],
    },
    "Ext.fx.layout.card.Reveal": {
      idx: 292,
      alias: ["fx.layout.card.reveal"],
      alternates: [],
    },
    "Ext.fx.layout.card.Scroll": {
      idx: 296,
      alias: ["fx.layout.card.scroll"],
      alternates: [],
    },
    "Ext.fx.layout.card.ScrollCover": {
      idx: 299,
      alias: ["fx.layout.card.scrollcover"],
      alternates: [],
    },
    "Ext.fx.layout.card.ScrollReveal": {
      idx: 300,
      alias: ["fx.layout.card.scrollreveal"],
      alternates: [],
    },
    "Ext.fx.layout.card.Slide": {
      idx: 290,
      alias: ["fx.layout.card.slide"],
      alternates: [],
    },
    "Ext.fx.layout.card.Style": { idx: 289, alias: [], alternates: [] },
    "Ext.fx.runner.Css": { idx: 280, alias: [], alternates: [] },
    "Ext.fx.runner.CssAnimation": { idx: 301, alias: [], alternates: [] },
    "Ext.fx.runner.CssTransition": {
      idx: 281,
      alias: [],
      alternates: ["Ext.Animator"],
    },
    "Ext.fx.target.Component": { idx: 65, alias: [], alternates: [] },
    "Ext.fx.target.CompositeElement": { idx: 61, alias: [], alternates: [] },
    "Ext.fx.target.CompositeElementCSS": { idx: 62, alias: [], alternates: [] },
    "Ext.fx.target.CompositeSprite": { idx: 64, alias: [], alternates: [] },
    "Ext.fx.target.Element": { idx: 59, alias: [], alternates: [] },
    "Ext.fx.target.ElementCSS": { idx: 60, alias: [], alternates: [] },
    "Ext.fx.target.Sprite": { idx: 63, alias: [], alternates: [] },
    "Ext.fx.target.Target": { idx: 58, alias: [], alternates: [] },
    "Ext.grid.CellContext": { idx: 477, alias: [], alternates: [] },
    "Ext.grid.CellEditor": { idx: 478, alias: [], alternates: [] },
    "Ext.grid.ColumnComponentLayout": {
      idx: 479,
      alias: ["layout.columncomponent"],
      alternates: [],
    },
    "Ext.grid.ColumnLayout": {
      idx: 482,
      alias: ["layout.gridcolumn"],
      alternates: [],
    },
    "Ext.grid.ColumnManager": {
      idx: 483,
      alias: [],
      alternates: ["Ext.grid.ColumnModel"],
    },
    "Ext.grid.NavigationModel": {
      idx: 484,
      alias: ["view.navigation.grid"],
      alternates: [],
    },
    "Ext.grid.Panel": {
      idx: 489,
      alias: ["widget.grid", "widget.gridpanel"],
      alternates: ["Ext.list.ListView", "Ext.ListView", "Ext.grid.GridPanel"],
    },
    "Ext.grid.RowEditor": {
      idx: 491,
      alias: ["widget.roweditor"],
      alternates: [],
    },
    "Ext.grid.RowEditorButtons": {
      idx: 490,
      alias: ["widget.roweditorbuttons"],
      alternates: [],
    },
    "Ext.grid.Scroller": { idx: 492, alias: [], alternates: [] },
    "Ext.grid.ViewDropZone": { idx: 494, alias: [], alternates: [] },
    "Ext.grid.column.Action": {
      idx: 501,
      alias: ["widget.actioncolumn"],
      alternates: ["Ext.grid.ActionColumn"],
    },
    "Ext.grid.column.Boolean": {
      idx: 502,
      alias: ["widget.booleancolumn"],
      alternates: ["Ext.grid.BooleanColumn"],
    },
    "Ext.grid.column.Check": {
      idx: 503,
      alias: ["widget.checkcolumn"],
      alternates: ["Ext.ux.CheckColumn", "Ext.grid.column.CheckColumn"],
    },
    "Ext.grid.column.Column": {
      idx: 500,
      alias: ["widget.gridcolumn"],
      alternates: ["Ext.grid.Column"],
    },
    "Ext.grid.column.Date": {
      idx: 504,
      alias: ["widget.datecolumn"],
      alternates: ["Ext.grid.DateColumn"],
    },
    "Ext.grid.column.Number": {
      idx: 505,
      alias: ["widget.numbercolumn"],
      alternates: ["Ext.grid.NumberColumn"],
    },
    "Ext.grid.column.RowNumberer": {
      idx: 506,
      alias: ["widget.rownumberer"],
      alternates: ["Ext.grid.RowNumberer"],
    },
    "Ext.grid.column.Template": {
      idx: 507,
      alias: ["widget.templatecolumn"],
      alternates: ["Ext.grid.TemplateColumn"],
    },
    "Ext.grid.column.Widget": {
      idx: 508,
      alias: ["widget.widgetcolumn"],
      alternates: [],
    },
    "Ext.grid.feature.AbstractSummary": {
      idx: 510,
      alias: ["feature.abstractsummary"],
      alternates: [],
    },
    "Ext.grid.feature.Feature": {
      idx: 509,
      alias: ["feature.feature"],
      alternates: [],
    },
    "Ext.grid.feature.GroupStore": { idx: 511, alias: [], alternates: [] },
    "Ext.grid.feature.Grouping": {
      idx: 512,
      alias: ["feature.grouping"],
      alternates: [],
    },
    "Ext.grid.feature.GroupingSummary": {
      idx: 513,
      alias: ["feature.groupingsummary"],
      alternates: [],
    },
    "Ext.grid.feature.RowBody": {
      idx: 514,
      alias: ["feature.rowbody"],
      alternates: [],
    },
    "Ext.grid.feature.Summary": {
      idx: 515,
      alias: ["feature.summary"],
      alternates: [],
    },
    "Ext.grid.filters.Filters": {
      idx: 528,
      alias: ["plugin.gridfilters"],
      alternates: [],
    },
    "Ext.grid.filters.filter.Base": { idx: 520, alias: [], alternates: [] },
    "Ext.grid.filters.filter.Boolean": {
      idx: 522,
      alias: ["grid.filter.boolean"],
      alternates: [],
    },
    "Ext.grid.filters.filter.Date": {
      idx: 524,
      alias: ["grid.filter.date"],
      alternates: [],
    },
    "Ext.grid.filters.filter.List": {
      idx: 525,
      alias: ["grid.filter.list"],
      alternates: [],
    },
    "Ext.grid.filters.filter.Number": {
      idx: 526,
      alias: ["grid.filter.number", "grid.filter.numeric"],
      alternates: [],
    },
    "Ext.grid.filters.filter.SingleFilter": {
      idx: 521,
      alias: [],
      alternates: [],
    },
    "Ext.grid.filters.filter.String": {
      idx: 527,
      alias: ["grid.filter.string"],
      alternates: [],
    },
    "Ext.grid.filters.filter.TriFilter": {
      idx: 523,
      alias: [],
      alternates: [],
    },
    "Ext.grid.header.Container": {
      idx: 499,
      alias: ["widget.headercontainer"],
      alternates: [],
    },
    "Ext.grid.header.DragZone": { idx: 496, alias: [], alternates: [] },
    "Ext.grid.header.DropZone": { idx: 497, alias: [], alternates: [] },
    "Ext.grid.locking.HeaderContainer": { idx: 529, alias: [], alternates: [] },
    "Ext.grid.locking.Lockable": {
      idx: 531,
      alias: [],
      alternates: ["Ext.grid.Lockable"],
    },
    "Ext.grid.locking.RowSynchronizer": { idx: 486, alias: [], alternates: [] },
    "Ext.grid.locking.View": {
      idx: 530,
      alias: [],
      alternates: ["Ext.grid.LockingView"],
    },
    "Ext.grid.plugin.BufferedRenderer": {
      idx: 532,
      alias: ["plugin.bufferedrenderer"],
      alternates: [],
    },
    "Ext.grid.plugin.CellEditing": {
      idx: 534,
      alias: ["plugin.cellediting"],
      alternates: [],
    },
    "Ext.grid.plugin.Clipboard": {
      idx: 536,
      alias: ["plugin.clipboard"],
      alternates: [],
    },
    "Ext.grid.plugin.DragDrop": {
      idx: 537,
      alias: ["plugin.gridviewdragdrop"],
      alternates: [],
    },
    "Ext.grid.plugin.Editing": {
      idx: 533,
      alias: ["editing.editing"],
      alternates: [],
    },
    "Ext.grid.plugin.HeaderReorderer": {
      idx: 498,
      alias: ["plugin.gridheaderreorderer"],
      alternates: [],
    },
    "Ext.grid.plugin.HeaderResizer": {
      idx: 495,
      alias: ["plugin.gridheaderresizer"],
      alternates: [],
    },
    "Ext.grid.plugin.RowEditing": {
      idx: 538,
      alias: ["plugin.rowediting"],
      alternates: [],
    },
    "Ext.grid.plugin.RowExpander": {
      idx: 539,
      alias: ["plugin.rowexpander"],
      alternates: [],
    },
    "Ext.grid.property.Grid": {
      idx: 540,
      alias: ["widget.propertygrid"],
      alternates: ["Ext.grid.PropertyGrid"],
    },
    "Ext.grid.property.HeaderContainer": {
      idx: 541,
      alias: [],
      alternates: ["Ext.grid.PropertyColumnModel"],
    },
    "Ext.grid.property.Property": {
      idx: 542,
      alias: [],
      alternates: ["Ext.PropGridProperty"],
    },
    "Ext.grid.property.Reader": { idx: 543, alias: [], alternates: [] },
    "Ext.grid.property.Store": {
      idx: 544,
      alias: [],
      alternates: ["Ext.grid.PropertyStore"],
    },
    "Ext.grid.selection.Cells": { idx: 546, alias: [], alternates: [] },
    "Ext.grid.selection.Columns": { idx: 547, alias: [], alternates: [] },
    "Ext.grid.selection.Replicator": {
      idx: 548,
      alias: ["plugin.selectionreplicator"],
      alternates: [],
    },
    "Ext.grid.selection.Rows": { idx: 549, alias: [], alternates: [] },
    "Ext.grid.selection.Selection": { idx: 545, alias: [], alternates: [] },
    "Ext.grid.selection.SelectionExtender": {
      idx: 550,
      alias: [],
      alternates: [],
    },
    "Ext.grid.selection.SpreadsheetModel": {
      idx: 551,
      alias: ["selection.spreadsheet"],
      alternates: [],
    },
    "Ext.layout.Context": { idx: 554, alias: [], alternates: [] },
    "Ext.layout.ContextItem": { idx: 553, alias: [], alternates: [] },
    "Ext.layout.Layout": { idx: 329, alias: [], alternates: [] },
    "Ext.layout.SizeModel": { idx: 328, alias: [], alternates: [] },
    "Ext.layout.component.Auto": {
      idx: 341,
      alias: ["layout.autocomponent"],
      alternates: [],
    },
    "Ext.layout.component.Body": {
      idx: 556,
      alias: ["layout.body"],
      alternates: [],
    },
    "Ext.layout.component.BoundList": {
      idx: 447,
      alias: ["layout.boundlist"],
      alternates: [],
    },
    "Ext.layout.component.Component": { idx: 340, alias: [], alternates: [] },
    "Ext.layout.component.Dock": {
      idx: 376,
      alias: ["layout.dock"],
      alternates: ["Ext.layout.component.AbstractDock"],
    },
    "Ext.layout.component.FieldSet": {
      idx: 557,
      alias: ["layout.fieldset"],
      alternates: [],
    },
    "Ext.layout.component.ProgressBar": {
      idx: 342,
      alias: ["layout.progressbar"],
      alternates: [],
    },
    "Ext.layout.component.field.FieldContainer": {
      idx: 424,
      alias: ["layout.fieldcontainer"],
      alternates: [],
    },
    "Ext.layout.component.field.HtmlEditor": {
      idx: 469,
      alias: ["layout.htmleditor"],
      alternates: [],
    },
    "Ext.layout.container.Absolute": {
      idx: 558,
      alias: ["layout.absolute"],
      alternates: ["Ext.layout.AbsoluteLayout"],
    },
    "Ext.layout.container.Accordion": {
      idx: 559,
      alias: ["layout.accordion"],
      alternates: ["Ext.layout.AccordionLayout"],
    },
    "Ext.layout.container.Anchor": {
      idx: 386,
      alias: ["layout.anchor"],
      alternates: ["Ext.layout.AnchorLayout"],
    },
    "Ext.layout.container.Auto": {
      idx: 331,
      alias: ["layout.auto", "layout.autocontainer"],
      alternates: [],
    },
    "Ext.layout.container.Border": {
      idx: 561,
      alias: ["layout.border"],
      alternates: ["Ext.layout.BorderLayout"],
    },
    "Ext.layout.container.Box": {
      idx: 365,
      alias: ["layout.box"],
      alternates: ["Ext.layout.BoxLayout"],
    },
    "Ext.layout.container.Card": {
      idx: 562,
      alias: ["layout.card"],
      alternates: ["Ext.layout.CardLayout"],
    },
    "Ext.layout.container.Center": {
      idx: 563,
      alias: ["layout.center", "layout.ux.center"],
      alternates: ["Ext.ux.layout.Center"],
    },
    "Ext.layout.container.CheckboxGroup": {
      idx: 426,
      alias: ["layout.checkboxgroup"],
      alternates: [],
    },
    "Ext.layout.container.Column": {
      idx: 389,
      alias: ["layout.column"],
      alternates: ["Ext.layout.ColumnLayout"],
    },
    "Ext.layout.container.ColumnSplitter": {
      idx: 393,
      alias: ["widget.columnsplitter"],
      alternates: [],
    },
    "Ext.layout.container.ColumnSplitterTracker": {
      idx: 392,
      alias: [],
      alternates: [],
    },
    "Ext.layout.container.Container": {
      idx: 330,
      alias: ["layout.container"],
      alternates: ["Ext.layout.ContainerLayout"],
    },
    "Ext.layout.container.Dashboard": {
      idx: 394,
      alias: ["layout.dashboard"],
      alternates: [],
    },
    "Ext.layout.container.Editor": {
      idx: 334,
      alias: ["layout.editor"],
      alternates: [],
    },
    "Ext.layout.container.Fit": {
      idx: 480,
      alias: ["layout.fit"],
      alternates: ["Ext.layout.FitLayout"],
    },
    "Ext.layout.container.Form": {
      idx: 564,
      alias: ["layout.form"],
      alternates: ["Ext.layout.FormLayout"],
    },
    "Ext.layout.container.HBox": {
      idx: 366,
      alias: ["layout.hbox"],
      alternates: ["Ext.layout.HBoxLayout"],
    },
    "Ext.layout.container.SegmentedButton": {
      idx: 352,
      alias: ["layout.segmentedbutton"],
      alternates: [],
    },
    "Ext.layout.container.Table": {
      idx: 380,
      alias: ["layout.table"],
      alternates: ["Ext.layout.TableLayout"],
    },
    "Ext.layout.container.VBox": {
      idx: 367,
      alias: ["layout.vbox"],
      alternates: ["Ext.layout.VBoxLayout"],
    },
    "Ext.layout.container.border.Region": {
      idx: 119,
      alias: [],
      alternates: [],
    },
    "Ext.layout.container.boxOverflow.Menu": {
      idx: 471,
      alias: ["box.overflow.Menu", "box.overflow.menu"],
      alternates: ["Ext.layout.boxOverflow.Menu"],
    },
    "Ext.layout.container.boxOverflow.None": {
      idx: 361,
      alias: ["box.overflow.None", "box.overflow.none"],
      alternates: ["Ext.layout.boxOverflow.None"],
    },
    "Ext.layout.container.boxOverflow.Scroller": {
      idx: 362,
      alias: ["box.overflow.Scroller", "box.overflow.scroller"],
      alternates: ["Ext.layout.boxOverflow.Scroller"],
    },
    "Ext.list.AbstractTreeItem": { idx: 302, alias: [], alternates: [] },
    "Ext.list.RootTreeItem": { idx: 303, alias: [], alternates: [] },
    "Ext.list.Tree": { idx: 305, alias: ["widget.treelist"], alternates: [] },
    "Ext.list.TreeItem": {
      idx: 304,
      alias: ["widget.treelistitem"],
      alternates: [],
    },
    "Ext.menu.CheckItem": {
      idx: 517,
      alias: ["widget.menucheckitem"],
      alternates: [],
    },
    "Ext.menu.ColorPicker": {
      idx: 565,
      alias: ["widget.colormenu"],
      alternates: [],
    },
    "Ext.menu.DatePicker": {
      idx: 566,
      alias: ["widget.datemenu"],
      alternates: [],
    },
    "Ext.menu.Item": {
      idx: 516,
      alias: ["widget.menuitem"],
      alternates: ["Ext.menu.TextItem"],
    },
    "Ext.menu.Manager": {
      idx: 347,
      alias: [],
      alternates: ["Ext.menu.MenuMgr"],
    },
    "Ext.menu.Menu": { idx: 519, alias: ["widget.menu"], alternates: [] },
    "Ext.menu.Separator": {
      idx: 518,
      alias: ["widget.menuseparator"],
      alternates: [],
    },
    "Ext.mixin.Accessible": { idx: 116, alias: [], alternates: [] },
    "Ext.mixin.Bindable": { idx: 82, alias: [], alternates: [] },
    "Ext.mixin.ComponentDelegation": { idx: 83, alias: [], alternates: [] },
    "Ext.mixin.Container": { idx: 306, alias: [], alternates: [] },
    "Ext.mixin.Factoryable": { idx: 12, alias: [], alternates: [] },
    "Ext.mixin.Hookable": { idx: 307, alias: [], alternates: [] },
    "Ext.mixin.Identifiable": { idx: 3, alias: [], alternates: [] },
    "Ext.mixin.Inheritable": { idx: 81, alias: [], alternates: [] },
    "Ext.mixin.Mashup": { idx: 308, alias: [], alternates: [] },
    "Ext.mixin.Observable": { idx: 4, alias: [], alternates: [] },
    "Ext.mixin.Queryable": { idx: 222, alias: [], alternates: [] },
    "Ext.mixin.Responsive": { idx: 309, alias: [], alternates: [] },
    "Ext.mixin.Selectable": { idx: 310, alias: [], alternates: [] },
    "Ext.mixin.Templatable": { idx: 38, alias: [], alternates: [] },
    "Ext.mixin.Traversable": { idx: 311, alias: [], alternates: [] },
    "Ext.panel.Bar": { idx: 354, alias: [], alternates: [] },
    "Ext.panel.DD": { idx: 375, alias: [], alternates: [] },
    "Ext.panel.Header": { idx: 360, alias: ["widget.header"], alternates: [] },
    "Ext.panel.Panel": {
      idx: 379,
      alias: ["widget.panel"],
      alternates: ["Ext.Panel"],
    },
    "Ext.panel.Pinnable": { idx: 567, alias: [], alternates: [] },
    "Ext.panel.Proxy": {
      idx: 374,
      alias: [],
      alternates: ["Ext.dd.PanelProxy"],
    },
    "Ext.panel.Table": {
      idx: 481,
      alias: ["widget.tablepanel"],
      alternates: [],
    },
    "Ext.panel.Title": { idx: 355, alias: ["widget.title"], alternates: [] },
    "Ext.panel.Tool": { idx: 356, alias: ["widget.tool"], alternates: [] },
    "Ext.perf.Accumulator": { idx: 312, alias: [], alternates: [] },
    "Ext.perf.Monitor": { idx: 313, alias: [], alternates: ["Ext.Perf"] },
    "Ext.picker.Color": {
      idx: 468,
      alias: ["widget.colorpicker"],
      alternates: ["Ext.ColorPalette"],
    },
    "Ext.picker.Date": {
      idx: 457,
      alias: ["widget.datepicker"],
      alternates: ["Ext.DatePicker"],
    },
    "Ext.picker.Month": {
      idx: 456,
      alias: ["widget.monthpicker"],
      alternates: ["Ext.MonthPicker"],
    },
    "Ext.picker.Time": {
      idx: 474,
      alias: ["widget.timepicker"],
      alternates: [],
    },
    "Ext.plugin.Abstract": {
      idx: 314,
      alias: [],
      alternates: ["Ext.AbstractPlugin"],
    },
    "Ext.plugin.AbstractClipboard": { idx: 535, alias: [], alternates: [] },
    "Ext.plugin.LazyItems": {
      idx: 315,
      alias: ["plugin.lazyitems"],
      alternates: [],
    },
    "Ext.plugin.Manager": {
      idx: 568,
      alias: [],
      alternates: ["Ext.PluginManager", "Ext.PluginMgr"],
    },
    "Ext.plugin.Responsive": {
      idx: 383,
      alias: ["plugin.responsive"],
      alternates: [],
    },
    "Ext.plugin.Viewport": {
      idx: 384,
      alias: ["plugin.viewport"],
      alternates: [],
    },
    "Ext.promise.Consequence": { idx: 7, alias: [], alternates: [] },
    "Ext.promise.Deferred": { idx: 8, alias: [], alternates: [] },
    "Ext.promise.Promise": { idx: 9, alias: [], alternates: [] },
    "Ext.resizer.BorderSplitter": {
      idx: 560,
      alias: ["widget.bordersplitter"],
      alternates: [],
    },
    "Ext.resizer.BorderSplitterTracker": {
      idx: 569,
      alias: [],
      alternates: [],
    },
    "Ext.resizer.Handle": { idx: 570, alias: [], alternates: [] },
    "Ext.resizer.ResizeTracker": { idx: 571, alias: [], alternates: [] },
    "Ext.resizer.Resizer": {
      idx: 572,
      alias: [],
      alternates: ["Ext.Resizable"],
    },
    "Ext.resizer.Splitter": {
      idx: 364,
      alias: ["widget.splitter"],
      alternates: [],
    },
    "Ext.resizer.SplitterTracker": { idx: 391, alias: [], alternates: [] },
    "Ext.scroll.DomScroller": {
      idx: 108,
      alias: ["scroller.dom"],
      alternates: [],
    },
    "Ext.scroll.Indicator": {
      idx: 106,
      alias: ["widget.scrollindicator"],
      alternates: [],
    },
    "Ext.scroll.Scroller": {
      idx: 92,
      alias: ["scroller.scroller"],
      alternates: [],
    },
    "Ext.scroll.TouchScroller": {
      idx: 107,
      alias: ["scroller.touch"],
      alternates: [],
    },
    "Ext.selection.CellModel": {
      idx: 573,
      alias: ["selection.cellmodel"],
      alternates: [],
    },
    "Ext.selection.CheckboxModel": {
      idx: 575,
      alias: ["selection.checkboxmodel"],
      alternates: [],
    },
    "Ext.selection.DataViewModel": {
      idx: 442,
      alias: ["selection.dataviewmodel"],
      alternates: [],
    },
    "Ext.selection.Model": {
      idx: 441,
      alias: ["selection.abstract"],
      alternates: ["Ext.AbstractSelectionModel"],
    },
    "Ext.selection.RowModel": {
      idx: 574,
      alias: ["selection.rowmodel"],
      alternates: [],
    },
    "Ext.selection.TreeModel": {
      idx: 576,
      alias: ["selection.treemodel"],
      alternates: [],
    },
    "Ext.slider.Multi": {
      idx: 579,
      alias: ["widget.multislider"],
      alternates: ["Ext.slider.MultiSlider"],
    },
    "Ext.slider.Single": {
      idx: 580,
      alias: ["widget.slider", "widget.sliderfield"],
      alternates: [
        "Ext.Slider",
        "Ext.form.SliderField",
        "Ext.slider.SingleSlider",
        "Ext.slider.Slider",
      ],
    },
    "Ext.slider.Thumb": { idx: 577, alias: [], alternates: [] },
    "Ext.slider.Tip": { idx: 578, alias: ["widget.slidertip"], alternates: [] },
    "Ext.slider.Widget": {
      idx: 581,
      alias: ["widget.sliderwidget"],
      alternates: [],
    },
    "Ext.sparkline.Bar": {
      idx: 589,
      alias: ["widget.sparklinebar"],
      alternates: [],
    },
    "Ext.sparkline.BarBase": { idx: 587, alias: [], alternates: [] },
    "Ext.sparkline.Base": { idx: 586, alias: [], alternates: [] },
    "Ext.sparkline.Box": {
      idx: 590,
      alias: ["widget.sparklinebox"],
      alternates: [],
    },
    "Ext.sparkline.Bullet": {
      idx: 591,
      alias: ["widget.sparklinebullet"],
      alternates: [],
    },
    "Ext.sparkline.CanvasBase": { idx: 583, alias: [], alternates: [] },
    "Ext.sparkline.CanvasCanvas": { idx: 584, alias: [], alternates: [] },
    "Ext.sparkline.Discrete": {
      idx: 592,
      alias: ["widget.sparklinediscrete"],
      alternates: [],
    },
    "Ext.sparkline.Line": {
      idx: 593,
      alias: ["widget.sparklineline"],
      alternates: [],
    },
    "Ext.sparkline.Pie": {
      idx: 594,
      alias: ["widget.sparklinepie"],
      alternates: [],
    },
    "Ext.sparkline.RangeMap": { idx: 588, alias: [], alternates: [] },
    "Ext.sparkline.Shape": { idx: 582, alias: [], alternates: [] },
    "Ext.sparkline.TriState": {
      idx: 595,
      alias: ["widget.sparklinetristate"],
      alternates: [],
    },
    "Ext.sparkline.VmlCanvas": { idx: 585, alias: [], alternates: [] },
    "Ext.state.CookieProvider": { idx: 596, alias: [], alternates: [] },
    "Ext.state.LocalStorageProvider": {
      idx: 597,
      alias: ["state.localstorage"],
      alternates: [],
    },
    "Ext.state.Manager": { idx: 113, alias: [], alternates: [] },
    "Ext.state.Provider": { idx: 112, alias: [], alternates: [] },
    "Ext.state.Stateful": { idx: 114, alias: [], alternates: [] },
    "Ext.tab.Bar": { idx: 599, alias: ["widget.tabbar"], alternates: [] },
    "Ext.tab.Panel": {
      idx: 600,
      alias: ["widget.tabpanel"],
      alternates: ["Ext.TabPanel"],
    },
    "Ext.tab.Tab": { idx: 598, alias: ["widget.tab"], alternates: [] },
    "Ext.tip.QuickTip": {
      idx: 466,
      alias: ["widget.quicktip"],
      alternates: ["Ext.QuickTip"],
    },
    "Ext.tip.QuickTipManager": {
      idx: 467,
      alias: [],
      alternates: ["Ext.QuickTips"],
    },
    "Ext.tip.Tip": { idx: 464, alias: ["widget.tip"], alternates: ["Ext.Tip"] },
    "Ext.tip.ToolTip": {
      idx: 465,
      alias: ["widget.tooltip"],
      alternates: ["Ext.ToolTip"],
    },
    "Ext.toolbar.Breadcrumb": {
      idx: 601,
      alias: ["widget.breadcrumb"],
      alternates: [],
    },
    "Ext.toolbar.Fill": {
      idx: 602,
      alias: ["widget.tbfill"],
      alternates: ["Ext.Toolbar.Fill"],
    },
    "Ext.toolbar.Item": {
      idx: 448,
      alias: ["widget.tbitem"],
      alternates: ["Ext.Toolbar.Item"],
    },
    "Ext.toolbar.Paging": {
      idx: 453,
      alias: ["widget.pagingtoolbar"],
      alternates: ["Ext.PagingToolbar"],
    },
    "Ext.toolbar.Separator": {
      idx: 470,
      alias: ["widget.tbseparator"],
      alternates: ["Ext.Toolbar.Separator"],
    },
    "Ext.toolbar.Spacer": {
      idx: 603,
      alias: ["widget.tbspacer"],
      alternates: ["Ext.Toolbar.Spacer"],
    },
    "Ext.toolbar.TextItem": {
      idx: 449,
      alias: ["widget.tbtext"],
      alternates: ["Ext.Toolbar.TextItem"],
    },
    "Ext.toolbar.Toolbar": {
      idx: 368,
      alias: ["widget.toolbar"],
      alternates: ["Ext.Toolbar"],
    },
    "Ext.tree.Column": {
      idx: 604,
      alias: ["widget.treecolumn"],
      alternates: [],
    },
    "Ext.tree.NavigationModel": {
      idx: 605,
      alias: ["view.navigation.tree"],
      alternates: [],
    },
    "Ext.tree.Panel": {
      idx: 607,
      alias: ["widget.treepanel"],
      alternates: ["Ext.tree.TreePanel", "Ext.TreePanel"],
    },
    "Ext.tree.View": { idx: 606, alias: ["widget.treeview"], alternates: [] },
    "Ext.tree.ViewDragZone": { idx: 609, alias: [], alternates: [] },
    "Ext.tree.ViewDropZone": { idx: 610, alias: [], alternates: [] },
    "Ext.tree.plugin.TreeViewDragDrop": {
      idx: 611,
      alias: ["plugin.treeviewdragdrop"],
      alternates: [],
    },
    "Ext.util.AbstractMixedCollection": { idx: 53, alias: [], alternates: [] },
    "Ext.util.Animate": { idx: 74, alias: [], alternates: [] },
    "Ext.util.Bag": { idx: 185, alias: [], alternates: [] },
    "Ext.util.Base64": { idx: 316, alias: [], alternates: [] },
    "Ext.util.CSS": { idx: 612, alias: [], alternates: [] },
    "Ext.util.CSV": { idx: 318, alias: [], alternates: [] },
    "Ext.util.ClickRepeater": { idx: 348, alias: [], alternates: [] },
    "Ext.util.Collection": { idx: 126, alias: [], alternates: [] },
    "Ext.util.CollectionKey": { idx: 124, alias: [], alternates: [] },
    "Ext.util.ComponentDragger": { idx: 411, alias: [], alternates: [] },
    "Ext.util.Cookies": { idx: 613, alias: [], alternates: [] },
    "Ext.util.DelimitedValue": { idx: 317, alias: [], alternates: [] },
    "Ext.util.ElementContainer": { idx: 110, alias: [], alternates: [] },
    "Ext.util.Event": { idx: 2, alias: [], alternates: [] },
    "Ext.util.Filter": { idx: 51, alias: [], alternates: [] },
    "Ext.util.FilterCollection": { idx: 169, alias: [], alternates: [] },
    "Ext.util.Floating": { idx: 109, alias: [], alternates: [] },
    "Ext.util.FocusTrap": { idx: 412, alias: [], alternates: [] },
    "Ext.util.Focusable": { idx: 115, alias: [], alternates: [] },
    "Ext.util.FocusableContainer": { idx: 359, alias: [], alternates: [] },
    "Ext.util.Format": { idx: 79, alias: [], alternates: [] },
    "Ext.util.Group": { idx: 167, alias: [], alternates: [] },
    "Ext.util.GroupCollection": { idx: 170, alias: [], alternates: [] },
    "Ext.util.Grouper": { idx: 125, alias: [], alternates: [] },
    "Ext.util.HashMap": { idx: 5, alias: [], alternates: [] },
    "Ext.util.History": { idx: 178, alias: [], alternates: ["Ext.History"] },
    "Ext.util.Inflector": { idx: 133, alias: [], alternates: [] },
    "Ext.util.ItemCollection": {
      idx: 319,
      alias: [],
      alternates: ["Ext.ItemCollection"],
    },
    "Ext.util.KeyMap": { idx: 357, alias: [], alternates: ["Ext.KeyMap"] },
    "Ext.util.KeyNav": { idx: 358, alias: [], alternates: ["Ext.KeyNav"] },
    "Ext.util.KeyboardInteractive": { idx: 117, alias: [], alternates: [] },
    "Ext.util.LocalStorage": { idx: 320, alias: [], alternates: [] },
    "Ext.util.LruCache": { idx: 22, alias: [], alternates: [] },
    "Ext.util.Memento": { idx: 377, alias: [], alternates: [] },
    "Ext.util.MixedCollection": { idx: 56, alias: [], alternates: [] },
    "Ext.util.ObjectTemplate": { idx: 127, alias: [], alternates: [] },
    "Ext.util.Observable": { idx: 52, alias: [], alternates: [] },
    "Ext.util.Offset": { idx: 32, alias: [], alternates: [] },
    "Ext.util.PaintMonitor": { idx: 48, alias: [], alternates: [] },
    "Ext.util.Point": { idx: 34, alias: [], alternates: [] },
    "Ext.util.Positionable": { idx: 25, alias: [], alternates: [] },
    "Ext.util.ProtoElement": { idx: 90, alias: [], alternates: [] },
    "Ext.util.Queue": { idx: 552, alias: [], alternates: [] },
    "Ext.util.Region": { idx: 33, alias: [], alternates: [] },
    "Ext.util.Renderable": { idx: 111, alias: [], alternates: [] },
    "Ext.util.Schedulable": { idx: 195, alias: [], alternates: [] },
    "Ext.util.Scheduler": { idx: 186, alias: [], alternates: [] },
    "Ext.util.SizeMonitor": { idx: 44, alias: [], alternates: [] },
    "Ext.util.Sortable": { idx: 55, alias: [], alternates: [] },
    "Ext.util.Sorter": { idx: 54, alias: [], alternates: [] },
    "Ext.util.SorterCollection": { idx: 168, alias: [], alternates: [] },
    "Ext.util.StoreHolder": { idx: 338, alias: [], alternates: [] },
    "Ext.util.TSV": { idx: 321, alias: [], alternates: [] },
    "Ext.util.TaskManager": {
      idx: 322,
      alias: [],
      alternates: ["Ext.TaskManager"],
    },
    "Ext.util.TaskRunner": { idx: 57, alias: [], alternates: [] },
    "Ext.util.TextMetrics": { idx: 323, alias: [], alternates: [] },
    "Ext.util.Translatable": { idx: 105, alias: [], alternates: [] },
    "Ext.util.XTemplateCompiler": { idx: 86, alias: [], alternates: [] },
    "Ext.util.XTemplateParser": { idx: 85, alias: [], alternates: [] },
    "Ext.util.paintmonitor.Abstract": { idx: 46, alias: [], alternates: [] },
    "Ext.util.paintmonitor.CssAnimation": {
      idx: 47,
      alias: [],
      alternates: [],
    },
    "Ext.util.paintmonitor.OverflowChange": {
      idx: 324,
      alias: [],
      alternates: [],
    },
    "Ext.util.sizemonitor.Abstract": { idx: 40, alias: [], alternates: [] },
    "Ext.util.sizemonitor.Default": { idx: 41, alias: [], alternates: [] },
    "Ext.util.sizemonitor.OverflowChange": {
      idx: 43,
      alias: [],
      alternates: [],
    },
    "Ext.util.sizemonitor.Scroll": { idx: 42, alias: [], alternates: [] },
    "Ext.util.translatable.Abstract": { idx: 99, alias: [], alternates: [] },
    "Ext.util.translatable.CssPosition": {
      idx: 104,
      alias: [],
      alternates: [],
    },
    "Ext.util.translatable.CssTransform": {
      idx: 101,
      alias: [],
      alternates: [],
    },
    "Ext.util.translatable.Dom": { idx: 100, alias: [], alternates: [] },
    "Ext.util.translatable.ScrollParent": {
      idx: 103,
      alias: [],
      alternates: [],
    },
    "Ext.util.translatable.ScrollPosition": {
      idx: 102,
      alias: [],
      alternates: [],
    },
    "Ext.view.AbstractView": { idx: 444, alias: [], alternates: [] },
    "Ext.view.BoundList": {
      idx: 454,
      alias: ["widget.boundlist"],
      alternates: ["Ext.BoundList"],
    },
    "Ext.view.BoundListKeyNav": {
      idx: 446,
      alias: ["view.navigation.boundlist"],
      alternates: [],
    },
    "Ext.view.DragZone": { idx: 608, alias: [], alternates: [] },
    "Ext.view.DropZone": { idx: 493, alias: [], alternates: [] },
    "Ext.view.MultiSelector": {
      idx: 615,
      alias: ["widget.multiselector"],
      alternates: [],
    },
    "Ext.view.MultiSelectorSearch": {
      idx: 614,
      alias: ["widget.multiselector-search"],
      alternates: [],
    },
    "Ext.view.NavigationModel": {
      idx: 443,
      alias: ["view.navigation.default"],
      alternates: [],
    },
    "Ext.view.NodeCache": { idx: 487, alias: [], alternates: [] },
    "Ext.view.Table": {
      idx: 488,
      alias: ["widget.gridview", "widget.tableview"],
      alternates: ["Ext.grid.View"],
    },
    "Ext.view.TableLayout": {
      idx: 485,
      alias: ["layout.tableview"],
      alternates: [],
    },
    "Ext.view.View": {
      idx: 445,
      alias: ["widget.dataview"],
      alternates: ["Ext.DataView"],
    },
    "Ext.window.MessageBox": {
      idx: 421,
      alias: ["widget.messagebox"],
      alternates: [],
    },
    "Ext.window.Toast": { idx: 616, alias: ["widget.toast"], alternates: [] },
    "Ext.window.Window": {
      idx: 413,
      alias: ["widget.window"],
      alternates: ["Ext.Window"],
    },
  },
  packages: {
    classic: {
      build: { dir: "${package.output}" },
      creator: "Sencha",
      output: "${framework.dir}/build",
      requires: ["ext", "core", "classic", "classic"],
      type: "toolkit",
      version: "6.0.0.640",
    },
    core: {
      alternateName: ["sencha-core"],
      creator: "Sencha",
      output: "${package.dir}/build",
      requires: ["ext"],
      slicer: { js: [] },
      type: "code",
      version: "6.0.0.640",
    },
    ext: {
      build: { dir: "${package.output.base}" },
      creator: "Sencha",
      example: {
        path: ["examples", "templates"],
        apps: [
          "admin-dashboard",
          "executive-dashboard",
          "kitchensink",
          "classic/charts-kitchensink",
          "classic/desktop",
          "classic/ticket-app",
          "classic/portal",
          "classic/simple-tasks",
          "classic/responsive-app",
          "classic/aria",
          "modern/addressbook",
          "modern/energy",
          "modern/stockapp",
          "modern/states",
          "modern/geocongress",
          "modern/oreilly",
        ],
      },
      output: "${package.dir}/build",
      requires: [],
      subpkgs: [
        "classic/classic",
        "modern/modern",
        "packages/charts",
        "packages/amf",
        "packages/soap",
        "packages/ux",
      ],
      type: "framework",
      version: "6.0.0.640",
    },
  },
  bootRelative: true,
});
var Ext = Ext || {};
Ext.Boot =
  Ext.Boot ||
  (function (g) {
    var n = document,
      e = [],
      j = {
        disableCaching:
          /[?&](?:cache|disableCacheBuster)\b/i.test(location.search) ||
          !/http[s]?\:/i.test(location.href) ||
          /(^|[ ;])ext-cache=1/.test(n.cookie)
            ? false
            : true,
        disableCachingParam: "_dc",
        loadDelay: false,
        preserveScripts: true,
        charset: undefined,
      },
      f = /\.css(?:\?|$)/i,
      m = n.createElement("a"),
      k = typeof window !== "undefined",
      h = {
        browser: k,
        node: !k && typeof require === "function",
        phantom:
          (window && (window._phantom || window.callPhantom)) ||
          /PhantomJS/.test(window.navigator.userAgent),
      },
      l = (Ext.platformTags = {}),
      d = function (o) {},
      a = function (p, o, r) {
        if (r) {
          a(p, r);
        }
        if (p && o && typeof o === "object") {
          for (var q in o) {
            p[q] = o[q];
          }
        }
        return p;
      },
      c = {
        loading: 0,
        loaded: 0,
        apply: a,
        env: h,
        config: j,
        scripts: {},
        currentFile: null,
        suspendedQueue: [],
        currentRequest: null,
        syncMode: false,
        debug: d,
        useElements: true,
        listeners: [],
        Request: b,
        Entry: i,
        detectPlatformTags: function () {
          var p = navigator.userAgent,
            z = (l.isMobile = /Mobile(\/|\s)/.test(p)),
            v,
            t,
            u,
            x,
            o,
            C,
            s = document.createElement("div"),
            r = [
              "iPhone",
              "iPod",
              "Android",
              "Silk",
              "Android 2",
              "BlackBerry",
              "BB",
              "iPad",
              "RIM Tablet OS",
              "MSIE 10",
              "Trident",
              "Chrome",
              "Tizen",
              "Firefox",
              "Safari",
              "Windows Phone",
            ],
            B = function (F, D) {
              if (D === undefined) {
                D = window;
              }
              var E = "on" + F.toLowerCase(),
                G = E in s;
              if (!G) {
                if (s.setAttribute && s.removeAttribute) {
                  s.setAttribute(E, "");
                  G = typeof s[E] === "function";
                  if (typeof s[E] !== "undefined") {
                    s[E] = undefined;
                  }
                  s.removeAttribute(E);
                }
              }
              return G;
            },
            A = {},
            w = r.length,
            q,
            y;
          for (y = 0; y < w; y++) {
            q = r[y];
            A[q] = new RegExp(q).test(p);
          }
          v =
            A.iPhone ||
            A.iPod ||
            (!A.Silk && A.Android && (A["Android 2"] || z)) ||
            ((A.BlackBerry || A.BB) && A.isMobile) ||
            A["Windows Phone"];
          u =
            !l.isPhone &&
            (A.iPad ||
              A.Android ||
              A.Silk ||
              A["RIM Tablet OS"] ||
              (A["MSIE 10"] && /; Touch/.test(p)));
          x =
            B("touchend") ||
            navigator.maxTouchPoints ||
            navigator.msMaxTouchPoints;
          t = !v && !u;
          o = A["MSIE 10"];
          C = A.Blackberry || A.BB;
          a(l, c.loadPlatformsParam(), {
            phone: v,
            tablet: u,
            desktop: t,
            touch: x,
            ios: A.iPad || A.iPhone || A.iPod,
            android: A.Android || A.Silk,
            blackberry: C,
            safari: A.Safari && !C,
            chrome: A.Chrome,
            ie10: o,
            windows: o || A.Trident,
            tizen: A.Tizen,
            firefox: A.Firefox,
          });
        },
        loadPlatformsParam: function () {
          var o = window.location.search.substr(1),
            q = o.split("&"),
            s = {},
            u,
            v = {},
            x,
            t,
            r,
            p,
            w;
          for (u = 0; u < q.length; u++) {
            x = q[u].split("=");
            s[x[0]] = x[1];
          }
          if (s.platformTags) {
            x = s.platformTags.split(",");
            for (t = x.length, u = 0; u < t; u++) {
              r = x[u].split(":");
              p = r[0];
              w = true;
              if (r.length > 1) {
                w = r[1];
                if (w === "false" || w === "0") {
                  w = false;
                }
              }
              v[p] = w;
            }
          }
          return v;
        },
        filterPlatform: function (q, u) {
          q = e.concat(q || e);
          u = e.concat(u || e);
          var t = q.length,
            s = u.length,
            p = !t && s,
            r,
            o;
          for (r = 0; r < t && !p; r++) {
            o = q[r];
            p = !!l[o];
          }
          for (r = 0; r < s && p; r++) {
            o = u[r];
            p = !l[o];
          }
          return p;
        },
        init: function () {
          var r = n.getElementsByTagName("script"),
            s = r.length,
            y = /\/ext(\-[a-z\-]+)?\.js$/,
            w,
            u,
            o,
            p,
            t,
            x,
            q,
            v;
          for (q = 0; q < s; q++) {
            o = (u = r[q]).src;
            if (!o) {
              continue;
            }
            p = u.readyState || null;
            if (!t) {
              if (y.test(o)) {
                c.hasReadyState = "readyState" in u;
                c.hasAsync = "async" in u || !c.hasReadyState;
                t = o;
              }
            }
            if (!c.scripts[(x = c.canonicalUrl(o))]) {
              d("creating entry " + x + " in Boot.init");
              w = new i({
                key: x,
                url: o,
                done: p === null || p === "loaded" || p === "complete",
                el: u,
                prop: "src",
              });
            }
          }
          if (!t) {
            u = r[r.length - 1];
            t = u.src;
            c.hasReadyState = "readyState" in u;
            c.hasAsync = "async" in u || !c.hasReadyState;
          }
          c.baseUrl = t.substring(0, t.lastIndexOf("/") + 1);
          v =
            window.location.origin ||
            window.location.protocol +
              "//" +
              window.location.hostname +
              (window.location.port ? ":" + window.location.port : "");
          c.origin = v;
          c.detectPlatformTags();
          Ext.filterPlatform = c.filterPlatform;
        },
        canonicalUrl: function (r) {
          m.href = r;
          var q = m.href,
            p = j.disableCachingParam,
            t = p ? q.indexOf(p + "=") : -1,
            s,
            o;
          if (t > 0 && ((s = q.charAt(t - 1)) === "?" || s === "&")) {
            o = q.indexOf("&", t);
            o = o < 0 ? "" : q.substring(o);
            if (o && s === "?") {
              ++t;
              o = o.substring(1);
            }
            q = q.substring(0, t - 1) + o;
          }
          return q;
        },
        getConfig: function (o) {
          return o ? c.config[o] : c.config;
        },
        setConfig: function (o, q) {
          if (typeof o === "string") {
            c.config[o] = q;
          } else {
            for (var p in o) {
              c.setConfig(p, o[p]);
            }
          }
          return c;
        },
        getHead: function () {
          return (
            c.docHead ||
            (c.docHead = n.head || n.getElementsByTagName("head")[0])
          );
        },
        create: function (q, r, o) {
          var p = o || {};
          p.url = q;
          p.key = r;
          return (c.scripts[r] = new i(p));
        },
        getEntry: function (p, o) {
          var q = c.canonicalUrl(p),
            r = c.scripts[q];
          if (!r) {
            r = c.create(p, q, o);
          }
          return r;
        },
        registerContent: function (p, q, r) {
          var o = { content: r, loaded: true, css: q === "css" };
          return c.getEntry(p, o);
        },
        processRequest: function (p, o) {
          p.loadEntries(o);
        },
        load: function (o) {
          d("Boot.load called");
          var o = new b(o);
          if (o.sync || c.syncMode) {
            return c.loadSync(o);
          }
          if (c.currentRequest) {
            d("current active request, suspending this request");
            o.getEntries();
            c.suspendedQueue.push(o);
          } else {
            c.currentRequest = o;
            c.processRequest(o, false);
          }
          return c;
        },
        loadSync: function (o) {
          d("Boot.loadSync called");
          var o = new b(o);
          c.syncMode++;
          c.processRequest(o, true);
          c.syncMode--;
          return c;
        },
        loadBasePrefix: function (o) {
          o = new b(o);
          o.prependBaseUrl = true;
          return c.load(o);
        },
        loadSyncBasePrefix: function (o) {
          o = new b(o);
          o.prependBaseUrl = true;
          return c.loadSync(o);
        },
        requestComplete: function (p) {
          var o;
          if (c.currentRequest === p) {
            c.currentRequest = null;
            while (c.suspendedQueue.length > 0) {
              o = c.suspendedQueue.shift();
              if (!o.done) {
                d("resuming suspended request");
                c.load(o);
                break;
              }
            }
          }
          if (!c.currentRequest && c.suspendedQueue.length == 0) {
            c.fireListeners();
          }
        },
        isLoading: function () {
          return !c.currentRequest && c.suspendedQueue.length == 0;
        },
        fireListeners: function () {
          var o;
          while (c.isLoading() && (o = c.listeners.shift())) {
            o();
          }
        },
        onBootReady: function (o) {
          if (!c.isLoading()) {
            o();
          } else {
            c.listeners.push(o);
          }
        },
        getPathsFromIndexes: function (p, o) {
          return b.prototype.getPathsFromIndexes(p, o);
        },
        createLoadOrderMap: function (o) {
          return b.prototype.createLoadOrderMap(o);
        },
        fetch: function (o, p, x, r) {
          r = r === undefined ? !!p : r;
          var w = new XMLHttpRequest(),
            y,
            t,
            u,
            q = false,
            v = function () {
              if (w && w.readyState == 4) {
                t =
                  w.status === 1223
                    ? 204
                    : w.status === 0 &&
                        ((self.location || {}).protocol === "file:" ||
                          (self.location || {}).protocol === "ionp:")
                      ? 200
                      : w.status;
                u = w.responseText;
                y = { content: u, status: t, exception: q };
                if (p) {
                  p.call(x, y);
                }
                w = null;
              }
            };
          if (r) {
            w.onreadystatechange = v;
          }
          try {
            d("fetching " + o + " " + (r ? "async" : "sync"));
            w.open("GET", o, r);
            w.send(null);
          } catch (s) {
            q = s;
            v();
            return y;
          }
          if (!r) {
            v();
          }
          return y;
        },
        notifyAll: function (o) {
          o.notifyRequests();
        },
      };
    function b(o) {
      if (o.$isRequest) {
        return o;
      }
      var o = o.url ? o : { url: o },
        p = o.url,
        q = p.charAt ? [p] : p,
        r = o.charset || c.config.charset;
      a(o, { urls: q, charset: r });
      a(this, o);
    }
    b.prototype = {
      $isRequest: true,
      createLoadOrderMap: function (p) {
        var o = p.length,
          q = {},
          s,
          r;
        for (s = 0; s < o; s++) {
          r = p[s];
          q[r.path] = r;
        }
        return q;
      },
      getLoadIndexes: function (t, v, q, r, B) {
        var C = q[t],
          u,
          s,
          A,
          z,
          x,
          w,
          y,
          p,
          o;
        if (v[t]) {
          return v;
        }
        v[t] = true;
        x = false;
        while (!x) {
          w = false;
          for (y in v) {
            if (v.hasOwnProperty(y)) {
              C = q[y];
              if (!C) {
                continue;
              }
              o = this.prepareUrl(C.path);
              z = c.getEntry(o);
              if (!B || !z || !z.done) {
                A = C.requires;
                if (r && C.uses) {
                  A = A.concat(C.uses);
                }
                for (u = A.length, s = 0; s < u; s++) {
                  p = A[s];
                  if (!v[p]) {
                    v[p] = true;
                    w = true;
                  }
                }
              }
            }
          }
          if (!w) {
            x = true;
          }
        }
        return v;
      },
      getPathsFromIndexes: function (t, p) {
        var r = [],
          u = [],
          q,
          o,
          s;
        for (q in t) {
          if (t.hasOwnProperty(q) && t[q]) {
            r.push(q);
          }
        }
        r.sort(function (w, v) {
          return w - v;
        });
        for (o = r.length, s = 0; s < o; s++) {
          u.push(p[r[s]].path);
        }
        return u;
      },
      expandUrl: function (o, u, r, x) {
        if (typeof o == "string") {
          o = [o];
        }
        var v = this,
          p = v.loadOrder,
          w = v.loadOrderMap;
        if (p) {
          w = w || v.createLoadOrderMap(p);
          v.loadOrderMap = w;
          u = u || {};
          var t = o.length,
            q = [],
            s,
            y;
          for (s = 0; s < t; s++) {
            y = w[o[s]];
            if (y) {
              v.getLoadIndexes(y.idx, u, p, r, x);
            } else {
              q.push(o[s]);
            }
          }
          return v.getPathsFromIndexes(u, p).concat(q);
        }
        return o;
      },
      expandUrls: function (v, q) {
        if (typeof v == "string") {
          v = [v];
        }
        var s = [],
          o = {},
          y,
          u = v.length,
          r,
          x,
          p,
          w;
        for (r = 0; r < u; r++) {
          y = this.expandUrl(v[r], {}, q, true);
          for (x = 0, p = y.length; x < p; x++) {
            w = y[x];
            if (!o[w]) {
              o[w] = true;
              s.push(w);
            }
          }
        }
        if (s.length == 0) {
          s = v;
        }
        return s;
      },
      expandLoadOrder: function () {
        var p = this,
          q = p.urls,
          o;
        if (!p.expanded) {
          o = this.expandUrls(q, true);
          p.expanded = true;
        } else {
          o = q;
        }
        p.urls = o;
        if (q.length != o.length) {
          p.sequential = true;
        }
        return p;
      },
      getUrls: function () {
        this.expandLoadOrder();
        return this.urls;
      },
      prepareUrl: function (o) {
        if (this.prependBaseUrl) {
          return c.baseUrl + o;
        }
        return o;
      },
      getEntries: function () {
        var s = this,
          o = s.entries,
          q,
          r,
          t,
          p;
        if (!o) {
          o = [];
          t = s.getUrls();
          for (q = 0; q < t.length; q++) {
            p = s.prepareUrl(t[q]);
            r = c.getEntry(p, { buster: s.buster, charset: s.charset });
            r.requests.push(s);
            o.push(r);
          }
          s.entries = o;
        }
        return o;
      },
      loadEntries: function (u) {
        var t = this,
          p = t.getEntries(),
          o = p.length,
          v = t.loadStart || 0,
          q,
          s,
          r;
        if (u !== undefined) {
          t.sync = u;
        }
        t.loaded = t.loaded || 0;
        t.loading = t.loading || o;
        for (r = v; r < o; r++) {
          s = p[r];
          if (!s.loaded) {
            q = p[r].load(t.sync);
          } else {
            q = true;
          }
          if (!q) {
            t.loadStart = r;
            s.onDone(function () {
              t.loadEntries(u);
            });
            break;
          }
        }
        t.processLoadedEntries();
      },
      processLoadedEntries: function () {
        var s = this,
          p = s.getEntries(),
          o = p.length,
          t = s.startIndex || 0,
          q,
          r;
        if (!s.done) {
          for (q = t; q < o; q++) {
            r = p[q];
            if (!r.loaded) {
              s.startIndex = q;
              return;
            }
            if (!r.evaluated) {
              r.evaluate();
            }
            if (r.error) {
              s.error = true;
            }
          }
          s.notify();
        }
      },
      notify: function () {
        var s = this;
        if (!s.done) {
          var p = s.error,
            r = s[p ? "failure" : "success"],
            o = "delay" in s ? s.delay : p ? 1 : c.config.chainDelay,
            q = s.scope || s;
          s.done = true;
          if (r) {
            if (o === 0 || o > 0) {
              setTimeout(function () {
                r.call(q, s);
              }, o);
            } else {
              r.call(q, s);
            }
          }
          s.fireListeners();
          c.requestComplete(s);
        }
      },
      onDone: function (q) {
        var p = this,
          o = p.listeners || (p.listeners = []);
        if (p.done) {
          q(p);
        } else {
          o.push(q);
        }
      },
      fireListeners: function () {
        var o = this.listeners,
          p;
        if (o) {
          d("firing request listeners");
          while ((p = o.shift())) {
            p(this);
          }
        }
      },
    };
    function i(p) {
      if (p.$isEntry) {
        return p;
      }
      d("creating entry for " + p.url);
      var u = p.charset || c.config.charset,
        t = Ext.manifest,
        o = t && t.loader,
        q = p.cache !== undefined ? p.cache : o && o.cache,
        s,
        r;
      if (c.config.disableCaching) {
        if (q === undefined) {
          q = !c.config.disableCaching;
        }
        if (q === false) {
          s = +new Date();
        } else {
          if (q !== true) {
            s = q;
          }
        }
        if (s) {
          r = (o && o.cacheParam) || c.config.disableCachingParam;
          s = r + "=" + s;
        }
      }
      a(p, { charset: u, buster: s, requests: [] });
      a(this, p);
    }
    i.prototype = {
      $isEntry: true,
      done: false,
      evaluated: false,
      loaded: false,
      isCrossDomain: function () {
        var o = this;
        if (o.crossDomain === undefined) {
          d("checking " + o.getLoadUrl() + " for prefix " + c.origin);
          o.crossDomain = o.getLoadUrl().indexOf(c.origin) !== 0;
        }
        return o.crossDomain;
      },
      isCss: function () {
        var o = this;
        if (o.css === undefined) {
          o.css = o.url && f.test(o.url);
        }
        return this.css;
      },
      getElement: function (o) {
        var q = this,
          p = q.el;
        if (!p) {
          d("creating element for " + q.url);
          if (q.isCss()) {
            o = o || "link";
            p = n.createElement(o);
            if (o == "link") {
              p.rel = "stylesheet";
              q.prop = "href";
            } else {
              q.prop = "textContent";
            }
            p.type = "text/css";
          } else {
            o = o || "script";
            p = n.createElement(o);
            p.type = "text/javascript";
            q.prop = "src";
            if (c.hasAsync) {
              p.async = false;
            }
          }
          q.el = p;
        }
        return p;
      },
      getLoadUrl: function () {
        var p = this,
          o = c.canonicalUrl(p.url);
        if (!p.loadUrl) {
          p.loadUrl = !!p.buster
            ? o + (o.indexOf("?") === -1 ? "?" : "&") + p.buster
            : o;
        }
        return p.loadUrl;
      },
      fetch: function (r) {
        var p = this.getLoadUrl(),
          q = !!r.async,
          o = r.complete;
        c.fetch(p, o, this, q);
      },
      onContentLoaded: function (p) {
        var t = this,
          o = p.status,
          s = p.content,
          r = p.exception,
          q = this.getLoadUrl();
        t.loaded = true;
        if ((r || o === 0) && !h.phantom) {
          t.error =
            "Failed loading synchronously via XHR: '" +
              q +
              "'. It's likely that the file is either being loaded from a different domain or from the local file system where cross origin requests are not allowed for security reasons. Try asynchronous loading instead." ||
            true;
          t.evaluated = true;
        } else {
          if (
            (o >= 200 && o < 300) ||
            o === 304 ||
            h.phantom ||
            (o === 0 && s.length > 0)
          ) {
            t.content = s;
          } else {
            t.error =
              "Failed loading synchronously via XHR: '" +
                q +
                "'. Please verify that the file exists. XHR status code: " +
                o || true;
            t.evaluated = true;
          }
        }
      },
      createLoadElement: function (s) {
        var q = this,
          p = q.getElement(),
          o = function () {
            if (
              this.readyState === "loaded" ||
              this.readyState === "complete"
            ) {
              if (s) {
                s();
              }
            }
          },
          r = function () {
            q.error = true;
            if (s) {
              s();
            }
          };
        q.preserve = true;
        p.onerror = r;
        if (c.hasReadyState) {
          p.onreadystatechange = o;
        } else {
          p.onload = s;
        }
        p[q.prop] = q.getLoadUrl();
      },
      onLoadElementReady: function () {
        c.getHead().appendChild(this.getElement());
        this.evaluated = true;
      },
      inject: function (t, s) {
        d("injecting content for " + this.url);
        var u = this,
          v = c.getHead(),
          o = u.url,
          w = u.key,
          p,
          q,
          r,
          x;
        if (u.isCss()) {
          u.preserve = true;
          x = w.substring(0, w.lastIndexOf("/") + 1);
          p = n.createElement("base");
          p.href = x;
          if (v.firstChild) {
            v.insertBefore(p, v.firstChild);
          } else {
            v.appendChild(p);
          }
          p.href = p.href;
          if (o) {
            t += "\n/*# sourceURL=" + w + " */";
          }
          q = u.getElement("style");
          r = "styleSheet" in q;
          v.appendChild(p);
          if (r) {
            v.appendChild(q);
            q.styleSheet.cssText = t;
          } else {
            q.textContent = t;
            v.appendChild(q);
          }
          v.removeChild(p);
        } else {
          if (o) {
            t += "\n//# sourceURL=" + w;
          }
          Ext.globalEval(t);
        }
        return u;
      },
      loadCrossDomain: function () {
        var p = this,
          o = function () {
            p.loaded = p.evaluated = p.done = true;
            p.notifyRequests();
          };
        if (p.isCss()) {
          p.createLoadElement();
          p.evaluateLoadElement();
          o();
        } else {
          p.createLoadElement(function () {
            o();
          });
          p.evaluateLoadElement();
          return false;
        }
        return true;
      },
      loadElement: function () {
        var p = this,
          o = function () {
            p.loaded = p.evaluated = p.done = true;
            p.notifyRequests();
          };
        if (p.isCss()) {
          return p.loadCrossDomain();
        } else {
          p.createLoadElement(function () {
            o();
          });
          p.evaluateLoadElement();
        }
        return true;
      },
      loadSync: function () {
        var o = this;
        o.fetch({
          async: false,
          complete: function (p) {
            o.onContentLoaded(p);
          },
        });
        o.evaluate();
        o.notifyRequests();
      },
      load: function (p) {
        var o = this;
        if (!o.loaded) {
          if (o.loading) {
            return false;
          }
          o.loading = true;
          if (!p) {
            if (o.isCrossDomain()) {
              return o.loadCrossDomain();
            } else {
              if (!o.isCss() && c.hasReadyState) {
                o.createLoadElement(function () {
                  o.loaded = true;
                  o.notifyRequests();
                });
              } else {
                if (c.useElements) {
                  return o.loadElement();
                } else {
                  o.fetch({
                    async: !p,
                    complete: function (q) {
                      o.onContentLoaded(q);
                      o.notifyRequests();
                    },
                  });
                }
              }
            }
          } else {
            o.loadSync();
          }
        }
        return true;
      },
      evaluateContent: function () {
        this.inject(this.content);
        this.content = null;
      },
      evaluateLoadElement: function () {
        c.getHead().appendChild(this.getElement());
      },
      evaluate: function () {
        var o = this;
        if (!o.evaluated) {
          if (o.evaluating) {
            return;
          }
          o.evaluating = true;
          if (o.content !== undefined) {
            o.evaluateContent();
          } else {
            if (!o.error) {
              o.evaluateLoadElement();
            }
          }
          o.evaluated = o.done = true;
          o.cleanup();
        }
      },
      cleanup: function () {
        var q = this,
          p = q.el,
          r;
        if (!p) {
          return;
        }
        if (!q.preserve) {
          q.el = null;
          p.parentNode.removeChild(p);
          for (r in p) {
            try {
              if (r !== q.prop) {
                p[r] = null;
              }
              delete p[r];
            } catch (o) {}
          }
        }
        p.onload = p.onerror = p.onreadystatechange = g;
      },
      notifyRequests: function () {
        var r = this.requests,
          o = r.length,
          p,
          q;
        for (p = 0; p < o; p++) {
          q = r[p];
          q.processLoadedEntries();
        }
        if (this.done) {
          this.fireListeners();
        }
      },
      onDone: function (q) {
        var p = this,
          o = p.listeners || (p.listeners = []);
        if (p.done) {
          q(p);
        } else {
          o.push(q);
        }
      },
      fireListeners: function () {
        var o = this.listeners,
          p;
        if (o && o.length > 0) {
          d("firing event listeners for url " + this.url);
          while ((p = o.shift())) {
            p(this);
          }
        }
      },
    };
    Ext.disableCacheBuster = function (p, q) {
      var o = new Date();
      o.setTime(o.getTime() + (p ? 10 * 365 : -1) * 24 * 60 * 60 * 1000);
      o = o.toGMTString();
      n.cookie = "ext-cache=1; expires=" + o + "; path=" + (q || "/");
    };
    c.init();
    return c;
  })(function () {});
Ext.globalEval =
  Ext.globalEval ||
  (this.execScript
    ? function (a) {
        execScript(a);
      }
    : function ($$code) {
        eval.call(window, $$code);
      });
if (!Function.prototype.bind) {
  (function () {
    var a = Array.prototype.slice,
      b = function (d) {
        var c = a.call(arguments, 1),
          e = this;
        if (c.length) {
          return function () {
            var f = arguments;
            return e.apply(d, f.length ? c.concat(a.call(f)) : c);
          };
        }
        c = null;
        return function () {
          return e.apply(d, arguments);
        };
      };
    Function.prototype.bind = b;
    b.$extjs = true;
  })();
}
var Ext = Ext || {};
Ext._startTime = Date.now ? Date.now() : +new Date();
(function () {
  var b = this,
    g = Object.prototype,
    c = g.toString,
    m = ["valueOf", "toLocaleString", "toString", "constructor"],
    k = function () {},
    f = function () {},
    h = function (i) {
      return i;
    },
    l = function () {
      var i = l.caller.caller;
      return i.$owner.prototype[i.$name].apply(this, arguments);
    },
    a = Ext.manifest || {},
    j,
    d =
      /\[object\s*(?:Array|Arguments|\w*Collection|\w*List|HTML\s+document\.all\s+class)\]/,
    e = /^\\?\/Date\(([-+])?(\d+)(?:[+-]\d{4})?\)\\?\/$/;
  Ext.global = b;
  k.$nullFn = h.$nullFn = k.$emptyFn = h.$identityFn = f.$nullFn = true;
  f.$privacy = "framework";
  Ext.suspendLayouts = Ext.resumeLayouts = k;
  for (j in { toString: 1 }) {
    m = null;
  }
  Ext.enumerables = m;
  Ext.apply = function (q, p, s) {
    if (s) {
      Ext.apply(q, s);
    }
    if (q && p && typeof p === "object") {
      var r, o, n;
      for (r in p) {
        q[r] = p[r];
      }
      if (m) {
        for (o = m.length; o--; ) {
          n = m[o];
          if (p.hasOwnProperty(n)) {
            q[n] = p[n];
          }
        }
      }
    }
    return q;
  };
  Ext.buildSettings = Ext.apply(
    { baseCSSPrefix: "x-" },
    Ext.buildSettings || {},
  );
  Ext.apply(Ext, {
    idSeed: 0,
    idPrefix: "ext-",
    isSecure: /^https/i.test(window.location.protocol),
    enableGarbageCollector: false,
    enableListenerCollection: true,
    name: Ext.sandboxName || "Ext",
    privateFn: f,
    emptyFn: k,
    identityFn: h,
    frameStartTime: +new Date(),
    manifest: a,
    debugConfig: Ext.debugConfig || a.debug || { hooks: { "*": true } },
    enableAria: true,
    enableAriaButtons: true,
    enableAriaPanels: true,
    startsWithHashRe: /^#/,
    validIdRe: /^[a-z_][a-z0-9\-_]*$/i,
    BLANK_IMAGE_URL:
      "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    makeIdSelector: function (i) {
      if (!Ext.validIdRe.test(i)) {
        Ext.raise('Invalid id selector: "' + i + '"');
      }
      return "#" + i;
    },
    id: function (n, i) {
      if (n && n.id) {
        return n.id;
      }
      var p = (i || Ext.idPrefix) + ++Ext.idSeed;
      if (n) {
        n.id = p;
      }
      return p;
    },
    returnId: function (i) {
      return i.getId();
    },
    returnTrue: function () {
      return true;
    },
    emptyString: new String(),
    baseCSSPrefix: Ext.buildSettings.baseCSSPrefix,
    $eventNameMap: {},
    $vendorEventRe: /^(Moz.+|MS.+|webkit.+)/,
    canonicalEventName: function (i) {
      return (
        Ext.$eventNameMap[i] ||
        (Ext.$eventNameMap[i] = Ext.$vendorEventRe.test(i)
          ? i
          : i.toLowerCase())
      );
    },
    applyIf: function (n, i) {
      var o;
      if (n) {
        for (o in i) {
          if (n[o] === undefined) {
            n[o] = i[o];
          }
        }
      }
      return n;
    },
    now:
      b.performance && b.performance.now
        ? function () {
            return performance.now();
          }
        : Date.now ||
          (Date.now = function () {
            return +new Date();
          }),
    destroy: function () {
      var p = arguments.length,
        o,
        n;
      for (o = 0; o < p; o++) {
        n = arguments[o];
        if (n) {
          if (Ext.isArray(n)) {
            this.destroy.apply(this, n);
          } else {
            if (Ext.isFunction(n.destroy)) {
              n.destroy();
            }
          }
        }
      }
      return null;
    },
    destroyMembers: function (q) {
      for (var s, p, r = 1, o = arguments, n = o.length; r < n; r++) {
        s = q[(p = o[r])];
        if (s != null) {
          q[p] = Ext.destroy(s);
        }
      }
    },
    override: function (p, q) {
      if (p.$isClass) {
        p.override(q);
      } else {
        if (typeof p === "function") {
          Ext.apply(p.prototype, q);
        } else {
          var i = p.self,
            n,
            o;
          if (i && i.$isClass) {
            for (n in q) {
              if (q.hasOwnProperty(n)) {
                o = q[n];
                if (typeof o === "function") {
                  if (i.$className) {
                    o.name = i.$className + "#" + n;
                  }
                  o.$name = n;
                  o.$owner = i;
                  o.$previous = p.hasOwnProperty(n) ? p[n] : l;
                }
                p[n] = o;
              }
            }
          } else {
            Ext.apply(p, q);
          }
        }
      }
      return p;
    },
    valueFrom: function (o, i, n) {
      return Ext.isEmpty(o, n) ? i : o;
    },
    isEmpty: function (i, n) {
      return (
        i == null ||
        (!n ? i === "" : false) ||
        (Ext.isArray(i) && i.length === 0)
      );
    },
    isArray:
      "isArray" in Array
        ? Array.isArray
        : function (i) {
            return c.call(i) === "[object Array]";
          },
    isDate: function (i) {
      return c.call(i) === "[object Date]";
    },
    isMSDate: function (i) {
      if (!Ext.isString(i)) {
        return false;
      }
      return e.test(i);
    },
    isObject:
      c.call(null) === "[object Object]"
        ? function (i) {
            return (
              i !== null &&
              i !== undefined &&
              c.call(i) === "[object Object]" &&
              i.ownerDocument === undefined
            );
          }
        : function (i) {
            return c.call(i) === "[object Object]";
          },
    isSimpleObject: function (i) {
      return i instanceof Object && i.constructor === Object;
    },
    isPrimitive: function (n) {
      var i = typeof n;
      return i === "string" || i === "number" || i === "boolean";
    },
    isFunction:
      typeof document !== "undefined" &&
      typeof document.getElementsByTagName("body") === "function"
        ? function (i) {
            return !!i && c.call(i) === "[object Function]";
          }
        : function (i) {
            return !!i && typeof i === "function";
          },
    isNumber: function (i) {
      return typeof i === "number" && isFinite(i);
    },
    isNumeric: function (i) {
      return !isNaN(parseFloat(i)) && isFinite(i);
    },
    isString: function (i) {
      return typeof i === "string";
    },
    isBoolean: function (i) {
      return typeof i === "boolean";
    },
    isElement: function (i) {
      return i ? i.nodeType === 1 : false;
    },
    isTextNode: function (i) {
      return i ? i.nodeName === "#text" : false;
    },
    isDefined: function (i) {
      return typeof i !== "undefined";
    },
    isIterable: function (i) {
      if (
        !i ||
        typeof i.length !== "number" ||
        typeof i === "string" ||
        Ext.isFunction(i)
      ) {
        return false;
      }
      if (!i.propertyIsEnumerable) {
        return !!i.item;
      }
      if (i.hasOwnProperty("length") && !i.propertyIsEnumerable("length")) {
        return true;
      }
      return d.test(c.call(i));
    },
    isDebugEnabled:
      function (q, i) {
        var p = Ext.debugConfig.hooks;
        if (p.hasOwnProperty(q)) {
          return p[q];
        }
        var o = p["*"],
          n = 0;
        if (i !== undefined) {
          o = i;
        }
        if (!q) {
          return o;
        }
        for (var s in p) {
          var r = p[s];
          if (q.charAt(s.length) === ".") {
            if (q.substring(0, s.length) === s) {
              if (n < s.length) {
                n = s.length;
                o = r;
              }
            }
          }
        }
        return o;
      } || k,
    clone: function (s) {
      if (s === null || s === undefined) {
        return s;
      }
      if (s.nodeType && s.cloneNode) {
        return s.cloneNode(true);
      }
      var r = c.call(s),
        q,
        o,
        n,
        t,
        p;
      if (r === "[object Date]") {
        return new Date(s.getTime());
      }
      if (r === "[object Array]") {
        q = s.length;
        t = [];
        while (q--) {
          t[q] = Ext.clone(s[q]);
        }
      } else {
        if (r === "[object Object]" && s.constructor === Object) {
          t = {};
          for (p in s) {
            t[p] = Ext.clone(s[p]);
          }
          if (m) {
            for (o = m.length; o--; ) {
              n = m[o];
              if (s.hasOwnProperty(n)) {
                t[n] = s[n];
              }
            }
          }
        }
      }
      return t || s;
    },
    getUniqueGlobalNamespace: function () {
      var o = this.uniqueGlobalNamespace,
        n;
      if (o === undefined) {
        n = 0;
        do {
          o = "ExtBox" + ++n;
        } while (b[o] !== undefined);
        b[o] = Ext;
        this.uniqueGlobalNamespace = o;
      }
      return o;
    },
    functionFactoryCache: {},
    cacheableFunctionFactory: function () {
      var r = this,
        o = Array.prototype.slice.call(arguments),
        n = r.functionFactoryCache,
        i,
        p,
        q;
      if (Ext.isSandboxed) {
        q = o.length;
        if (q > 0) {
          q--;
          o[q] = "var Ext=window." + Ext.name + ";" + o[q];
        }
      }
      i = o.join("");
      p = n[i];
      if (!p) {
        p = Function.prototype.constructor.apply(Function.prototype, o);
        n[i] = p;
      }
      return p;
    },
    functionFactory: function () {
      var i = Array.prototype.slice.call(arguments),
        n;
      if (Ext.isSandboxed) {
        n = i.length;
        if (n > 0) {
          n--;
          i[n] = "var Ext=window." + Ext.name + ";" + i[n];
        }
      }
      return Function.prototype.constructor.apply(Function.prototype, i);
    },
    Logger: {
      log: function (n, i) {
        if (n && b.console) {
          if (!i || !(i in b.console)) {
            i = "log";
          }
          n = "[" + i.toUpperCase() + "] " + n;
          b.console[i](n);
        }
      },
      verbose: function (i) {
        this.log(i, "verbose");
      },
      info: function (i) {
        this.log(i, "info");
      },
      warn: function (i) {
        this.log(i, "warn");
      },
      error: function (i) {
        throw new Error(i);
      },
      deprecate: function (i) {
        this.log(i, "warn");
      },
    } || {
      verbose: k,
      log: k,
      info: k,
      warn: k,
      error: function (i) {
        throw new Error(i);
      },
      deprecate: k,
    },
    getElementById: function (i) {
      return document.getElementById(i);
    },
    splitAndUnescape: (function () {
      var i = {};
      return function (p, o) {
        if (!p) {
          return [];
        } else {
          if (!o) {
            return [p];
          }
        }
        var r = i[o] || (i[o] = new RegExp("\\\\" + o, "g")),
          n = [],
          s,
          q;
        s = p.split(o);
        while ((q = s.shift()) !== undefined) {
          while (q.charAt(q.length - 1) === "\\" && s.length > 0) {
            q = q + o + s.shift();
          }
          q = q.replace(r, o);
          n.push(q);
        }
        return n;
      };
    })(),
  });
  Ext.returnTrue.$nullFn = Ext.returnId.$nullFn = true;
})();
(function () {
  function a() {
    var c = this,
      b = c.sourceClass,
      e = c.sourceMethod,
      d = c.msg;
    if (e) {
      if (d) {
        e += "(): ";
        e += d;
      } else {
        e += "()";
      }
    }
    if (b) {
      e = e ? b + "." + e : b;
    }
    return e || d || "";
  }
  Ext.Error = function (c) {
    if (Ext.isString(c)) {
      c = { msg: c };
    }
    var b = new Error();
    Ext.apply(b, c);
    b.message = b.message || b.msg;
    b.toString = a;
    return b;
  };
  Ext.apply(Ext.Error, {
    ignore: false,
    raise: function (d) {
      d = d || {};
      if (Ext.isString(d)) {
        d = { msg: d };
      }
      var c = this,
        f = c.raise.caller,
        e,
        b;
      if (f === Ext.raise) {
        f = f.caller;
      }
      if (f) {
        if (!d.sourceMethod && (b = f.$name)) {
          d.sourceMethod = b;
        }
        if (!d.sourceClass && (b = f.$owner) && (b = b.$className)) {
          d.sourceClass = b;
        }
      }
      if (c.handle(d) !== true) {
        e = a.call(d);
        Ext.log({ msg: e, level: "error", dump: d, stack: true });
        throw new Ext.Error(d);
      }
    },
    handle: function () {
      return this.ignore;
    },
  });
})();
Ext.deprecated = function (b) {
  if (!b) {
    b = "";
  }
  function a() {
    Ext.raise(
      'The method "' +
        a.$owner.$className +
        "." +
        a.$name +
        '" has been removed. ' +
        b,
    );
  }
  return a;
  return Ext.emptyFn;
};
Ext.raise = function () {
  Ext.Error.raise.apply(Ext.Error, arguments);
};
(function () {
  if (typeof window === "undefined") {
    return;
  }
  var b = 0,
    a = function () {
      var c = Ext.log && Ext.log.counters,
        e = c && c.error + c.warn + c.info + c.log,
        d;
      if (e && b !== e) {
        d = [];
        if (c.error) {
          d.push("Errors: " + c.error);
        }
        if (c.warn) {
          d.push("Warnings: " + c.warn);
        }
        if (c.info) {
          d.push("Info: " + c.info);
        }
        if (c.log) {
          d.push("Log: " + c.log);
        }
        window.status = "*** " + d.join(" -- ");
        b = e;
      }
    };
  setInterval(a, 1000);
})();
Ext.Array = (function () {
  var c = Array.prototype,
    k = c.slice,
    m = (function () {
      var u = [],
        e,
        t = 20;
      if (!u.splice) {
        return false;
      }
      while (t--) {
        u.push("A");
      }
      u.splice(
        15,
        0,
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
        "F",
      );
      e = u.length;
      u.splice(13, 0, "XXX");
      if (e + 1 !== u.length) {
        return false;
      }
      return true;
    })(),
    l = "indexOf" in c,
    g = true;
  function j(w, t) {
    var e = w.length,
      v = new Array(e),
      u;
    for (u = 0; u < e; u++) {
      v[u] = u;
    }
    v.sort(function (y, x) {
      return t(w[y], w[x]) || y - x;
    });
    for (u = 0; u < e; u++) {
      v[u] = w[v[u]];
    }
    for (u = 0; u < e; u++) {
      w[u] = v[u];
    }
    return w;
  }
  try {
    if (typeof document !== "undefined") {
      k.call(document.getElementsByTagName("body"));
    }
  } catch (o) {
    g = false;
  }
  var i = function (t, e) {
      return e < 0 ? Math.max(0, t.length + e) : Math.min(t.length, e);
    },
    s = function (A, z, t, D) {
      var E = D ? D.length : 0,
        v = A.length,
        B = i(A, z);
      if (B === v) {
        if (E) {
          A.push.apply(A, D);
        }
      } else {
        var y = Math.min(t, v - B),
          C = B + y,
          u = C + E - y,
          e = v - C,
          w = v - y,
          x;
        if (u < C) {
          for (x = 0; x < e; ++x) {
            A[u + x] = A[C + x];
          }
        } else {
          if (u > C) {
            for (x = e; x--; ) {
              A[u + x] = A[C + x];
            }
          }
        }
        if (E && B === w) {
          A.length = w;
          A.push.apply(A, D);
        } else {
          A.length = w + E;
          for (x = 0; x < E; ++x) {
            A[B + x] = D[x];
          }
        }
      }
      return A;
    },
    f = function (v, e, u, t) {
      if (t && t.length) {
        if (e === 0 && !u) {
          v.unshift.apply(v, t);
        } else {
          if (e < v.length) {
            v.splice.apply(v, [e, u].concat(t));
          } else {
            v.push.apply(v, t);
          }
        }
      } else {
        v.splice(e, u);
      }
      return v;
    },
    b = function (u, e, t) {
      return s(u, e, t);
    },
    n = function (u, e, t) {
      u.splice(e, t);
      return u;
    },
    h = function (w, e, u) {
      var v = i(w, e),
        t = w.slice(e, i(w, v + u));
      if (arguments.length < 4) {
        s(w, v, u);
      } else {
        s(w, v, u, k.call(arguments, 3));
      }
      return t;
    },
    d = function (e) {
      return e.splice.apply(e, k.call(arguments, 1));
    },
    r = m ? n : b,
    p = m ? f : s,
    q = m ? d : h,
    a = {
      binarySearch: function (z, w, u, e, y) {
        var v = z.length,
          t,
          x;
        if (u instanceof Function) {
          y = u;
          u = 0;
          e = v;
        } else {
          if (e instanceof Function) {
            y = e;
            e = v;
          } else {
            if (u === undefined) {
              u = 0;
            }
            if (e === undefined) {
              e = v;
            }
            y = y || a.lexicalCompare;
          }
        }
        --e;
        while (u <= e) {
          t = (u + e) >> 1;
          x = y(w, z[t]);
          if (x >= 0) {
            u = t + 1;
          } else {
            if (x < 0) {
              e = t - 1;
            }
          }
        }
        return u;
      },
      defaultCompare: function (e, t) {
        return e < t ? -1 : e > t ? 1 : 0;
      },
      lexicalCompare: function (e, t) {
        e = String(e);
        t = String(t);
        return e < t ? -1 : e > t ? 1 : 0;
      },
      each: function (x, v, u, e) {
        x = a.from(x);
        var t,
          w = x.length;
        if (e !== true) {
          for (t = 0; t < w; t++) {
            if (v.call(u || x[t], x[t], t, x) === false) {
              return t;
            }
          }
        } else {
          for (t = w - 1; t > -1; t--) {
            if (v.call(u || x[t], x[t], t, x) === false) {
              return t;
            }
          }
        }
        return true;
      },
      forEach:
        "forEach" in c
          ? function (u, t, e) {
              return u.forEach(t, e);
            }
          : function (w, u, t) {
              for (var e = 0, v = w.length; e < v; e++) {
                u.call(t, w[e], e, w);
              }
            },
      indexOf: l
        ? function (u, e, t) {
            return c.indexOf.call(u, e, t);
          }
        : function (w, u, v) {
            var e,
              t = w.length;
            for (e = v < 0 ? Math.max(0, t + v) : v || 0; e < t; e++) {
              if (w[e] === u) {
                return e;
              }
            }
            return -1;
          },
      contains: l
        ? function (t, e) {
            return c.indexOf.call(t, e) !== -1;
          }
        : function (v, u) {
            var e, t;
            for (e = 0, t = v.length; e < t; e++) {
              if (v[e] === u) {
                return true;
              }
            }
            return false;
          },
      toArray: function (u, w, e) {
        if (!u || !u.length) {
          return [];
        }
        if (typeof u === "string") {
          u = u.split("");
        }
        if (g) {
          return k.call(u, w || 0, e || u.length);
        }
        var v = [],
          t;
        w = w || 0;
        e = e ? (e < 0 ? u.length + e : e) : u.length;
        for (t = w; t < e; t++) {
          v.push(u[t]);
        }
        return v;
      },
      pluck: function (x, e) {
        var t = [],
          u,
          w,
          v;
        for (u = 0, w = x.length; u < w; u++) {
          v = x[u];
          t.push(v[e]);
        }
        return t;
      },
      map:
        "map" in c
          ? function (u, t, e) {
              Ext.Assert.isFunction(
                t,
                "Ext.Array.map must have a callback function passed as second argument.",
              );
              return u.map(t, e);
            }
          : function (x, w, v) {
              Ext.Assert.isFunction(
                w,
                "Ext.Array.map must have a callback function passed as second argument.",
              );
              var u = [],
                e = x.length,
                t;
              for (t = 0; t < e; t++) {
                u[t] = w.call(v, x[t], t, x);
              }
              return u;
            },
      every:
        "every" in c
          ? function (u, t, e) {
              Ext.Assert.isFunction(
                t,
                "Ext.Array.every must have a callback function passed as second argument.",
              );
              return u.every(t, e);
            }
          : function (w, u, t) {
              Ext.Assert.isFunction(
                u,
                "Ext.Array.every must have a callback function passed as second argument.",
              );
              var e = 0,
                v = w.length;
              for (; e < v; ++e) {
                if (!u.call(t, w[e], e, w)) {
                  return false;
                }
              }
              return true;
            },
      some:
        "some" in c
          ? function (u, t, e) {
              Ext.Assert.isFunction(
                t,
                "Ext.Array.some must have a callback function passed as second argument.",
              );
              return u.some(t, e);
            }
          : function (w, u, t) {
              Ext.Assert.isFunction(
                u,
                "Ext.Array.some must have a callback function passed as second argument.",
              );
              var e = 0,
                v = w.length;
              for (; e < v; ++e) {
                if (u.call(t, w[e], e, w)) {
                  return true;
                }
              }
              return false;
            },
      equals: function (w, v) {
        var t = w.length,
          e = v.length,
          u;
        if (w === v) {
          return true;
        }
        if (t !== e) {
          return false;
        }
        for (u = 0; u < t; ++u) {
          if (w[u] !== v[u]) {
            return false;
          }
        }
        return true;
      },
      clean: function (w) {
        var t = [],
          e = 0,
          v = w.length,
          u;
        for (; e < v; e++) {
          u = w[e];
          if (!Ext.isEmpty(u)) {
            t.push(u);
          }
        }
        return t;
      },
      unique: function (w) {
        var v = [],
          e = 0,
          u = w.length,
          t;
        for (; e < u; e++) {
          t = w[e];
          if (a.indexOf(v, t) === -1) {
            v.push(t);
          }
        }
        return v;
      },
      filter:
        "filter" in c
          ? function (u, t, e) {
              Ext.Assert.isFunction(
                t,
                "Ext.Array.filter must have a filter function passed as second argument.",
              );
              return u.filter(t, e);
            }
          : function (x, v, u) {
              Ext.Assert.isFunction(
                v,
                "Ext.Array.filter must have a filter function passed as second argument.",
              );
              var t = [],
                e = 0,
                w = x.length;
              for (; e < w; e++) {
                if (v.call(u, x[e], e, x)) {
                  t.push(x[e]);
                }
              }
              return t;
            },
      findBy: function (w, v, u) {
        var t = 0,
          e = w.length;
        for (; t < e; t++) {
          if (v.call(u || w, w[t], t)) {
            return w[t];
          }
        }
        return null;
      },
      from: function (u, t) {
        if (u === undefined || u === null) {
          return [];
        }
        if (Ext.isArray(u)) {
          return t ? k.call(u) : u;
        }
        var e = typeof u;
        if (
          u &&
          u.length !== undefined &&
          e !== "string" &&
          (e !== "function" || !u.apply)
        ) {
          return a.toArray(u);
        }
        return [u];
      },
      remove: function (u, t) {
        var e = a.indexOf(u, t);
        if (e !== -1) {
          r(u, e, 1);
        }
        return u;
      },
      removeAt: function (v, t, u) {
        var e = v.length;
        if (t >= 0 && t < e) {
          u = u || 1;
          u = Math.min(u, e - t);
          r(v, t, u);
        }
        return v;
      },
      include: function (t, e) {
        if (!a.contains(t, e)) {
          t.push(e);
        }
      },
      clone: function (e) {
        return k.call(e);
      },
      merge: function () {
        var e = k.call(arguments),
          v = [],
          t,
          u;
        for (t = 0, u = e.length; t < u; t++) {
          v = v.concat(e[t]);
        }
        return a.unique(v);
      },
      intersect: function () {
        var e = [],
          u = k.call(arguments),
          F,
          D,
          z,
          C,
          G,
          v,
          t,
          B,
          E,
          w,
          A,
          y,
          x;
        if (!u.length) {
          return e;
        }
        F = u.length;
        for (A = G = 0; A < F; A++) {
          v = u[A];
          if (!C || v.length < C.length) {
            C = v;
            G = A;
          }
        }
        C = a.unique(C);
        r(u, G, 1);
        t = C.length;
        F = u.length;
        for (A = 0; A < t; A++) {
          B = C[A];
          w = 0;
          for (y = 0; y < F; y++) {
            D = u[y];
            z = D.length;
            for (x = 0; x < z; x++) {
              E = D[x];
              if (B === E) {
                w++;
                break;
              }
            }
          }
          if (w === F) {
            e.push(B);
          }
        }
        return e;
      },
      difference: function (t, e) {
        var y = k.call(t),
          w = y.length,
          v,
          u,
          x;
        for (v = 0, x = e.length; v < x; v++) {
          for (u = 0; u < w; u++) {
            if (y[u] === e[v]) {
              r(y, u, 1);
              u--;
              w--;
            }
          }
        }
        return y;
      },
      reduce: Array.prototype.reduce
        ? function (u, t, e) {
            if (arguments.length === 3) {
              return Array.prototype.reduce.call(u, t, e);
            }
            return Array.prototype.reduce.call(u, t);
          }
        : function (x, w, e) {
            x = Object(x);
            if (!Ext.isFunction(w)) {
              Ext.raise("Invalid parameter: expected a function.");
            }
            var u = 0,
              v = x.length >>> 0,
              t = e;
            if (arguments.length < 3) {
              while (true) {
                if (u in x) {
                  t = x[u++];
                  break;
                }
                if (++u >= v) {
                  throw new TypeError(
                    "Reduce of empty array with no initial value",
                  );
                }
              }
            }
            for (; u < v; ++u) {
              if (u in x) {
                t = w(t, x[u], u, x);
              }
            }
            return t;
          },
      slice: [1, 2].slice(1, undefined).length
        ? function (u, t, e) {
            return k.call(u, t, e);
          }
        : function (u, t, e) {
            if (typeof t === "undefined") {
              return k.call(u);
            }
            if (typeof e === "undefined") {
              return k.call(u, t);
            }
            return k.call(u, t, e);
          },
      sort: function (t, e) {
        return j(t, e || a.lexicalCompare);
      },
      flatten: function (u) {
        var t = [];
        function e(w) {
          var y, z, x;
          for (y = 0, z = w.length; y < z; y++) {
            x = w[y];
            if (Ext.isArray(x)) {
              e(x);
            } else {
              t.push(x);
            }
          }
          return t;
        }
        return e(u);
      },
      min: function (x, w) {
        var t = x[0],
          e,
          v,
          u;
        for (e = 0, v = x.length; e < v; e++) {
          u = x[e];
          if (w) {
            if (w(t, u) === 1) {
              t = u;
            }
          } else {
            if (u < t) {
              t = u;
            }
          }
        }
        return t;
      },
      max: function (x, w) {
        var e = x[0],
          t,
          v,
          u;
        for (t = 0, v = x.length; t < v; t++) {
          u = x[t];
          if (w) {
            if (w(e, u) === -1) {
              e = u;
            }
          } else {
            if (u > e) {
              e = u;
            }
          }
        }
        return e;
      },
      mean: function (e) {
        return e.length > 0 ? a.sum(e) / e.length : undefined;
      },
      sum: function (w) {
        var t = 0,
          e,
          v,
          u;
        for (e = 0, v = w.length; e < v; e++) {
          u = w[e];
          t += u;
        }
        return t;
      },
      toMap: function (w, e, u) {
        var v = {},
          t = w.length;
        if (!e) {
          while (t--) {
            v[w[t]] = t + 1;
          }
        } else {
          if (typeof e === "string") {
            while (t--) {
              v[w[t][e]] = t + 1;
            }
          } else {
            while (t--) {
              v[e.call(u, w[t])] = t + 1;
            }
          }
        }
        return v;
      },
      toValueMap: function (y, v, D, x) {
        var e = {},
          u = y.length,
          t,
          w,
          B,
          z,
          C,
          A;
        if (!v) {
          while (u--) {
            A = y[u];
            e[A] = A;
          }
        } else {
          if (!(z = typeof v !== "string")) {
            x = D;
          }
          w = x === 1;
          t = x === 2;
          while (u--) {
            A = y[u];
            C = z ? v.call(D, A) : A[v];
            if (w) {
              if (C in e) {
                e[C].push(A);
              } else {
                e[C] = [A];
              }
            } else {
              if (t && C in e) {
                if ((B = e[C]) instanceof Array) {
                  B.push(A);
                } else {
                  e[C] = [B, A];
                }
              } else {
                e[C] = A;
              }
            }
          }
        }
        return e;
      },
      _replaceSim: s,
      _spliceSim: h,
      erase: r,
      insert: function (u, t, e) {
        return p(u, t, 0, e);
      },
      move: function (x, t, v) {
        if (v === t) {
          return;
        }
        var u = x[t],
          w = v > t ? 1 : -1,
          e;
        for (e = t; e != v; e += w) {
          x[e] = x[e + w];
        }
        x[v] = u;
      },
      replace: p,
      splice: q,
      push: function (v) {
        var e = arguments.length,
          u = 1,
          t;
        if (v === undefined) {
          v = [];
        } else {
          if (!Ext.isArray(v)) {
            v = [v];
          }
        }
        for (; u < e; u++) {
          t = arguments[u];
          Array.prototype.push[Ext.isIterable(t) ? "apply" : "call"](v, t);
        }
        return v;
      },
      numericSortFn: function (t, e) {
        return t - e;
      },
    };
  Ext.each = a.each;
  a.union = a.merge;
  Ext.min = a.min;
  Ext.max = a.max;
  Ext.sum = a.sum;
  Ext.mean = a.mean;
  Ext.flatten = a.flatten;
  Ext.clean = a.clean;
  Ext.unique = a.unique;
  Ext.pluck = a.pluck;
  Ext.toArray = function () {
    return a.toArray.apply(a, arguments);
  };
  return a;
})();
Ext.Assert = {
  falsey: function (a, c) {
    if (a) {
      Ext.raise(c || "Expected a falsey value but was " + a);
    }
  },
  falseyProp: function (c, d) {
    Ext.Assert.truthy(c);
    var a = c[d];
    if (a) {
      if (c.$className) {
        d = c.$className + "#" + d;
      }
      Ext.raise("Expected a falsey value for " + d + " but was " + a);
    }
  },
  truthy: function (a, c) {
    if (!a) {
      Ext.raise(c || "Expected a truthy value but was " + typeof a);
    }
  },
  truthyProp: function (c, d) {
    Ext.Assert.truthy(c);
    var a = c[d];
    if (!a) {
      if (c.$className) {
        d = c.$className + "#" + d;
      }
      Ext.raise("Expected a truthy value for " + d + " but was " + typeof a);
    }
  },
};
(function () {
  function b(g, h) {
    var j = Ext[g],
      i;
    return function (k, l) {
      if (!j(k)) {
        Ext.raise(l || i || (i = "Expected value to be " + h));
      }
    };
  }
  function e(g, h) {
    var j = Ext[g],
      i;
    return function (k, l) {
      Ext.Assert.truthy(k);
      if (!j(k[l])) {
        Ext.raise(
          i ||
            (i =
              "Expected " +
              (k.$className ? k.$className + "#" : "") +
              l +
              " to be " +
              h),
        );
      }
    };
  }
  function f(g, h) {
    var j = Ext[g],
      i;
    return function (k, l) {
      if (j(k)) {
        Ext.raise(l || i || (i = "Expected value to NOT be " + h));
      }
    };
  }
  function a(g, h) {
    var j = Ext[g],
      i;
    return function (k, l) {
      Ext.Assert.truthy(k);
      if (j(k[l])) {
        Ext.raise(
          i ||
            (i =
              "Expected " +
              (k.$className ? k.$className + "#" : "") +
              l +
              " to NOT be " +
              h),
        );
      }
    };
  }
  for (var c in Ext) {
    if (c.substring(0, 2) == "is" && Ext.isFunction(Ext[c])) {
      var d = c.substring(2);
      Ext.Assert[c] = b(c, d);
      Ext.Assert[c + "Prop"] = e(c, d);
      Ext.Assert["isNot" + d] = f(c, d);
      Ext.Assert["isNot" + d + "Prop"] = a(c, d);
    }
  }
})();
Ext.String = (function () {
  var h =
      /^[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+|[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]+$/g,
    l = /('|\\)/g,
    b = /([-.*+?\^${}()|\[\]\/\\])/g,
    n = /^\s+|\s+$/g,
    i = /\s+/,
    k = /(^[^a-z]*|[^\w])/gi,
    e,
    a,
    g,
    d,
    f = function (p, o) {
      return e[o];
    },
    j = function (p, o) {
      return o in a ? a[o] : String.fromCharCode(parseInt(o.substr(2), 10));
    },
    c = function (p, o) {
      if (p === null || p === undefined || o === null || o === undefined) {
        return false;
      }
      return o.length <= p.length;
    },
    m;
  return (m = {
    insert: function (q, r, p) {
      if (!q) {
        return r;
      }
      if (!r) {
        return q;
      }
      var o = q.length;
      if (!p && p !== 0) {
        p = o;
      }
      if (p < 0) {
        p *= -1;
        if (p >= o) {
          p = 0;
        } else {
          p = o - p;
        }
      }
      if (p === 0) {
        q = r + q;
      } else {
        if (p >= q.length) {
          q += r;
        } else {
          q = q.substr(0, p) + r + q.substr(p);
        }
      }
      return q;
    },
    startsWith: function (q, r, p) {
      var o = c(q, r);
      if (o) {
        if (p) {
          q = q.toLowerCase();
          r = r.toLowerCase();
        }
        o = q.lastIndexOf(r, 0) === 0;
      }
      return o;
    },
    endsWith: function (r, p, q) {
      var o = c(r, p);
      if (o) {
        if (q) {
          r = r.toLowerCase();
          p = p.toLowerCase();
        }
        o = r.indexOf(p, r.length - p.length) !== -1;
      }
      return o;
    },
    createVarName: function (o) {
      return o.replace(k, "");
    },
    htmlEncode: function (o) {
      return !o ? o : String(o).replace(g, f);
    },
    htmlDecode: function (o) {
      return !o ? o : String(o).replace(d, j);
    },
    hasHtmlCharacters: function (o) {
      return g.test(o);
    },
    addCharacterEntities: function (p) {
      var o = [],
        s = [],
        q,
        r;
      for (q in p) {
        r = p[q];
        a[q] = r;
        e[r] = q;
        o.push(r);
        s.push(q);
      }
      g = new RegExp("(" + o.join("|") + ")", "g");
      d = new RegExp("(" + s.join("|") + "|&#[0-9]{1,5};)", "g");
    },
    resetCharacterEntities: function () {
      e = {};
      a = {};
      this.addCharacterEntities({
        "&amp;": "&",
        "&gt;": ">",
        "&lt;": "<",
        "&quot;": '"',
        "&#39;": "'",
      });
    },
    urlAppend: function (p, o) {
      if (!Ext.isEmpty(o)) {
        return p + (p.indexOf("?") === -1 ? "?" : "&") + o;
      }
      return p;
    },
    trim: function (o) {
      if (o) {
        o = o.replace(h, "");
      }
      return o || "";
    },
    capitalize: function (o) {
      if (o) {
        o = o.charAt(0).toUpperCase() + o.substr(1);
      }
      return o || "";
    },
    uncapitalize: function (o) {
      if (o) {
        o = o.charAt(0).toLowerCase() + o.substr(1);
      }
      return o || "";
    },
    ellipsis: function (q, p, r) {
      if (q && q.length > p) {
        if (r) {
          var s = q.substr(0, p - 2),
            o = Math.max(
              s.lastIndexOf(" "),
              s.lastIndexOf("."),
              s.lastIndexOf("!"),
              s.lastIndexOf("?"),
            );
          if (o !== -1 && o >= p - 15) {
            return s.substr(0, o) + "...";
          }
        }
        return q.substr(0, p - 3) + "...";
      }
      return q;
    },
    escapeRegex: function (o) {
      return o.replace(b, "\\$1");
    },
    createRegex: function (s, r, p, o) {
      var q = s;
      if (s != null && !s.exec) {
        q = m.escapeRegex(String(s));
        if (r !== false) {
          q = "^" + q;
        }
        if (p !== false) {
          q += "$";
        }
        q = new RegExp(q, o !== false ? "i" : "");
      }
      return q;
    },
    escape: function (o) {
      return o.replace(l, "\\$1");
    },
    toggle: function (p, q, o) {
      return p === q ? o : q;
    },
    leftPad: function (p, q, r) {
      var o = String(p);
      r = r || " ";
      while (o.length < q) {
        o = r + o;
      }
      return o;
    },
    repeat: function (s, r, p) {
      if (r < 1) {
        r = 0;
      }
      for (var o = [], q = r; q--; ) {
        o.push(s);
      }
      return o.join(p || "");
    },
    splitWords: function (o) {
      if (o && typeof o == "string") {
        return o.replace(n, "").split(i);
      }
      return o || [];
    },
  });
})();
Ext.String.resetCharacterEntities();
Ext.htmlEncode = Ext.String.htmlEncode;
Ext.htmlDecode = Ext.String.htmlDecode;
Ext.urlAppend = Ext.String.urlAppend;
Ext.Date = (function () {
  var f,
    e = Date,
    k = /(\\.)/g,
    a = /([gGhHisucUOPZ]|MS)/,
    g = /([djzmnYycU]|MS)/,
    j = /\\/gi,
    c = /\{(\d+)\}/g,
    h = new RegExp("\\/Date\\(([-+])?(\\d+)(?:[+-]\\d{4})?\\)\\/"),
    d = Ext.String.leftPad,
    b = [
      "var me = this, dt, y, m, d, h, i, s, ms, o, O, z, zz, u, v, W, year, jan4, week1monday, daysInMonth, dayMatched,",
      "def = me.defaults,",
      "from = Ext.Number.from,",
      "results = String(input).match(me.parseRegexes[{0}]);",
      "if(results){",
      "{1}",
      "if(u != null){",
      "v = new Date(u * 1000);",
      "}else{",
      "dt = me.clearTime(new Date);",
      "y = from(y, from(def.y, dt.getFullYear()));",
      "m = from(m, from(def.m - 1, dt.getMonth()));",
      "dayMatched = d !== undefined;",
      "d = from(d, from(def.d, dt.getDate()));",
      "if (!dayMatched) {",
      "dt.setDate(1);",
      "dt.setMonth(m);",
      "dt.setFullYear(y);",
      "daysInMonth = me.getDaysInMonth(dt);",
      "if (d > daysInMonth) {",
      "d = daysInMonth;",
      "}",
      "}",
      "h  = from(h, from(def.h, dt.getHours()));",
      "i  = from(i, from(def.i, dt.getMinutes()));",
      "s  = from(s, from(def.s, dt.getSeconds()));",
      "ms = from(ms, from(def.ms, dt.getMilliseconds()));",
      "if(z >= 0 && y >= 0){",
      "v = me.add(new Date(y < 100 ? 100 : y, 0, 1, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);",
      "v = !strict? v : (strict === true && (z <= 364 || (me.isLeapYear(v) && z <= 365))? me.add(v, me.DAY, z) : null);",
      "}else if(strict === true && !me.isValid(y, m + 1, d, h, i, s, ms)){",
      "v = null;",
      "}else{",
      "if (W) {",
      "year = y || (new Date()).getFullYear();",
      "jan4 = new Date(year, 0, 4, 0, 0, 0);",
      "d = jan4.getDay();",
      "week1monday = new Date(jan4.getTime() - ((d === 0 ? 6 : d - 1) * 86400000));",
      "v = Ext.Date.clearTime(new Date(week1monday.getTime() + ((W - 1) * 604800000 + 43200000)));",
      "} else {",
      "v = me.add(new Date(y < 100 ? 100 : y, m, d, h, i, s, ms), me.YEAR, y < 100 ? y - 100 : 0);",
      "}",
      "}",
      "}",
      "}",
      "if(v){",
      "if(zz != null){",
      "v = me.add(v, me.SECOND, -v.getTimezoneOffset() * 60 - zz);",
      "}else if(o){",
      "v = me.add(v, me.MINUTE, -v.getTimezoneOffset() + (sn == '+'? -1 : 1) * (hr * 60 + mn));",
      "}",
      "}",
      "return (v != null) ? v : null;",
    ].join("\n");
  if (!Date.prototype.toISOString) {
    Date.prototype.toISOString = function () {
      var l = this;
      return (
        d(l.getUTCFullYear(), 4, "0") +
        "-" +
        d(l.getUTCMonth() + 1, 2, "0") +
        "-" +
        d(l.getUTCDate(), 2, "0") +
        "T" +
        d(l.getUTCHours(), 2, "0") +
        ":" +
        d(l.getUTCMinutes(), 2, "0") +
        ":" +
        d(l.getUTCSeconds(), 2, "0") +
        "." +
        d(l.getUTCMilliseconds(), 3, "0") +
        "Z"
      );
    };
  }
  function i(m) {
    var l = Array.prototype.slice.call(arguments, 1);
    return m.replace(c, function (n, o) {
      return l[o];
    });
  }
  return (f = {
    now: e.now,
    toString: function (l) {
      if (!l) {
        l = new e();
      }
      return (
        l.getFullYear() +
        "-" +
        d(l.getMonth() + 1, 2, "0") +
        "-" +
        d(l.getDate(), 2, "0") +
        "T" +
        d(l.getHours(), 2, "0") +
        ":" +
        d(l.getMinutes(), 2, "0") +
        ":" +
        d(l.getSeconds(), 2, "0")
      );
    },
    getElapsed: function (m, l) {
      return Math.abs(m - (l || f.now()));
    },
    useStrict: false,
    formatCodeToRegex: function (m, l) {
      var n = f.parseCodes[m];
      if (n) {
        n = typeof n === "function" ? n() : n;
        f.parseCodes[m] = n;
      }
      return n
        ? Ext.applyIf({ c: n.c ? i(n.c, l || "{0}") : n.c }, n)
        : { g: 0, c: null, s: Ext.String.escapeRegex(m) };
    },
    parseFunctions: {
      MS: function (m, l) {
        var n = (m || "").match(h);
        return n ? new e(((n[1] || "") + n[2]) * 1) : null;
      },
      time: function (m, l) {
        var n = parseInt(m, 10);
        if (n || n === 0) {
          return new e(n);
        }
        return null;
      },
      timestamp: function (m, l) {
        var n = parseInt(m, 10);
        if (n || n === 0) {
          return new e(n * 1000);
        }
        return null;
      },
    },
    parseRegexes: [],
    formatFunctions: {
      MS: function () {
        return "\\/Date(" + this.getTime() + ")\\/";
      },
      time: function () {
        return this.getTime().toString();
      },
      timestamp: function () {
        return f.format(this, "U");
      },
    },
    y2kYear: 50,
    MILLI: "ms",
    SECOND: "s",
    MINUTE: "mi",
    HOUR: "h",
    DAY: "d",
    MONTH: "mo",
    YEAR: "y",
    defaults: {},
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNumbers: {
      January: 0,
      Jan: 0,
      February: 1,
      Feb: 1,
      March: 2,
      Mar: 2,
      April: 3,
      Apr: 3,
      May: 4,
      June: 5,
      Jun: 5,
      July: 6,
      Jul: 6,
      August: 7,
      Aug: 7,
      September: 8,
      Sep: 8,
      October: 9,
      Oct: 9,
      November: 10,
      Nov: 10,
      December: 11,
      Dec: 11,
    },
    defaultFormat: "m/d/Y",
    getShortMonthName: function (l) {
      return f.monthNames[l].substring(0, 3);
    },
    getShortDayName: function (l) {
      return f.dayNames[l].substring(0, 3);
    },
    getMonthNumber: function (l) {
      return f.monthNumbers[
        l.substring(0, 1).toUpperCase() + l.substring(1, 3).toLowerCase()
      ];
    },
    formatContainsHourInfo: function (l) {
      return a.test(l.replace(k, ""));
    },
    formatContainsDateInfo: function (l) {
      return g.test(l.replace(k, ""));
    },
    unescapeFormat: function (l) {
      return l.replace(j, "");
    },
    formatCodes: {
      d: "Ext.String.leftPad(m.getDate(), 2, '0')",
      D: "Ext.Date.getShortDayName(m.getDay())",
      j: "m.getDate()",
      l: "Ext.Date.dayNames[m.getDay()]",
      N: "(m.getDay() ? m.getDay() : 7)",
      S: "Ext.Date.getSuffix(m)",
      w: "m.getDay()",
      z: "Ext.Date.getDayOfYear(m)",
      W: "Ext.String.leftPad(Ext.Date.getWeekOfYear(m), 2, '0')",
      F: "Ext.Date.monthNames[m.getMonth()]",
      m: "Ext.String.leftPad(m.getMonth() + 1, 2, '0')",
      M: "Ext.Date.getShortMonthName(m.getMonth())",
      n: "(m.getMonth() + 1)",
      t: "Ext.Date.getDaysInMonth(m)",
      L: "(Ext.Date.isLeapYear(m) ? 1 : 0)",
      o: "(m.getFullYear() + (Ext.Date.getWeekOfYear(m) == 1 && m.getMonth() > 0 ? +1 : (Ext.Date.getWeekOfYear(m) >= 52 && m.getMonth() < 11 ? -1 : 0)))",
      Y: "Ext.String.leftPad(m.getFullYear(), 4, '0')",
      y: "('' + m.getFullYear()).substring(2, 4)",
      a: "(m.getHours() < 12 ? 'am' : 'pm')",
      A: "(m.getHours() < 12 ? 'AM' : 'PM')",
      g: "((m.getHours() % 12) ? m.getHours() % 12 : 12)",
      G: "m.getHours()",
      h: "Ext.String.leftPad((m.getHours() % 12) ? m.getHours() % 12 : 12, 2, '0')",
      H: "Ext.String.leftPad(m.getHours(), 2, '0')",
      i: "Ext.String.leftPad(m.getMinutes(), 2, '0')",
      s: "Ext.String.leftPad(m.getSeconds(), 2, '0')",
      u: "Ext.String.leftPad(m.getMilliseconds(), 3, '0')",
      O: "Ext.Date.getGMTOffset(m)",
      P: "Ext.Date.getGMTOffset(m, true)",
      T: "Ext.Date.getTimezone(m)",
      Z: "(m.getTimezoneOffset() * -60)",
      c: function () {
        var q = "Y-m-dTH:i:sP",
          o = [],
          n,
          m = q.length,
          p;
        for (n = 0; n < m; ++n) {
          p = q.charAt(n);
          o.push(p === "T" ? "'T'" : f.getFormatCode(p));
        }
        return o.join(" + ");
      },
      C: function () {
        return "m.toISOString()";
      },
      U: "Math.round(m.getTime() / 1000)",
    },
    isValid: function (u, l, t, q, o, p, n) {
      q = q || 0;
      o = o || 0;
      p = p || 0;
      n = n || 0;
      var r = f.add(
        new e(u < 100 ? 100 : u, l - 1, t, q, o, p, n),
        f.YEAR,
        u < 100 ? u - 100 : 0,
      );
      return (
        u === r.getFullYear() &&
        l === r.getMonth() + 1 &&
        t === r.getDate() &&
        q === r.getHours() &&
        o === r.getMinutes() &&
        p === r.getSeconds() &&
        n === r.getMilliseconds()
      );
    },
    parse: function (m, o, l) {
      var n = f.parseFunctions;
      if (n[o] == null) {
        f.createParser(o);
      }
      return n[o].call(f, m, Ext.isDefined(l) ? l : f.useStrict);
    },
    parseDate: function (m, n, l) {
      return f.parse(m, n, l);
    },
    getFormatCode: function (m) {
      var l = f.formatCodes[m];
      if (l) {
        l = typeof l === "function" ? l() : l;
        f.formatCodes[m] = l;
      }
      return l || "'" + Ext.String.escape(m) + "'";
    },
    createFormat: function (p) {
      var o = [],
        l = false,
        n = "",
        m;
      for (m = 0; m < p.length; ++m) {
        n = p.charAt(m);
        if (!l && n === "\\") {
          l = true;
        } else {
          if (l) {
            l = false;
            o.push("'" + Ext.String.escape(n) + "'");
          } else {
            if (n === "\n") {
              o.push("'\\n'");
            } else {
              o.push(f.getFormatCode(n));
            }
          }
        }
      }
      f.formatFunctions[p] = Ext.functionFactory(
        "var m=this;return " + o.join("+"),
      );
    },
    createParser: function (u) {
      var m = f.parseRegexes.length,
        v = 1,
        n = [],
        t = [],
        r = false,
        l = "",
        p = 0,
        q = u.length,
        s = [],
        o;
      for (; p < q; ++p) {
        l = u.charAt(p);
        if (!r && l === "\\") {
          r = true;
        } else {
          if (r) {
            r = false;
            t.push(Ext.String.escape(l));
          } else {
            o = f.formatCodeToRegex(l, v);
            v += o.g;
            t.push(o.s);
            if (o.g && o.c) {
              if (o.calcAtEnd) {
                s.push(o.c);
              } else {
                n.push(o.c);
              }
            }
          }
        }
      }
      n = n.concat(s);
      f.parseRegexes[m] = new RegExp("^" + t.join("") + "$", "i");
      f.parseFunctions[u] = Ext.functionFactory(
        "input",
        "strict",
        i(b, m, n.join("")),
      );
    },
    parseCodes: {
      d: {
        g: 1,
        c: "d = parseInt(results[{0}], 10);\n",
        s: "(3[0-1]|[1-2][0-9]|0[1-9])",
      },
      j: {
        g: 1,
        c: "d = parseInt(results[{0}], 10);\n",
        s: "(3[0-1]|[1-2][0-9]|[1-9])",
      },
      D: function () {
        for (var l = [], m = 0; m < 7; l.push(f.getShortDayName(m)), ++m) {}
        return { g: 0, c: null, s: "(?:" + l.join("|") + ")" };
      },
      l: function () {
        return { g: 0, c: null, s: "(?:" + f.dayNames.join("|") + ")" };
      },
      N: { g: 0, c: null, s: "[1-7]" },
      S: { g: 0, c: null, s: "(?:st|nd|rd|th)" },
      w: { g: 0, c: null, s: "[0-6]" },
      z: { g: 1, c: "z = parseInt(results[{0}], 10);\n", s: "(\\d{1,3})" },
      W: { g: 1, c: "W = parseInt(results[{0}], 10);\n", s: "(\\d{2})" },
      F: function () {
        return {
          g: 1,
          c: "m = parseInt(me.getMonthNumber(results[{0}]), 10);\n",
          s: "(" + f.monthNames.join("|") + ")",
        };
      },
      M: function () {
        for (var l = [], m = 0; m < 12; l.push(f.getShortMonthName(m)), ++m) {}
        return Ext.applyIf(
          { s: "(" + l.join("|") + ")" },
          f.formatCodeToRegex("F"),
        );
      },
      m: {
        g: 1,
        c: "m = parseInt(results[{0}], 10) - 1;\n",
        s: "(1[0-2]|0[1-9])",
      },
      n: {
        g: 1,
        c: "m = parseInt(results[{0}], 10) - 1;\n",
        s: "(1[0-2]|[1-9])",
      },
      t: { g: 0, c: null, s: "(?:\\d{2})" },
      L: { g: 0, c: null, s: "(?:1|0)" },
      o: { g: 1, c: "y = parseInt(results[{0}], 10);\n", s: "(\\d{4})" },
      Y: { g: 1, c: "y = parseInt(results[{0}], 10);\n", s: "(\\d{4})" },
      y: {
        g: 1,
        c: "var ty = parseInt(results[{0}], 10);\ny = ty > me.y2kYear ? 1900 + ty : 2000 + ty;\n",
        s: "(\\d{2})",
      },
      a: {
        g: 1,
        c: "if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
        s: "(am|pm|AM|PM)",
        calcAtEnd: true,
      },
      A: {
        g: 1,
        c: "if (/(am)/i.test(results[{0}])) {\nif (!h || h == 12) { h = 0; }\n} else { if (!h || h < 12) { h = (h || 0) + 12; }}",
        s: "(AM|PM|am|pm)",
        calcAtEnd: true,
      },
      g: { g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(1[0-2]|[0-9])" },
      G: {
        g: 1,
        c: "h = parseInt(results[{0}], 10);\n",
        s: "(2[0-3]|1[0-9]|[0-9])",
      },
      h: { g: 1, c: "h = parseInt(results[{0}], 10);\n", s: "(1[0-2]|0[1-9])" },
      H: {
        g: 1,
        c: "h = parseInt(results[{0}], 10);\n",
        s: "(2[0-3]|[0-1][0-9])",
      },
      i: { g: 1, c: "i = parseInt(results[{0}], 10);\n", s: "([0-5][0-9])" },
      s: { g: 1, c: "s = parseInt(results[{0}], 10);\n", s: "([0-5][0-9])" },
      u: {
        g: 1,
        c: "ms = results[{0}]; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",
        s: "(\\d+)",
      },
      O: {
        g: 1,
        c: [
          "o = results[{0}];",
          "var sn = o.substring(0,1),",
          "hr = o.substring(1,3)*1 + Math.floor(o.substring(3,5) / 60),",
          "mn = o.substring(3,5) % 60;",
          "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n",
        ].join("\n"),
        s: "([+-]\\d{4})",
      },
      P: {
        g: 1,
        c: [
          "o = results[{0}];",
          "var sn = o.substring(0,1),",
          "hr = o.substring(1,3)*1 + Math.floor(o.substring(4,6) / 60),",
          "mn = o.substring(4,6) % 60;",
          "o = ((-12 <= (hr*60 + mn)/60) && ((hr*60 + mn)/60 <= 14))? (sn + Ext.String.leftPad(hr, 2, '0') + Ext.String.leftPad(mn, 2, '0')) : null;\n",
        ].join("\n"),
        s: "([+-]\\d{2}:\\d{2})",
      },
      T: { g: 0, c: null, s: "[A-Z]{1,5}" },
      Z: {
        g: 1,
        c: "zz = results[{0}] * 1;\nzz = (-43200 <= zz && zz <= 50400)? zz : null;\n",
        s: "([+-]?\\d{1,5})",
      },
      c: function () {
        var o = [],
          m = [
            f.formatCodeToRegex("Y", 1),
            f.formatCodeToRegex("m", 2),
            f.formatCodeToRegex("d", 3),
            f.formatCodeToRegex("H", 4),
            f.formatCodeToRegex("i", 5),
            f.formatCodeToRegex("s", 6),
            {
              c: "ms = results[7] || '0'; ms = parseInt(ms, 10)/Math.pow(10, ms.length - 3);\n",
            },
            {
              c: [
                "if(results[8]) {",
                "if(results[8] == 'Z'){",
                "zz = 0;",
                "}else if (results[8].indexOf(':') > -1){",
                f.formatCodeToRegex("P", 8).c,
                "}else{",
                f.formatCodeToRegex("O", 8).c,
                "}",
                "}",
              ].join("\n"),
            },
          ],
          p,
          n;
        for (p = 0, n = m.length; p < n; ++p) {
          o.push(m[p].c);
        }
        return {
          g: 1,
          c: o.join(""),
          s: [
            m[0].s,
            "(?:",
            "-",
            m[1].s,
            "(?:",
            "-",
            m[2].s,
            "(?:",
            "(?:T| )?",
            m[3].s,
            ":",
            m[4].s,
            "(?::",
            m[5].s,
            ")?",
            "(?:(?:\\.|,)(\\d+))?",
            "(Z|(?:[-+]\\d{2}(?::)?\\d{2}))?",
            ")?",
            ")?",
            ")?",
          ].join(""),
        };
      },
      U: { g: 1, c: "u = parseInt(results[{0}], 10);\n", s: "(-?\\d+)" },
    },
    dateFormat: function (l, m) {
      return f.format(l, m);
    },
    isEqual: function (m, l) {
      if (m && l) {
        return m.getTime() === l.getTime();
      }
      return !(m || l);
    },
    format: function (m, n) {
      var l = f.formatFunctions;
      if (!Ext.isDate(m)) {
        return "";
      }
      if (l[n] == null) {
        f.createFormat(n);
      }
      return l[n].call(m) + "";
    },
    getTimezone: function (l) {
      return l
        .toString()
        .replace(
          /^.* (?:\((.*)\)|([A-Z]{1,5})(?:[\-+][0-9]{4})?(?: -?\d+)?)$/,
          "$1$2",
        )
        .replace(/[^A-Z]/g, "");
    },
    getGMTOffset: function (l, m) {
      var n = l.getTimezoneOffset();
      return (
        (n > 0 ? "-" : "+") +
        Ext.String.leftPad(Math.floor(Math.abs(n) / 60), 2, "0") +
        (m ? ":" : "") +
        Ext.String.leftPad(Math.abs(n % 60), 2, "0")
      );
    },
    getDayOfYear: function (o) {
      var n = 0,
        q = f.clone(o),
        l = o.getMonth(),
        p;
      for (p = 0, q.setDate(1), q.setMonth(0); p < l; q.setMonth(++p)) {
        n += f.getDaysInMonth(q);
      }
      return n + o.getDate() - 1;
    },
    getWeekOfYear: (function () {
      var l = 86400000,
        m = 7 * l;
      return function (o) {
        var p = e.UTC(o.getFullYear(), o.getMonth(), o.getDate() + 3) / l,
          n = Math.floor(p / 7),
          q = new e(n * m).getUTCFullYear();
        return n - Math.floor(e.UTC(q, 0, 7) / m) + 1;
      };
    })(),
    isLeapYear: function (l) {
      var m = l.getFullYear();
      return !!((m & 3) === 0 && (m % 100 || (m % 400 === 0 && m)));
    },
    getFirstDayOfMonth: function (m) {
      var l = (m.getDay() - (m.getDate() - 1)) % 7;
      return l < 0 ? l + 7 : l;
    },
    getLastDayOfMonth: function (l) {
      return f.getLastDateOfMonth(l).getDay();
    },
    getFirstDateOfMonth: function (l) {
      return new e(l.getFullYear(), l.getMonth(), 1);
    },
    getLastDateOfMonth: function (l) {
      return new e(l.getFullYear(), l.getMonth(), f.getDaysInMonth(l));
    },
    getDaysInMonth: (function () {
      var l = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return function (o) {
        var n = o.getMonth();
        return n === 1 && f.isLeapYear(o) ? 29 : l[n];
      };
    })(),
    getSuffix: function (l) {
      switch (l.getDate()) {
        case 1:
        case 21:
        case 31:
          return "st";
        case 2:
        case 22:
          return "nd";
        case 3:
        case 23:
          return "rd";
        default:
          return "th";
      }
    },
    clone: function (l) {
      return new e(l.getTime());
    },
    isDST: function (l) {
      return (
        new e(l.getFullYear(), 0, 1).getTimezoneOffset() !==
        l.getTimezoneOffset()
      );
    },
    clearTime: function (l, p) {
      if (p) {
        return f.clearTime(f.clone(l));
      }
      var n = l.getDate(),
        m,
        o;
      l.setHours(0);
      l.setMinutes(0);
      l.setSeconds(0);
      l.setMilliseconds(0);
      if (l.getDate() !== n) {
        for (
          m = 1, o = f.add(l, f.HOUR, m);
          o.getDate() !== n;
          m++, o = f.add(l, f.HOUR, m)
        ) {}
        l.setDate(n);
        l.setHours(o.getHours());
      }
      return l;
    },
    add: function (n, m, q) {
      var r = f.clone(n),
        l,
        p,
        o = 0;
      if (!m || q === 0) {
        return r;
      }
      p = q - parseInt(q, 10);
      q = parseInt(q, 10);
      if (q) {
        switch (m.toLowerCase()) {
          case f.MILLI:
            r.setTime(r.getTime() + q);
            break;
          case f.SECOND:
            r.setTime(r.getTime() + q * 1000);
            break;
          case f.MINUTE:
            r.setTime(r.getTime() + q * 60 * 1000);
            break;
          case f.HOUR:
            r.setTime(r.getTime() + q * 60 * 60 * 1000);
            break;
          case f.DAY:
            r.setDate(r.getDate() + q);
            break;
          case f.MONTH:
            l = n.getDate();
            if (l > 28) {
              l = Math.min(
                l,
                f
                  .getLastDateOfMonth(
                    f.add(f.getFirstDateOfMonth(n), f.MONTH, q),
                  )
                  .getDate(),
              );
            }
            r.setDate(l);
            r.setMonth(n.getMonth() + q);
            break;
          case f.YEAR:
            l = n.getDate();
            if (l > 28) {
              l = Math.min(
                l,
                f
                  .getLastDateOfMonth(
                    f.add(f.getFirstDateOfMonth(n), f.YEAR, q),
                  )
                  .getDate(),
              );
            }
            r.setDate(l);
            r.setFullYear(n.getFullYear() + q);
            break;
        }
      }
      if (p) {
        switch (m.toLowerCase()) {
          case f.MILLI:
            o = 1;
            break;
          case f.SECOND:
            o = 1000;
            break;
          case f.MINUTE:
            o = 1000 * 60;
            break;
          case f.HOUR:
            o = 1000 * 60 * 60;
            break;
          case f.DAY:
            o = 1000 * 60 * 60 * 24;
            break;
          case f.MONTH:
            l = f.getDaysInMonth(r);
            o = 1000 * 60 * 60 * 24 * l;
            break;
          case f.YEAR:
            l = f.isLeapYear(r) ? 366 : 365;
            o = 1000 * 60 * 60 * 24 * l;
            break;
        }
        if (o) {
          r.setTime(r.getTime() + o * p);
        }
      }
      return r;
    },
    subtract: function (m, l, n) {
      return f.add(m, l, -n);
    },
    between: function (m, o, l) {
      var n = m.getTime();
      return o.getTime() <= n && n <= l.getTime();
    },
    compat: function () {
      var t,
        u = [
          "useStrict",
          "formatCodeToRegex",
          "parseFunctions",
          "parseRegexes",
          "formatFunctions",
          "y2kYear",
          "MILLI",
          "SECOND",
          "MINUTE",
          "HOUR",
          "DAY",
          "MONTH",
          "YEAR",
          "defaults",
          "dayNames",
          "monthNames",
          "monthNumbers",
          "getShortMonthName",
          "getShortDayName",
          "getMonthNumber",
          "formatCodes",
          "isValid",
          "parseDate",
          "getFormatCode",
          "createFormat",
          "createParser",
          "parseCodes",
        ],
        r = [
          "dateFormat",
          "format",
          "getTimezone",
          "getGMTOffset",
          "getDayOfYear",
          "getWeekOfYear",
          "isLeapYear",
          "getFirstDayOfMonth",
          "getLastDayOfMonth",
          "getDaysInMonth",
          "getSuffix",
          "clone",
          "isDST",
          "clearTime",
          "add",
          "between",
        ],
        m = u.length,
        l = r.length,
        o,
        q,
        n;
      for (n = 0; n < m; n++) {
        o = u[n];
        e[o] = f[o];
      }
      for (t = 0; t < l; t++) {
        q = r[t];
        e.prototype[q] = function () {
          var p = Array.prototype.slice.call(arguments);
          p.unshift(this);
          return f[q].apply(f, p);
        };
      }
    },
    diff: function (m, l, o) {
      var n,
        p = +l - m;
      switch (o) {
        case f.MILLI:
          return p;
        case f.SECOND:
          return Math.floor(p / 1000);
        case f.MINUTE:
          return Math.floor(p / 60000);
        case f.HOUR:
          return Math.floor(p / 3600000);
        case f.DAY:
          return Math.floor(p / 86400000);
        case "w":
          return Math.floor(p / 604800000);
        case f.MONTH:
          n =
            l.getFullYear() * 12 +
            l.getMonth() -
            (m.getFullYear() * 12 + m.getMonth());
          if (f.add(m, o, n) > l) {
            return n - 1;
          }
          return n;
        case f.YEAR:
          n = l.getFullYear() - m.getFullYear();
          if (f.add(m, o, n) > l) {
            return n - 1;
          } else {
            return n;
          }
      }
    },
    align: function (m, o, n) {
      var l = new e(+m);
      switch (o.toLowerCase()) {
        case f.MILLI:
          return l;
        case f.SECOND:
          l.setUTCSeconds(l.getUTCSeconds() - (l.getUTCSeconds() % n));
          l.setUTCMilliseconds(0);
          return l;
        case f.MINUTE:
          l.setUTCMinutes(l.getUTCMinutes() - (l.getUTCMinutes() % n));
          l.setUTCSeconds(0);
          l.setUTCMilliseconds(0);
          return l;
        case f.HOUR:
          l.setUTCHours(l.getUTCHours() - (l.getUTCHours() % n));
          l.setUTCMinutes(0);
          l.setUTCSeconds(0);
          l.setUTCMilliseconds(0);
          return l;
        case f.DAY:
          if (n === 7 || n === 14) {
            l.setUTCDate(l.getUTCDate() - l.getUTCDay() + 1);
          }
          l.setUTCHours(0);
          l.setUTCMinutes(0);
          l.setUTCSeconds(0);
          l.setUTCMilliseconds(0);
          return l;
        case f.MONTH:
          l.setUTCMonth(l.getUTCMonth() - ((l.getUTCMonth() - 1) % n), 1);
          l.setUTCHours(0);
          l.setUTCMinutes(0);
          l.setUTCSeconds(0);
          l.setUTCMilliseconds(0);
          return l;
        case f.YEAR:
          l.setUTCFullYear(l.getUTCFullYear() - (l.getUTCFullYear() % n), 1, 1);
          l.setUTCHours(0);
          l.setUTCMinutes(0);
          l.setUTCSeconds(0);
          l.setUTCMilliseconds(0);
          return m;
      }
    },
  });
})();
Ext.Function = (function () {
  var b = 0,
    l,
    e = [],
    m = [],
    h = 0,
    i = {},
    g = window,
    d = Ext.global,
    f = !!(d.setImmediate && d.clearImmediate),
    k =
      g.requestAnimationFrame ||
      g.webkitRequestAnimationFrame ||
      g.mozRequestAnimationFrame ||
      g.oRequestAnimationFrame ||
      function (q) {
        var n = Ext.now(),
          o = Math.max(0, 16 - (n - b)),
          p = g.setTimeout(function () {
            q(n + o);
          }, o);
        b = n + o;
        return p;
      },
    c = function () {
      var n = e.length,
        q,
        o,
        p;
      l = null;
      for (o = 0; o < n; o++) {
        p = e[o];
        q = p[3];
        if (i[q]) {
          p[0].apply(p[1] || d, p[2] || m);
          delete i[q];
        }
      }
      e = e.slice(n);
    },
    a = function () {
      Ext.elevateFunction(c);
    },
    j = {
      flexSetter: function (n) {
        return function (p, r) {
          var o, q;
          if (p !== null) {
            if (typeof p !== "string") {
              for (o in p) {
                if (p.hasOwnProperty(o)) {
                  n.call(this, o, p[o]);
                }
              }
              if (Ext.enumerables) {
                for (q = Ext.enumerables.length; q--; ) {
                  o = Ext.enumerables[q];
                  if (p.hasOwnProperty(o)) {
                    n.call(this, o, p[o]);
                  }
                }
              }
            } else {
              n.call(this, p, r);
            }
          }
          return this;
        };
      },
      bind: function (q, p, o, n) {
        if (arguments.length === 2) {
          return function () {
            return q.apply(p, arguments);
          };
        }
        var s = q,
          r = Array.prototype.slice;
        return function () {
          var t = o || arguments;
          if (n === true) {
            t = r.call(arguments, 0);
            t = t.concat(o);
          } else {
            if (typeof n === "number") {
              t = r.call(arguments, 0);
              Ext.Array.insert(t, n, o);
            }
          }
          return s.apply(p || d, t);
        };
      },
      bindCallback: function (r, q, p, o, n) {
        return function () {
          var s = Ext.Array.slice(arguments);
          return Ext.callback(r, q, p ? p.concat(s) : s, o, n);
        };
      },
      pass: function (p, n, o) {
        if (!Ext.isArray(n)) {
          if (Ext.isIterable(n)) {
            n = Ext.Array.clone(n);
          } else {
            n = n !== undefined ? [n] : [];
          }
        }
        return function () {
          var q = n.slice();
          q.push.apply(q, arguments);
          return p.apply(o || this, q);
        };
      },
      alias: function (o, n) {
        return function () {
          return o[n].apply(o, arguments);
        };
      },
      clone: function (n) {
        return function () {
          return n.apply(this, arguments);
        };
      },
      createInterceptor: function (q, p, o, n) {
        if (!Ext.isFunction(p)) {
          return q;
        } else {
          n = Ext.isDefined(n) ? n : null;
          return function () {
            var s = this,
              r = arguments;
            return p.apply(o || s || d, r) !== false ? q.apply(s || d, r) : n;
          };
        }
      },
      createDelayed: function (r, p, q, o, n) {
        if (q || o) {
          r = Ext.Function.bind(r, q, o, n);
        }
        return function () {
          var t = this,
            s = Array.prototype.slice.call(arguments);
          setTimeout(function () {
            if (Ext.elevateFunction) {
              Ext.elevateFunction(r, t, s);
            } else {
              r.apply(t, s);
            }
          }, p);
        };
      },
      defer: function (r, p, q, o, n) {
        r = Ext.Function.bind(r, q, o, n);
        if (p > 0) {
          return setTimeout(function () {
            if (Ext.elevateFunction) {
              Ext.elevateFunction(r);
            } else {
              r();
            }
          }, p);
        }
        r();
        return 0;
      },
      interval: function (r, p, q, o, n) {
        r = Ext.Function.bind(r, q, o, n);
        return setInterval(function () {
          if (Ext.elevateFunction) {
            Ext.elevateFunction(r);
          } else {
            r();
          }
        }, p);
      },
      createSequence: function (o, p, n) {
        if (!p) {
          return o;
        } else {
          return function () {
            var q = o.apply(this, arguments);
            p.apply(n || this, arguments);
            return q;
          };
        }
      },
      createBuffered: function (r, o, q, p) {
        var n;
        return function () {
          var t = p || Array.prototype.slice.call(arguments, 0),
            s = q || this;
          if (n) {
            clearTimeout(n);
          }
          n = setTimeout(function () {
            if (Ext.elevateFunction) {
              Ext.elevateFunction(r, s, t);
            } else {
              r.apply(s, t);
            }
          }, o);
        };
      },
      createAnimationFrame: function (q, p, o, r) {
        var n;
        r = r || 3;
        return function () {
          var s = o || Array.prototype.slice.call(arguments, 0);
          p = p || this;
          if (r === 3 && n) {
            j.cancelAnimationFrame(n);
          }
          if (r & 1 || !n) {
            n = j.requestAnimationFrame(function () {
              n = null;
              q.apply(p, s);
            });
          }
        };
      },
      requestAnimationFrame: function (q, p, n) {
        var r = ++h,
          o = Array.prototype.slice.call(arguments, 0);
        o[3] = r;
        i[r] = 1;
        e.push(o);
        if (!l) {
          l = k(Ext.elevateFunction ? a : c);
        }
        return r;
      },
      cancelAnimationFrame: function (n) {
        delete i[n];
      },
      createThrottled: function (r, o, q) {
        var s = 0,
          n,
          p,
          u,
          t = function () {
            if (Ext.elevateFunction) {
              Ext.elevateFunction(r, q, p);
            } else {
              r.apply(q, p);
            }
            s = Ext.now();
            u = null;
          };
        return function () {
          if (!q) {
            q = this;
          }
          n = Ext.now() - s;
          p = arguments;
          if (n >= o) {
            clearTimeout(u);
            t();
          } else {
            if (!u) {
              u = Ext.defer(t, o - n);
            }
          }
        };
      },
      createBarrier: function (p, o, n) {
        return function () {
          if (!--p) {
            o.apply(n, arguments);
          }
        };
      },
      interceptBefore: function (o, n, q, p) {
        var r = o[n] || Ext.emptyFn;
        return (o[n] = function () {
          var s = q.apply(p || this, arguments);
          r.apply(this, arguments);
          return s;
        });
      },
      interceptAfter: function (o, n, q, p) {
        var r = o[n] || Ext.emptyFn;
        return (o[n] = function () {
          r.apply(this, arguments);
          return q.apply(p || this, arguments);
        });
      },
      makeCallback: function (o, n) {
        if (!n[o]) {
          if (n.$className) {
            Ext.raise('No method "' + o + '" on ' + n.$className);
          }
          Ext.raise('No method "' + o + '"');
        }
        return function () {
          return n[o].apply(n, arguments);
        };
      },
      memoize: function (q, p, n) {
        var o = {},
          r = n && Ext.isFunction(n);
        return function (t) {
          var s = r ? n.apply(p, arguments) : t;
          if (!(s in o)) {
            o[s] = q.apply(p, arguments);
          }
          return o[s];
        };
      },
    };
  (Ext.asap = f
    ? function (o, n, p) {
        if (n != null || p != null) {
          o = j.bind(o, n, p);
        }
        return setImmediate(function () {
          if (Ext.elevateFunction) {
            Ext.elevateFunction(o);
          } else {
            o();
          }
        });
      }
    : function (o, n, p) {
        if (n != null || p != null) {
          o = j.bind(o, n, p);
        }
        return setTimeout(
          function () {
            if (Ext.elevateFunction) {
              Ext.elevateFunction(o);
            } else {
              o();
            }
          },
          0,
          true,
        );
      }),
    (Ext.asapCancel = f ? clearImmediate : clearTimeout);
  Ext.defer = j.defer;
  Ext.interval = j.interval;
  Ext.pass = j.pass;
  Ext.bind = j.bind;
  Ext.deferCallback = j.requestAnimationFrame;
  return j;
})();
Ext.Number = new (function () {
  var d = this,
    c = (0.9).toFixed() !== "1",
    b = Math,
    a = { count: false, inclusive: false, wrap: true };
  Ext.apply(d, {
    Clip: {
      DEFAULT: a,
      COUNT: Ext.applyIf({ count: true }, a),
      INCLUSIVE: Ext.applyIf({ inclusive: true }, a),
      NOWRAP: Ext.applyIf({ wrap: false }, a),
    },
    clipIndices: function (l, m, g) {
      g = g || a;
      var f = 0,
        k = g.wrap,
        j,
        e,
        h;
      m = m || [];
      for (h = 0; h < 2; ++h) {
        j = e;
        e = m[h];
        if (e == null) {
          e = f;
        } else {
          if (h && g.count) {
            e += j;
            e = e > l ? l : e;
          } else {
            if (k) {
              e = e < 0 ? l + e : e;
            }
            if (h && g.inclusive) {
              ++e;
            }
            e = e < 0 ? 0 : e > l ? l : e;
          }
        }
        f = l;
      }
      m[0] = j;
      m[1] = e < j ? j : e;
      return m;
    },
    constrain: function (h, g, f) {
      var e = parseFloat(h);
      if (g === null) {
        g = h;
      }
      if (f === null) {
        f = h;
      }
      return e < g ? g : e > f ? f : e;
    },
    snap: function (h, f, g, i) {
      var e;
      if (h === undefined || h < g) {
        return g || 0;
      }
      if (f) {
        e = h % f;
        if (e !== 0) {
          h -= e;
          if (e * 2 >= f) {
            h += f;
          } else {
            if (e * 2 < -f) {
              h -= f;
            }
          }
        }
      }
      return d.constrain(h, g, i);
    },
    snapInRange: function (h, e, g, i) {
      var f;
      g = g || 0;
      if (h === undefined || h < g) {
        return g;
      }
      if (e && (f = (h - g) % e)) {
        h -= f;
        f *= 2;
        if (f >= e) {
          h += e;
        }
      }
      if (i !== undefined) {
        if (h > (i = d.snapInRange(i, e, g))) {
          h = i;
        }
      }
      return h;
    },
    sign: function (e) {
      e = +e;
      if (e === 0 || isNaN(e)) {
        return e;
      }
      return e > 0 ? 1 : -1;
    },
    toFixed: c
      ? function (g, e) {
          e = e || 0;
          var f = b.pow(10, e);
          return (b.round(g * f) / f).toFixed(e);
        }
      : function (f, e) {
          return f.toFixed(e);
        },
    from: function (f, e) {
      if (isFinite(f)) {
        f = parseFloat(f);
      }
      return !isNaN(f) ? f : e;
    },
    randomInt: function (f, e) {
      return b.floor(b.random() * (e - f + 1) + f);
    },
    correctFloat: function (e) {
      return parseFloat(e.toPrecision(14));
    },
  });
  Ext.num = function () {
    return d.from.apply(this, arguments);
  };
})();
(function () {
  var d = function () {},
    b = /^\?/,
    c = /(\[):?([^\]]*)\]/g,
    a = /^([^\[]+)/,
    f = /\+/g,
    e = (Ext.Object = {
      chain:
        Object.create ||
        function (h) {
          d.prototype = h;
          var g = new d();
          d.prototype = null;
          return g;
        },
      clear: function (g) {
        for (var h in g) {
          delete g[h];
        }
        return g;
      },
      freeze: Object.freeze
        ? function (i, g) {
            if (i && typeof i === "object" && !Object.isFrozen(i)) {
              Object.freeze(i);
              if (g) {
                for (var h in i) {
                  e.freeze(i[h], g);
                }
              }
            }
            return i;
          }
        : Ext.identityFn,
      toQueryObjects: function (j, n, h) {
        var g = e.toQueryObjects,
          m = [],
          k,
          l;
        if (Ext.isArray(n)) {
          for (k = 0, l = n.length; k < l; k++) {
            if (h) {
              m = m.concat(g(j + "[" + k + "]", n[k], true));
            } else {
              m.push({ name: j, value: n[k] });
            }
          }
        } else {
          if (Ext.isObject(n)) {
            for (k in n) {
              if (n.hasOwnProperty(k)) {
                if (h) {
                  m = m.concat(g(j + "[" + k + "]", n[k], true));
                } else {
                  m.push({ name: j, value: n[k] });
                }
              }
            }
          } else {
            m.push({ name: j, value: n });
          }
        }
        return m;
      },
      toQueryString: function (l, h) {
        var m = [],
          k = [],
          o,
          n,
          p,
          g,
          q;
        for (o in l) {
          if (l.hasOwnProperty(o)) {
            m = m.concat(e.toQueryObjects(o, l[o], h));
          }
        }
        for (n = 0, p = m.length; n < p; n++) {
          g = m[n];
          q = g.value;
          if (Ext.isEmpty(q)) {
            q = "";
          } else {
            if (Ext.isDate(q)) {
              q = Ext.Date.toString(q);
            }
          }
          k.push(
            encodeURIComponent(g.name) + "=" + encodeURIComponent(String(q)),
          );
        }
        return k.join("&");
      },
      fromQueryString: function (h, u) {
        var p = h.replace(b, "").split("&"),
          x = {},
          v,
          n,
          z,
          q,
          t,
          l,
          r,
          s,
          g,
          m,
          w,
          o,
          y,
          k;
        for (t = 0, l = p.length; t < l; t++) {
          r = p[t];
          if (r.length > 0) {
            n = r.split("=");
            z = n[0];
            z = z.replace(f, "%20");
            z = decodeURIComponent(z);
            q = n[1];
            if (q !== undefined) {
              q = q.replace(f, "%20");
              q = decodeURIComponent(q);
            } else {
              q = "";
            }
            if (!u) {
              if (x.hasOwnProperty(z)) {
                if (!Ext.isArray(x[z])) {
                  x[z] = [x[z]];
                }
                x[z].push(q);
              } else {
                x[z] = q;
              }
            } else {
              m = z.match(c);
              w = z.match(a);
              if (!w) {
                throw new Error(
                  '[Ext.Object.fromQueryString] Malformed query string given, failed parsing name from "' +
                    r +
                    '"',
                );
              }
              z = w[0];
              o = [];
              if (m === null) {
                x[z] = q;
                continue;
              }
              for (s = 0, g = m.length; s < g; s++) {
                y = m[s];
                y = y.length === 2 ? "" : y.substring(1, y.length - 1);
                o.push(y);
              }
              o.unshift(z);
              v = x;
              for (s = 0, g = o.length; s < g; s++) {
                y = o[s];
                if (s === g - 1) {
                  if (Ext.isArray(v) && y === "") {
                    v.push(q);
                  } else {
                    v[y] = q;
                  }
                } else {
                  if (v[y] === undefined || typeof v[y] === "string") {
                    k = o[s + 1];
                    v[y] = Ext.isNumeric(k) || k === "" ? [] : {};
                  }
                  v = v[y];
                }
              }
            }
          }
        }
        return x;
      },
      each: function (h, l, k) {
        var g = Ext.enumerables,
          j,
          m;
        if (h) {
          k = k || h;
          for (m in h) {
            if (h.hasOwnProperty(m)) {
              if (l.call(k, m, h[m], h) === false) {
                return;
              }
            }
          }
          if (g) {
            for (j = g.length; j--; ) {
              if (h.hasOwnProperty((m = g[j]))) {
                if (l.call(k, m, h[m], h) === false) {
                  return;
                }
              }
            }
          }
        }
      },
      eachValue: function (h, l, k) {
        var g = Ext.enumerables,
          j,
          m;
        k = k || h;
        for (m in h) {
          if (h.hasOwnProperty(m)) {
            if (l.call(k, h[m]) === false) {
              return;
            }
          }
        }
        if (g) {
          for (j = g.length; j--; ) {
            if (h.hasOwnProperty((m = g[j]))) {
              if (l.call(k, h[m]) === false) {
                return;
              }
            }
          }
        }
      },
      merge: function (n) {
        var l = 1,
          m = arguments.length,
          g = e.merge,
          j = Ext.clone,
          k,
          p,
          o,
          h;
        for (; l < m; l++) {
          k = arguments[l];
          for (p in k) {
            o = k[p];
            if (o && o.constructor === Object) {
              h = n[p];
              if (h && h.constructor === Object) {
                g(h, o);
              } else {
                n[p] = j(o);
              }
            } else {
              n[p] = o;
            }
          }
        }
        return n;
      },
      mergeIf: function (g) {
        var l = 1,
          m = arguments.length,
          j = Ext.clone,
          h,
          k,
          n;
        for (; l < m; l++) {
          h = arguments[l];
          for (k in h) {
            if (!(k in g)) {
              n = h[k];
              if (n && n.constructor === Object) {
                g[k] = j(n);
              } else {
                g[k] = n;
              }
            }
          }
        }
        return g;
      },
      getAllKeys: function (g) {
        var h = [],
          i;
        for (i in g) {
          h.push(i);
        }
        return h;
      },
      getKey: function (g, i) {
        for (var h in g) {
          if (g.hasOwnProperty(h) && g[h] === i) {
            return h;
          }
        }
        return null;
      },
      getValues: function (h) {
        var g = [],
          i;
        for (i in h) {
          if (h.hasOwnProperty(i)) {
            g.push(h[i]);
          }
        }
        return g;
      },
      getKeys:
        typeof Object.keys == "function"
          ? function (g) {
              if (!g) {
                return [];
              }
              return Object.keys(g);
            }
          : function (g) {
              var h = [],
                i;
              for (i in g) {
                if (g.hasOwnProperty(i)) {
                  h.push(i);
                }
              }
              return h;
            },
      getSize: function (g) {
        var h = 0,
          i;
        for (i in g) {
          if (g.hasOwnProperty(i)) {
            h++;
          }
        }
        return h;
      },
      isEmpty: function (g) {
        for (var h in g) {
          if (g.hasOwnProperty(h)) {
            return false;
          }
        }
        return true;
      },
      equals: (function () {
        var g = function (j, i) {
          var h;
          for (h in j) {
            if (j.hasOwnProperty(h)) {
              if (j[h] !== i[h]) {
                return false;
              }
            }
          }
          return true;
        };
        return function (i, h) {
          if (i === h) {
            return true;
          }
          if (i && h) {
            return g(i, h) && g(h, i);
          } else {
            if (!i && !h) {
              return i === h;
            } else {
              return false;
            }
          }
        };
      })(),
      fork: function (j) {
        var g, h, i;
        if (j && j.constructor === Object) {
          g = e.chain(j);
          for (h in j) {
            i = j[h];
            if (i) {
              if (i.constructor === Object) {
                g[h] = e.fork(i);
              } else {
                if (i instanceof Array) {
                  g[h] = Ext.Array.clone(i);
                }
              }
            }
          }
        } else {
          g = j;
        }
        return g;
      },
      defineProperty:
        "defineProperty" in Object
          ? Object.defineProperty
          : function (h, g, i) {
              if (!Object.prototype.__defineGetter__) {
                return;
              }
              if (i.get) {
                h.__defineGetter__(g, i.get);
              }
              if (i.set) {
                h.__defineSetter__(g, i.set);
              }
            },
      classify: function (j) {
        var i = j,
          l = [],
          h = {},
          g = function () {
            var n = 0,
              o = l.length,
              p;
            for (; n < o; n++) {
              p = l[n];
              this[p] = new h[p]();
            }
          },
          k,
          m;
        for (k in j) {
          if (j.hasOwnProperty(k)) {
            m = j[k];
            if (m && m.constructor === Object) {
              l.push(k);
              h[k] = e.classify(m);
            }
          }
        }
        g.prototype = i;
        return g;
      },
    });
  Ext.merge = Ext.Object.merge;
  Ext.mergeIf = Ext.Object.mergeIf;
})();
Ext.apply(Ext, {
  _namedScopes: {
    this: { isThis: 1 },
    controller: { isController: 1 },
    self: { isSelf: 1 },
    "self.controller": { isSelf: 1, isController: 1 },
  },
  escapeId: (function () {
    var c = /^[a-zA-Z_][a-zA-Z0-9_\-]*$/i,
      d = /([\W]{1})/g,
      b = /^(\d)/g,
      a = function (g, f) {
        return "\\" + f;
      },
      e = function (g, f) {
        return "\\00" + f.charCodeAt(0).toString(16) + " ";
      };
    return function (f) {
      return c.test(f) ? f : f.replace(d, a).replace(b, e);
    };
  })(),
  callback: function (h, f, d, c, b, g) {
    if (!h) {
      return;
    }
    var e = f in Ext._namedScopes;
    if (h.charAt) {
      if ((!f || e) && b) {
        f = b.resolveListenerScope(e ? f : g);
      }
      if (!f || !Ext.isObject(f)) {
        Ext.raise('Named method "' + h + '" requires a scope object');
      }
      if (!Ext.isFunction(f[h])) {
        Ext.raise(
          'No method named "' + h + '" on ' + (f.$className || "scope object"),
        );
      }
      h = f[h];
    } else {
      if (e) {
        f = g || b;
      } else {
        if (!f) {
          f = b;
        }
      }
    }
    var a;
    if (h && Ext.isFunction(h)) {
      f = f || Ext.global;
      if (c) {
        Ext.defer(h, c, f, d);
      } else {
        if (Ext.elevateFunction) {
          a = Ext.elevateFunction(h, f, d);
        } else {
          if (d) {
            a = h.apply(f, d);
          } else {
            a = h.call(f);
          }
        }
      }
    }
    return a;
  },
  coerce: function (e, d) {
    var c = Ext.typeOf(e),
      b = Ext.typeOf(d),
      a = typeof e === "string";
    if (c !== b) {
      switch (b) {
        case "string":
          return String(e);
        case "number":
          return Number(e);
        case "boolean":
          return a && (!e || e === "false") ? false : Boolean(e);
        case "null":
          return a && (!e || e === "null") ? null : e;
        case "undefined":
          return a && (!e || e === "undefined") ? undefined : e;
        case "date":
          return a && isNaN(e)
            ? Ext.Date.parse(e, Ext.Date.defaultFormat)
            : Date(Number(e));
      }
    }
    return e;
  },
  copyTo: function (b, d, f, e) {
    if (typeof f === "string") {
      f = f.split(Ext.propertyNameSplitRe);
    }
    for (var a, c = 0, g = f ? f.length : 0; c < g; c++) {
      a = f[c];
      if (e || d.hasOwnProperty(a)) {
        b[a] = d[a];
      }
    }
    return b;
  },
  propertyNameSplitRe: /[,;\s]+/,
  copyToIf: function (a, d, e) {
    if (typeof e === "string") {
      e = e.split(Ext.propertyNameSplitRe);
    }
    for (var b, c = 0, f = e ? e.length : 0; c < f; c++) {
      b = e[c];
      if (a[b] === undefined) {
        a[b] = d[b];
      }
    }
    return a;
  },
  extend: (function () {
    var a = Object.prototype.constructor,
      b = function (d) {
        for (var c in d) {
          if (!d.hasOwnProperty(c)) {
            continue;
          }
          this[c] = d[c];
        }
      };
    return function (c, h, f) {
      if (Ext.isObject(h)) {
        f = h;
        h = c;
        c =
          f.constructor !== a
            ? f.constructor
            : function () {
                h.apply(this, arguments);
              };
      }
      if (!h) {
        Ext.raise({
          sourceClass: "Ext",
          sourceMethod: "extend",
          msg: "Attempting to extend from a class which has not been loaded on the page.",
        });
      }
      var e = function () {},
        d,
        g = h.prototype;
      e.prototype = g;
      d = c.prototype = new e();
      d.constructor = c;
      c.superclass = g;
      if (g.constructor === a) {
        g.constructor = h;
      }
      c.override = function (i) {
        Ext.override(c, i);
      };
      d.override = b;
      d.proto = d;
      c.override(f);
      c.extend = function (i) {
        return Ext.extend(c, i);
      };
      return c;
    };
  })(),
  iterate: function (a, c, b) {
    if (Ext.isEmpty(a)) {
      return;
    }
    if (b === undefined) {
      b = a;
    }
    if (Ext.isIterable(a)) {
      Ext.Array.each.call(Ext.Array, a, c, b);
    } else {
      Ext.Object.each.call(Ext.Object, a, c, b);
    }
  },
  urlEncode: function () {
    var a = Ext.Array.from(arguments),
      b = "";
    if (Ext.isString(a[1])) {
      b = a[1] + "&";
      a[1] = false;
    }
    return b + Ext.Object.toQueryString.apply(Ext.Object, a);
  },
  urlDecode: function () {
    return Ext.Object.fromQueryString.apply(Ext.Object, arguments);
  },
  getScrollbarSize: function (c) {
    if (!Ext.isDomReady) {
      Ext.raise("getScrollbarSize called before DomReady");
    }
    var b = Ext._scrollbarSize;
    if (c || !b) {
      var a = document.body,
        d = document.createElement("div");
      d.style.width = d.style.height = "100px";
      d.style.overflow = "scroll";
      d.style.position = "absolute";
      a.appendChild(d);
      Ext._scrollbarSize = b = {
        width: d.offsetWidth - d.clientWidth,
        height: d.offsetHeight - d.clientHeight,
      };
      a.removeChild(d);
    }
    return b;
  },
  typeOf: (function () {
    var a = /\S/,
      c = Object.prototype.toString,
      d = { number: 1, string: 1, boolean: 1, undefined: 1 },
      b = {
        "[object Array]": "array",
        "[object Date]": "date",
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object RegExp]": "regexp",
      };
    return function (g) {
      if (g === null) {
        return "null";
      }
      var f = typeof g,
        e,
        h;
      if (d[f]) {
        return f;
      }
      e = b[(h = c.call(g))];
      if (e) {
        return e;
      }
      if (f === "function") {
        return "function";
      }
      if (f === "object") {
        if (g.nodeType !== undefined) {
          if (g.nodeType === 3) {
            return a.test(g.nodeValue) ? "textnode" : "whitespace";
          } else {
            return "element";
          }
        }
        return "object";
      }
      Ext.raise({
        sourceClass: "Ext",
        sourceMethod: "typeOf",
        msg: 'Failed to determine the type of "' + g + '".',
      });
      return h;
    };
  })(),
  factory: function (b, e, a, f) {
    var d = Ext.ClassManager,
      c;
    if (!b || b.isInstance) {
      if (a && a !== b) {
        a.destroy();
      }
      return b;
    }
    if (f) {
      if (typeof b === "string") {
        return d.instantiateByAlias(f + "." + b);
      } else {
        if (Ext.isObject(b) && "type" in b) {
          return d.instantiateByAlias(f + "." + b.type, b);
        }
      }
    }
    if (b === true) {
      return a || Ext.create(e);
    }
    if (!Ext.isObject(b)) {
      Ext.Logger.error("Invalid config, must be a valid config object");
    }
    if ("xtype" in b) {
      c = d.instantiateByAlias("widget." + b.xtype, b);
    } else {
      if ("xclass" in b) {
        c = Ext.create(b.xclass, b);
      }
    }
    if (c) {
      if (a) {
        a.destroy();
      }
      return c;
    }
    if (a) {
      return a.setConfig(b);
    }
    return Ext.create(e, b);
  },
  log:
    (function () {
      var c = /string|number|boolean/;
      function a(g, e, o, m) {
        var i,
          l,
          n,
          f,
          j,
          p,
          h = [];
        if (Ext.isArray(g)) {
          j = "[";
          p = "]";
        } else {
          if (Ext.isObject(g)) {
            j = "{";
            p = "}";
          }
        }
        if (!o) {
          o = 3;
        }
        if (e > o) {
          return j + "..." + p;
        }
        e = e || 1;
        var k = new Array(e).join("    ");
        for (f in g) {
          if (g.hasOwnProperty(f)) {
            n = g[f];
            l = typeof n;
            if (l === "function") {
              if (!m) {
                continue;
              }
              i = l;
            } else {
              if (l === "undefined") {
                i = l;
              } else {
                if (n === null || c.test(l) || Ext.isDate(n)) {
                  i = Ext.encode(n);
                } else {
                  if (Ext.isArray(n)) {
                    i = a(n, e + 1, o, m);
                  } else {
                    if (Ext.isObject(n)) {
                      i = a(n, e + 1, o, m);
                    } else {
                      i = l;
                    }
                  }
                }
              }
            }
            h.push(k + f + ": " + i);
          }
        }
        if (h.length) {
          return j + "\n    " + h.join(",\n    ") + "\n" + k + p;
        }
        return j + p;
      }
      function b(n) {
        var o,
          j,
          f = Ext.global.console,
          e = "log",
          g = b.indent || 0,
          i,
          m,
          l,
          h,
          k;
        b.indent = g;
        if (typeof n !== "string") {
          o = n;
          n = o.msg || "";
          e = o.level || e;
          j = o.dump;
          m = o.stack;
          i = o.prefix;
          l = o.fn;
          if (o.indent) {
            ++b.indent;
          } else {
            if (o.outdent) {
              b.indent = g = Math.max(g - 1, 0);
            }
          }
          if (j && !(f && f.dir)) {
            n += a(j);
            j = null;
          }
        }
        if (arguments.length > 1) {
          n += Array.prototype.slice.call(arguments, 1).join("");
        }
        if (i) {
          n = i + " - " + n;
        }
        n = g ? Ext.String.repeat(" ", b.indentSize * g) + n : n;
        if (e !== "log") {
          n = "[" + e.charAt(0).toUpperCase() + "] " + n;
        }
        if (l) {
          n += "\nCaller: " + l.toString();
        }
        if (f) {
          if (f[e]) {
            f[e](n);
          } else {
            f.log(n);
          }
          if (j) {
            f.dir(j);
          }
          if (m && f.trace) {
            if (!f.firebug || e !== "error") {
              f.trace();
            }
          }
        } else {
          if (Ext.isOpera) {
            opera.postError(n);
          } else {
            h = b.out;
            k = b.max;
            if (h.length >= k) {
              Ext.Array.erase(h, 0, h.length - 3 * Math.floor(k / 4));
            }
            h.push(n);
          }
        }
        ++b.count;
        ++b.counters[e];
      }
      function d(f, e) {
        if (typeof e[0] === "string") {
          e.unshift({});
        }
        e[0].level = f;
        b.apply(this, e);
      }
      b.error = function () {
        d("error", Array.prototype.slice.call(arguments));
      };
      b.info = function () {
        d("info", Array.prototype.slice.call(arguments));
      };
      b.warn = function () {
        d("warn", Array.prototype.slice.call(arguments));
      };
      b.count = 0;
      b.counters = { error: 0, warn: 0, info: 0, log: 0 };
      b.indentSize = 2;
      b.out = [];
      b.max = 750;
      return b;
    })() ||
    (function () {
      var a = function () {};
      a.info = a.warn = a.error = Ext.emptyFn;
      return a;
    })(),
});
(function () {
  var d = [""],
    h = /([^\d\.])/,
    b = /[^\d]/g,
    a = /[\-+]/g,
    g = /\s/g,
    c = /_/g,
    f = { classic: 1, modern: 1 },
    e;
  Ext.Version = e = function (r, n) {
    var s = this,
      l = s.padModes,
      j,
      p,
      m,
      o,
      t,
      k,
      q;
    if (r.isVersion) {
      r = r.version;
    }
    s.version = q = String(r).toLowerCase().replace(c, ".").replace(a, "");
    j = q.charAt(0);
    if (j in l) {
      q = q.substring(1);
      m = l[j];
    } else {
      m = n ? l[n] : 0;
    }
    s.pad = m;
    k = q.search(h);
    s.shortVersion = q;
    if (k !== -1) {
      s.release = t = q.substr(k, r.length);
      s.shortVersion = q.substr(0, k);
      t = e.releaseValueMap[t] || t;
    }
    s.releaseValue = t || m;
    s.shortVersion = s.shortVersion.replace(b, "");
    s.parts = o = q.split(".");
    for (p = o.length; p--; ) {
      o[p] = parseInt(o[p], 10);
    }
    if (m === Infinity) {
      o.push(m);
    }
    s.major = o[0] || m;
    s.minor = o[1] || m;
    s.patch = o[2] || m;
    s.build = o[3] || m;
    return s;
  };
  e.prototype = {
    isVersion: true,
    padModes: { "~": NaN, "^": Infinity },
    release: "",
    compareTo: function (t) {
      var u = this,
        n = u.pad,
        r = u.parts,
        v = r.length,
        m = t.isVersion ? t : new e(t),
        k = m.pad,
        q = m.parts,
        p = q.length,
        j = Math.max(v, p),
        o,
        l,
        s;
      for (o = 0; o < j; o++) {
        l = o < v ? r[o] : n;
        s = o < p ? q[o] : k;
        if (l < s) {
          return -1;
        }
        if (l > s) {
          return 1;
        }
      }
      l = u.releaseValue;
      s = m.releaseValue;
      if (l < s) {
        return -1;
      }
      if (l > s) {
        return 1;
      }
      return 0;
    },
    toString: function () {
      return this.version;
    },
    valueOf: function () {
      return this.version;
    },
    getMajor: function () {
      return this.major;
    },
    getMinor: function () {
      return this.minor;
    },
    getPatch: function () {
      return this.patch;
    },
    getBuild: function () {
      return this.build;
    },
    getRelease: function () {
      return this.release;
    },
    getReleaseValue: function () {
      return this.releaseValue;
    },
    isGreaterThan: function (i) {
      return this.compareTo(i) > 0;
    },
    isGreaterThanOrEqual: function (i) {
      return this.compareTo(i) >= 0;
    },
    isLessThan: function (i) {
      return this.compareTo(i) < 0;
    },
    isLessThanOrEqual: function (i) {
      return this.compareTo(i) <= 0;
    },
    equals: function (i) {
      return this.compareTo(i) === 0;
    },
    match: function (i) {
      i = String(i);
      return this.version.substr(0, i.length) === i;
    },
    toArray: function () {
      var i = this;
      return [
        i.getMajor(),
        i.getMinor(),
        i.getPatch(),
        i.getBuild(),
        i.getRelease(),
      ];
    },
    getShortVersion: function () {
      return this.shortVersion;
    },
    gt: function (i) {
      return this.compareTo(i) > 0;
    },
    lt: function (i) {
      return this.compareTo(i) < 0;
    },
    gtEq: function (i) {
      return this.compareTo(i) >= 0;
    },
    ltEq: function (i) {
      return this.compareTo(i) <= 0;
    },
  };
  Ext.apply(e, {
    aliases: {
      from: { extjs: "ext", core: "core", touch: "modern" },
      to: { ext: ["extjs"], core: ["core"], modern: ["touch"] },
    },
    releaseValueMap: {
      dev: -6,
      alpha: -5,
      a: -5,
      beta: -4,
      b: -4,
      rc: -3,
      "#": -2,
      p: -1,
      pl: -1,
    },
    getComponentValue: function (i) {
      return !i ? 0 : isNaN(i) ? this.releaseValueMap[i] || i : parseInt(i, 10);
    },
    compare: function (k, j) {
      var i = k.isVersion ? k : new e(k);
      return i.compareTo(j);
    },
    set: function (o, m, l) {
      var k = e.aliases.to[m],
        j = l.isVersion ? l : new e(l),
        n;
      o[m] = j;
      if (k) {
        for (n = k.length; n-- > 0; ) {
          o[k[n]] = j;
        }
      }
      return j;
    },
  });
  Ext.apply(Ext, {
    compatVersions: {},
    versions: {},
    lastRegisteredVersion: null,
    getCompatVersion: function (j) {
      var i = Ext.compatVersions,
        k;
      if (!j) {
        k = i.ext || i.touch || i.core;
      } else {
        k = i[e.aliases.from[j] || j];
      }
      return k || Ext.getVersion(j);
    },
    setCompatVersion: function (j, i) {
      e.set(Ext.compatVersions, j, i);
    },
    setVersion: function (j, i) {
      if (j in f) {
        Ext.toolkit = j;
      }
      Ext.lastRegisteredVersion = e.set(Ext.versions, j, i);
      return this;
    },
    getVersion: function (j) {
      var i = Ext.versions;
      if (!j) {
        return i.ext || i.touch || i.core;
      }
      return i[e.aliases.from[j] || j];
    },
    checkVersion: function (p, x) {
      var t = Ext.isArray(p),
        l = e.aliases.from,
        y = t ? p : d,
        k = y.length,
        m = Ext.versions,
        w = m.ext || m.touch,
        q,
        v,
        s,
        n,
        o,
        j,
        z,
        r,
        u;
      if (!t) {
        d[0] = p;
      }
      for (q = 0; q < k; ++q) {
        if (!Ext.isString((z = y[q]))) {
          s = Ext.checkVersion(z.and || z.or, !z.or);
          if (z.not) {
            s = !s;
          }
        } else {
          if (z.indexOf(" ") >= 0) {
            z = z.replace(g, "");
          }
          v = z.indexOf("@");
          if (v < 0) {
            r = z;
            u = w;
          } else {
            j = z.substring(0, v);
            if (!(u = m[l[j] || j])) {
              if (x) {
                return false;
              }
              continue;
            }
            r = z.substring(v + 1);
          }
          v = r.indexOf("-");
          if (v < 0) {
            if (r.charAt((v = r.length - 1)) === "+") {
              n = r.substring(0, v);
              o = null;
            } else {
              n = o = r;
            }
          } else {
            if (v > 0) {
              n = r.substring(0, v);
              o = r.substring(v + 1);
            } else {
              n = null;
              o = r.substring(v + 1);
            }
          }
          s = true;
          if (n) {
            n = new e(n, "~");
            s = n.ltEq(u);
          }
          if (s && o) {
            o = new e(o, "~");
            s = o.gtEq(u);
          }
        }
        if (s) {
          if (!x) {
            return true;
          }
        } else {
          if (x) {
            return false;
          }
        }
      }
      return !!x;
    },
    deprecate: function (i, k, l, j) {
      if (e.compare(Ext.getVersion(i), k) < 1) {
        l.call(j);
      }
    },
  });
})();
(function (d) {
  var e = (d && d.packages) || {},
    c = d && d.compatibility,
    b,
    a;
  for (b in e) {
    a = e[b];
    Ext.setVersion(b, a.version);
  }
  if (c) {
    if (Ext.isString(c)) {
      Ext.setCompatVersion("core", c);
    } else {
      for (b in c) {
        Ext.setCompatVersion(b, c[b]);
      }
    }
  }
  if (!e.ext && !e.touch) {
    Ext.setVersion("ext", "6.0.0.640");
    Ext.setVersion("core", "6.0.0.640");
  }
})(Ext.manifest);
Ext.Config = function (b) {
  var c = this,
    a = b.charAt(0).toUpperCase() + b.substr(1);
  c.name = b;
  c.names = {
    internal: "_" + b,
    initializing: "is" + a + "Initializing",
    apply: "apply" + a,
    update: "update" + a,
    get: "get" + a,
    set: "set" + a,
    initGet: "initGet" + a,
    changeEvent: b.toLowerCase() + "change",
  };
  c.root = c;
};
Ext.Config.map = {};
Ext.Config.get = function (b) {
  var c = Ext.Config.map,
    a = c[b] || (c[b] = new Ext.Config(b));
  return a;
};
Ext.Config.prototype = {
  self: Ext.Config,
  isConfig: true,
  getGetter: function () {
    return this.getter || (this.root.getter = this.makeGetter());
  },
  getInitGetter: function () {
    return this.initGetter || (this.root.initGetter = this.makeInitGetter());
  },
  getSetter: function () {
    return this.setter || (this.root.setter = this.makeSetter());
  },
  getEventedSetter: function () {
    return (
      this.eventedSetter || (this.root.eventedSetter = this.makeEventedSetter())
    );
  },
  getInternalName: function (a) {
    return a.$configPrefixed ? this.names.internal : this.name;
  },
  mergeNew: function (f, b, e, d) {
    var a, c;
    if (!b) {
      a = f;
    } else {
      if (!f) {
        a = b;
      } else {
        a = Ext.Object.chain(b);
        for (c in f) {
          if (!d || !(c in a)) {
            a[c] = f[c];
          }
        }
      }
    }
    return a;
  },
  mergeSets: function (e, c, a) {
    var b = c ? Ext.Object.chain(c) : {},
      d,
      f;
    if (e instanceof Array) {
      for (d = e.length; d--; ) {
        f = e[d];
        if (!a || !(f in b)) {
          b[f] = true;
        }
      }
    } else {
      if (e) {
        if (e.constructor === Object) {
          for (d in e) {
            f = e[d];
            if (!a || !(d in b)) {
              b[d] = f;
            }
          }
        } else {
          if (!a || !(e in b)) {
            b[e] = true;
          }
        }
      }
    }
    return b;
  },
  makeGetter: function () {
    var a = this.name,
      b = this.names.internal;
    return function () {
      var c = this.$configPrefixed ? b : a;
      return this[c];
    };
  },
  makeInitGetter: function () {
    var a = this.name,
      e = this.names,
      d = e.set,
      b = e.get,
      c = e.initializing;
    return function () {
      var f = this;
      f[c] = true;
      delete f[b];
      f[d](f.config[a]);
      delete f[c];
      return f[b].apply(f, arguments);
    };
  },
  makeSetter: function () {
    var a = this.name,
      e = this.names,
      c = e.internal,
      d = e.get,
      b = e.apply,
      g = e.update,
      f;
    f = function (k) {
      var j = this,
        i = j.$configPrefixed ? c : a,
        h = j[i];
      delete j[d];
      if (!j[b] || (k = j[b](k, h)) !== undefined) {
        if (k !== (h = j[i])) {
          j[i] = k;
          if (j[g]) {
            j[g](k, h);
          }
        }
      }
      return j;
    };
    f.$isDefault = true;
    return f;
  },
  makeEventedSetter: function () {
    var b = this.name,
      g = this.names,
      i = g.internal,
      a = g.get,
      h = g.apply,
      d = g.update,
      f = g.changeEvent,
      e = function (l, m, j, k) {
        l[k] = m;
        if (l[d]) {
          l[d](m, j);
        }
      },
      c;
    c = function (m) {
      var l = this,
        k = l.$configPrefixed ? i : b,
        j = l[k];
      delete l[a];
      if (!l[h] || (m = l[h](m, j)) !== undefined) {
        if (m !== (j = l[k])) {
          if (l.isConfiguring) {
            l[k] = m;
            if (l[d]) {
              l[d](m, j);
            }
          } else {
            l.fireEventedAction(f, [l, m, j], e, l, [l, m, j, k]);
          }
        }
      }
      return l;
    };
    c.$isDefault = true;
    return c;
  },
};
(function () {
  var b = Ext.Config,
    c = b.map,
    a = Ext.Object;
  Ext.Configurator = function (d) {
    var f = this,
      e = d.prototype,
      g = d.superclass ? d.superclass.self.$config : null;
    f.cls = d;
    f.superCfg = g;
    if (g) {
      f.configs = a.chain(g.configs);
      f.cachedConfigs = a.chain(g.cachedConfigs);
      f.initMap = a.chain(g.initMap);
      f.values = a.chain(g.values);
      f.needsFork = g.needsFork;
      f.deprecations = a.chain(g.deprecations);
    } else {
      f.configs = {};
      f.cachedConfigs = {};
      f.initMap = {};
      f.values = {};
      f.deprecations = {};
    }
    e.config = e.defaultConfig = f.values;
    d.$config = f;
  };
  Ext.Configurator.prototype = {
    self: Ext.Configurator,
    needsFork: false,
    initList: null,
    add: function (t, d) {
      var u = this,
        h = u.cls,
        k = u.configs,
        v = u.cachedConfigs,
        m = u.initMap,
        p = h.prototype,
        w = d && d.$config.configs,
        e = u.values,
        j,
        l,
        r,
        f,
        g,
        i,
        x,
        o,
        n,
        q;
      for (x in t) {
        q = t[x];
        j = q && q.constructor === Object;
        l = j && "$value" in q ? q : null;
        if (l) {
          r = !!l.cached;
          q = l.$value;
          j = q && q.constructor === Object;
        }
        f = l && l.merge;
        g = k[x];
        if (g) {
          if (d) {
            f = g.merge;
            if (!f) {
              continue;
            }
            l = null;
          } else {
            f = f || g.merge;
          }
          if (!d && r && !v[x]) {
            Ext.raise(
              "Redefining config as cached: " +
                x +
                " in class: " +
                h.$className,
            );
          }
          i = e[x];
          if (f) {
            q = f.call(g, q, i, h, d);
          } else {
            if (j) {
              if (i && i.constructor === Object) {
                q = a.merge({}, i, q);
              }
            }
          }
        } else {
          if (w) {
            g = w[x];
            l = null;
          } else {
            g = b.get(x);
          }
          k[x] = g;
          if (g.cached || r) {
            v[x] = true;
          }
          o = g.names;
          if (!p[(n = o.get)]) {
            p[n] = g.getter || g.getGetter();
          }
          if (!p[(n = o.set)]) {
            p[n] =
              l && l.evented
                ? g.eventedSetter || g.getEventedSetter()
                : g.setter || g.getSetter();
          }
        }
        if (l) {
          if (g.owner !== h) {
            k[x] = g = Ext.Object.chain(g);
            g.owner = h;
          }
          Ext.apply(g, l);
          delete g.$value;
        }
        if (
          !u.needsFork &&
          q &&
          (q.constructor === Object || q instanceof Array)
        ) {
          u.needsFork = true;
        }
        if (q !== null) {
          m[x] = true;
        } else {
          if (p.$configPrefixed) {
            p[k[x].names.internal] = null;
          } else {
            p[k[x].name] = null;
          }
          if (x in m) {
            m[x] = false;
          }
        }
        e[x] = q;
      }
    },
    addDeprecations: function (j) {
      var i = this,
        e = i.deprecations,
        g = (i.cls.$className || "") + "#",
        h,
        d,
        f;
      for (f in j) {
        d = j[f];
        if (!d) {
          h = "This config has been removed.";
        } else {
          if (!(h = d.message)) {
            h = 'This config has been renamed to "' + d + '"';
          }
        }
        e[f] = g + f + ": " + h;
      }
    },
    configure: function (x, l) {
      var z = this,
        k = z.configs,
        h = z.deprecations,
        m = z.initMap,
        o = z.initListMap,
        v = z.initList,
        p = z.cls.prototype,
        d = z.values,
        q = 0,
        s = !v,
        e,
        f,
        g,
        B,
        u,
        t,
        j,
        n,
        A,
        r,
        y,
        w;
      d = z.needsFork ? a.fork(d) : a.chain(d);
      if (s) {
        z.initList = v = [];
        z.initListMap = o = {};
        x.isFirstInstance = true;
        for (A in m) {
          B = m[A];
          f = k[A];
          y = f.cached;
          if (B) {
            n = f.names;
            r = d[A];
            if (
              !p[n.set].$isDefault ||
              p[n.apply] ||
              p[n.update] ||
              typeof r === "object"
            ) {
              if (y) {
                (e || (e = [])).push(f);
              } else {
                v.push(f);
                o[A] = true;
              }
              x[n.get] = f.initGetter || f.getInitGetter();
            } else {
              p[f.getInternalName(p)] = r;
            }
          } else {
            if (y) {
              p[f.getInternalName(p)] = undefined;
            }
          }
        }
      }
      j = e && e.length;
      if (j) {
        for (u = 0; u < j; ++u) {
          t = e[u].getInternalName(p);
          x[t] = null;
        }
        for (u = 0; u < j; ++u) {
          n = (f = e[u]).names;
          g = n.get;
          if (x.hasOwnProperty(g)) {
            x[n.set](d[f.name]);
            delete x[g];
          }
        }
        for (u = 0; u < j; ++u) {
          t = e[u].getInternalName(p);
          p[t] = x[t];
          delete x[t];
        }
      }
      if (l && l.platformConfig) {
        l = z.resolvePlatformConfig(x, l);
      }
      if (s) {
        if (x.afterCachedConfig && !x.afterCachedConfig.$nullFn) {
          x.afterCachedConfig(l);
        }
      }
      x.isConfiguring = true;
      x.config = d;
      for (u = 0, j = v.length; u < j; ++u) {
        f = v[u];
        x[f.names.get] = f.initGetter || f.getInitGetter();
      }
      if (x.transformInstanceConfig) {
        l = x.transformInstanceConfig(l);
      }
      if (l) {
        for (A in l) {
          r = l[A];
          f = k[A];
          if (h[A]) {
            Ext.log.warn(h[A]);
            if (!f) {
              continue;
            }
          }
          if (!f) {
            if (x.$configStrict && typeof x.self.prototype[A] === "function") {
              Ext.raise(
                "Cannot override method " +
                  A +
                  " on " +
                  x.$className +
                  " instance.",
              );
            }
            x[A] = r;
          } else {
            if (!f.lazy) {
              ++q;
            }
            if (!o[A]) {
              x[f.names.get] = f.initGetter || f.getInitGetter();
            }
            if (f.merge) {
              r = f.merge(r, d[A], x);
            } else {
              if (r && r.constructor === Object) {
                w = d[A];
                if (w && w.constructor === Object) {
                  r = a.merge(d[A], r);
                } else {
                  r = Ext.clone(r);
                }
              }
            }
          }
          d[A] = r;
        }
      }
      if (x.beforeInitConfig && !x.beforeInitConfig.$nullFn) {
        if (x.beforeInitConfig(l) === false) {
          return;
        }
      }
      if (l) {
        for (A in l) {
          if (!q) {
            break;
          }
          f = k[A];
          if (f && !f.lazy) {
            --q;
            n = f.names;
            g = n.get;
            if (x.hasOwnProperty(g)) {
              x[n.set](d[A]);
              delete x[n.get];
            }
          }
        }
      }
      for (u = 0, j = v.length; u < j; ++u) {
        f = v[u];
        n = f.names;
        g = n.get;
        if (!f.lazy && x.hasOwnProperty(g)) {
          x[n.set](d[f.name]);
          delete x[g];
        }
      }
      delete x.isConfiguring;
    },
    getCurrentConfig: function (e) {
      var d = e.defaultConfig,
        g = {},
        f;
      for (f in d) {
        g[f] = e[c[f].names.get]();
      }
      return g;
    },
    merge: function (d, i, g) {
      var k = this.configs,
        f,
        j,
        h,
        e;
      for (f in g) {
        j = g[f];
        e = k[f];
        if (e) {
          if (e.merge) {
            j = e.merge(j, i[f], d);
          } else {
            if (j && j.constructor === Object) {
              h = i[f];
              if (h && h.constructor === Object) {
                j = Ext.Object.merge(h, j);
              } else {
                j = Ext.clone(j);
              }
            }
          }
        }
        i[f] = j;
      }
      return i;
    },
    reconfigure: function (s, n, t) {
      var j = s.config,
        k = [],
        r = s.$configStrict,
        o = this.configs,
        f = t && t.defaults,
        h = t && t.strict === false,
        m,
        q,
        g,
        l,
        d,
        p,
        e;
      for (d in n) {
        if (f && s.hasOwnProperty(d)) {
          continue;
        }
        j[d] = n[d];
        m = o[d];
        if (this.deprecations[d]) {
          Ext.log.warn(this.deprecations[d]);
          if (!m) {
            continue;
          }
        }
        if (m) {
          s[m.names.get] = m.initGetter || m.getInitGetter();
        } else {
          if (r) {
            if (d !== "type") {
              Ext.log.error(
                'No such config "' + d + '" for class ' + s.$className,
              );
            }
            continue;
          }
        }
        k.push(d);
      }
      for (g = 0, l = k.length; g < l; g++) {
        d = k[g];
        m = o[d];
        if (m) {
          p = m.names;
          q = p.get;
          if (s.hasOwnProperty(q)) {
            s[p.set](n[d]);
            delete s[q];
          }
        } else {
          m = c[d] || Ext.Config.get(d);
          p = m.names;
          if (s[p.set]) {
            s[p.set](n[d]);
          } else {
            if (h) {
              if (
                s.$configStrict &&
                typeof s.self.prototype[d] === "function"
              ) {
                Ext.raise(
                  "Cannot override method " +
                    d +
                    " on " +
                    s.$className +
                    " instance.",
                );
              }
              s[d] = n[d];
            } else {
              if (d !== "type") {
                Ext.raise(
                  'Config "' + d + '" has no setter on class ' + s.$className,
                );
              }
            }
          }
        }
      }
    },
    resolvePlatformConfig: function (d, k) {
      var h = k && k.platformConfig,
        e = k,
        f,
        g,
        j;
      if (h) {
        g = Ext.getPlatformConfigKeys(h);
        j = g.length;
        if (j) {
          e = Ext.merge({}, e);
          for (f = 0, j = g.length; f < j; ++f) {
            this.merge(d, e, h[g[f]]);
          }
        }
      }
      return e;
    },
  };
})();
Ext.Base = (function (c) {
  var b = [],
    j,
    m = [],
    n = function (r, q) {
      var t = this,
        p,
        o,
        s;
      if (r) {
        o = Ext.Config.map[r];
        if (!o) {
          Ext.Logger.error(
            "Invalid property name for getter: '" +
              r +
              "' for '" +
              t.$className +
              "'.",
          );
        }
        s = o.names.get;
        if (q && t.hasOwnProperty(s)) {
          p = t.config[r];
        } else {
          p = t[s]();
        }
      } else {
        p = t.getCurrentConfig();
      }
      return p;
    },
    d = function (p, o, r) {
      var q = '"' + p + '" is deprecated.';
      if (r) {
        q += " " + r;
      } else {
        if (o) {
          q += ' Please use "' + o + '" instead.';
        }
      }
      return function () {
        Ext.raise(q);
      };
    },
    k = function (p, q, o, r) {
      if (!r) {
        r = '"' + q + '" is deprecated.';
      }
      if (o) {
        r += ' Please use "' + o + '" instead.';
      }
      if (r) {
        Ext.Object.defineProperty(p, q, {
          get: function () {
            Ext.raise(r);
          },
          set: function (s) {
            Ext.raise(r);
          },
          configurable: true,
        });
      }
    },
    g = function (o) {
      return function () {
        return this[o].apply(this, arguments);
      };
    },
    a = Ext.Version,
    i = /^\d/,
    l = {},
    f = {},
    h = function () {},
    e = h.prototype;
  Ext.apply(h, {
    $className: "Ext.Base",
    $isClass: true,
    create: function () {
      return Ext.create.apply(
        Ext,
        [this].concat(Array.prototype.slice.call(arguments, 0)),
      );
    },
    addDeprecations: function (v) {
      var F = this,
        p = [],
        r = Ext.getCompatVersion(v.name),
        E = F.getConfigurator(),
        s = (F.$className || "") + "#",
        D,
        z,
        u,
        A,
        G,
        x,
        C,
        w,
        B,
        H,
        y,
        o,
        t,
        q;
      for (z in v) {
        if (i.test(z)) {
          q = new Ext.Version(z);
          q.deprecations = v[z];
          p.push(q);
        }
      }
      p.sort(a.compare);
      for (u = p.length; u--; ) {
        D = (q = p[u]).deprecations;
        G = F.prototype;
        t = D.statics;
        x = r && r.lt(q);
        if (!x) {
        } else {
          if (!x) {
            break;
          }
        }
        while (D) {
          B = D.methods;
          if (B) {
            for (H in B) {
              o = B[H];
              w = null;
              if (!o) {
                Ext.Assert.isNotDefinedProp(G, H);
                w = d(s + H);
              } else {
                if (Ext.isString(o)) {
                  Ext.Assert.isNotDefinedProp(G, H);
                  Ext.Assert.isDefinedProp(G, o);
                  if (x) {
                    w = g(o);
                  } else {
                    w = d(s + H, o);
                  }
                } else {
                  A = "";
                  if (o.message || o.fn) {
                    A = o.message;
                    o = o.fn;
                  }
                  C = G.hasOwnProperty(H) && G[H];
                  if (x && o) {
                    o.$owner = F;
                    o.$name = H;
                    o.name = s + H;
                    if (C) {
                      o.$previous = C;
                    }
                    w = o;
                  } else {
                    if (!C) {
                      w = d(s + H, null, A);
                    }
                  }
                }
              }
              if (w) {
                G[H] = w;
              }
            }
          }
          B = D.configs;
          if (B) {
            E.addDeprecations(B);
          }
          B = D.properties;
          if (B && !x) {
            for (H in B) {
              y = B[H];
              if (Ext.isString(y)) {
                k(G, s + H, y);
              } else {
                if (y && y.message) {
                  k(G, s + H, null, y.message);
                } else {
                  k(G, s + H);
                }
              }
            }
          }
          D = t;
          t = null;
          G = F;
        }
      }
    },
    extend: function (s) {
      var u = this,
        o = s.prototype,
        q,
        r,
        t,
        p,
        v;
      q = u.prototype = Ext.Object.chain(o);
      q.self = u;
      u.superclass = q.superclass = o;
      if (!s.$isClass) {
        for (r in e) {
          if (r in q) {
            q[r] = e[r];
          }
        }
      }
      v = o.$inheritableStatics;
      if (v) {
        for (r = 0, t = v.length; r < t; r++) {
          p = v[r];
          if (!u.hasOwnProperty(p)) {
            u[p] = s[p];
          }
        }
      }
      if (s.$onExtended) {
        u.$onExtended = s.$onExtended.slice();
      }
      u.getConfigurator();
    },
    $onExtended: [],
    triggerExtended: function () {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(this, "Ext.Base#triggerExtended", arguments);
      var q = this.$onExtended,
        p = q.length,
        o,
        r;
      if (p > 0) {
        for (o = 0; o < p; o++) {
          r = q[o];
          r.fn.apply(r.scope || this, arguments);
        }
      }
    },
    onExtended: function (p, o) {
      this.$onExtended.push({ fn: p, scope: o });
      return this;
    },
    addStatics: function (o) {
      this.addMembers(o, true);
      return this;
    },
    addInheritableStatics: function (p) {
      var t,
        o,
        r = this.prototype,
        q,
        u;
      t = r.$inheritableStatics;
      o = r.$hasInheritableStatics;
      if (!t) {
        t = r.$inheritableStatics = [];
        o = r.$hasInheritableStatics = {};
      }
      var s = Ext.getClassName(this) + ".";
      for (q in p) {
        if (p.hasOwnProperty(q)) {
          u = p[q];
          if (typeof u == "function") {
            u.name = s + q;
          }
          this[q] = u;
          if (!o[q]) {
            o[q] = true;
            t.push(q);
          }
        }
      }
      return this;
    },
    addMembers: function (B, r, C) {
      var D = this,
        q = Ext.Function.clone,
        E = r ? D : D.prototype,
        u = !r && E.defaultConfig,
        y = Ext.enumerables,
        z = B.privates,
        t,
        x,
        s,
        o,
        F,
        w,
        A;
      var p = (D.$className || "") + "#";
      if (z) {
        delete B.privates;
        if (!r) {
          A = z.statics;
          delete z.statics;
        }
        w = z.privacy || C || "framework";
        D.addMembers(z, r, w);
        if (A) {
          D.addMembers(A, true, w);
        }
      }
      for (F in B) {
        if (B.hasOwnProperty(F)) {
          o = B[F];
          if (C === true) {
            C = "framework";
          }
          if (o && o.$nullFn && C !== o.$privacy) {
            Ext.raise(
              "Cannot use stock function for private method " +
                (D.$className ? D.$className + "#" : "") +
                F,
            );
          }
          if (typeof o === "function" && !o.$isClass && !o.$nullFn) {
            if (o.$owner) {
              o = q(o);
            }
            if (E.hasOwnProperty(F)) {
              o.$previous = E[F];
            }
            o.$owner = D;
            o.$name = F;
            o.name = p + F;
            var v = E[F];
            if (C) {
              o.$privacy = C;
              if (v && v.$privacy && v.$privacy !== C) {
                Ext.privacyViolation(D, v, o, r);
              }
            } else {
              if (v && v.$privacy) {
                Ext.privacyViolation(D, v, o, r);
              }
            }
          } else {
            if (u && F in u && !E.config.hasOwnProperty(F)) {
              (t || (t = {}))[F] = o;
              continue;
            }
          }
          E[F] = o;
        }
      }
      if (t) {
        D.addConfig(t);
      }
      if (y) {
        for (x = 0, s = y.length; x < s; ++x) {
          if (B.hasOwnProperty((F = y[x]))) {
            o = B[F];
            if (o && !o.$nullFn) {
              if (o.$owner) {
                o = q(o);
              }
              o.$owner = D;
              o.$name = F;
              o.name = p + F;
              if (E.hasOwnProperty(F)) {
                o.$previous = E[F];
              }
            }
            E[F] = o;
          }
        }
      }
      return this;
    },
    addMember: function (o, p) {
      l[o] = p;
      this.addMembers(l);
      delete l[o];
      return this;
    },
    borrow: function (u, o) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(this, "Ext.Base#borrow", arguments);
      var q = u.prototype,
        s = {},
        r,
        t,
        p;
      o = Ext.Array.from(o);
      for (r = 0, t = o.length; r < t; r++) {
        p = o[r];
        s[p] = q[p];
      }
      return this.addMembers(s);
    },
    override: function (p) {
      var r = this,
        u = p.statics,
        t = p.inheritableStatics,
        q = p.config,
        o = p.mixins,
        s = p.cachedConfig;
      if (u || t || q) {
        p = Ext.apply({}, p);
      }
      if (u) {
        r.addMembers(u, true);
        delete p.statics;
      }
      if (t) {
        r.addInheritableStatics(t);
        delete p.inheritableStatics;
      }
      if (q) {
        r.addConfig(q);
        delete p.config;
      }
      if (s) {
        r.addCachedConfig(s);
        delete p.cachedConfig;
      }
      delete p.mixins;
      r.addMembers(p);
      if (o) {
        r.mixin(o);
      }
      return r;
    },
    callParent: function (o) {
      var p;
      return (
        (p = this.callParent.caller) &&
        (
          p.$previous ||
          ((p = p.$owner ? p : p.caller) && p.$owner.superclass.self[p.$name])
        ).apply(this, o || b)
      );
    },
    callSuper: function (o) {
      var p;
      return (
        (p = this.callSuper.caller) &&
        (
          (p = p.$owner ? p : p.caller) && p.$owner.superclass.self[p.$name]
        ).apply(this, o || b)
      );
    },
    mixin: function (o, p) {
      var u = this,
        A,
        w,
        z,
        v,
        q,
        t,
        y,
        x,
        s;
      if (typeof o !== "string") {
        s = o;
        if (s instanceof Array) {
          for (q = 0, t = s.length; q < t; q++) {
            A = s[q];
            u.mixin(A.prototype.mixinId || A.$className, A);
          }
        } else {
          for (var r in s) {
            u.mixin(r, s[r]);
          }
        }
        return;
      }
      A = p.prototype;
      w = u.prototype;
      if (A.onClassMixedIn) {
        A.onClassMixedIn.call(p, u);
      }
      if (!w.hasOwnProperty("mixins")) {
        if ("mixins" in w) {
          w.mixins = Ext.Object.chain(w.mixins);
        } else {
          w.mixins = {};
        }
      }
      for (z in A) {
        x = A[z];
        if (z === "mixins") {
          Ext.applyIf(w.mixins, x);
        } else {
          if (!(z === "mixinId" || z === "config") && w[z] === undefined) {
            w[z] = x;
          }
        }
      }
      v = A.$inheritableStatics;
      if (v) {
        for (q = 0, t = v.length; q < t; q++) {
          y = v[q];
          if (!u.hasOwnProperty(y)) {
            u[y] = p[y];
          }
        }
      }
      if ("config" in A) {
        u.addConfig(A.config, p);
      }
      w.mixins[o] = A;
      if (A.afterClassMixedIn) {
        A.afterClassMixedIn.call(p, u);
      }
      return u;
    },
    addConfig: function (p, q) {
      var o = this.$config || this.getConfigurator();
      o.add(p, q);
    },
    addCachedConfig: function (o, q) {
      var r = {},
        p;
      for (p in o) {
        r[p] = { cached: true, $value: o[p] };
      }
      this.addConfig(r, q);
    },
    getConfigurator: function () {
      return this.$config || new Ext.Configurator(this);
    },
    getName: function () {
      return Ext.getClassName(this);
    },
    createAlias: c(function (p, o) {
      f[p] = function () {
        return this[o].apply(this, arguments);
      };
      this.override(f);
      delete f[p];
    }),
  });
  for (j in h) {
    if (h.hasOwnProperty(j)) {
      m.push(j);
    }
  }
  h.$staticMembers = m;
  h.getConfigurator();
  h.addMembers({
    $className: "Ext.Base",
    isInstance: true,
    $configPrefixed: true,
    $configStrict: true,
    isConfiguring: false,
    isFirstInstance: false,
    destroyed: false,
    statics: function () {
      var p = this.statics.caller,
        o = this.self;
      if (!p) {
        return o;
      }
      return p.$owner;
    },
    callParent: function (q) {
      var s,
        o =
          (s = this.callParent.caller) &&
          (s.$previous ||
            ((s = s.$owner ? s : s.caller) && s.$owner.superclass[s.$name]));
      if (!o) {
        s = this.callParent.caller;
        var r, p;
        if (!s.$owner) {
          if (!s.caller) {
            throw new Error(
              "Attempting to call a protected method from the public scope, which is not allowed",
            );
          }
          s = s.caller;
        }
        r = s.$owner.superclass;
        p = s.$name;
        if (!(p in r)) {
          throw new Error(
            "this.callParent() was called but there's no such method (" +
              p +
              ") found in the parent class (" +
              (Ext.getClassName(r) || "Object") +
              ")",
          );
        }
      }
      return o.apply(this, q || b);
    },
    callSuper: function (q) {
      var s,
        o =
          (s = this.callSuper.caller) &&
          (s = s.$owner ? s : s.caller) &&
          s.$owner.superclass[s.$name];
      if (!o) {
        s = this.callSuper.caller;
        var r, p;
        if (!s.$owner) {
          if (!s.caller) {
            throw new Error(
              "Attempting to call a protected method from the public scope, which is not allowed",
            );
          }
          s = s.caller;
        }
        r = s.$owner.superclass;
        p = s.$name;
        if (!(p in r)) {
          throw new Error(
            "this.callSuper() was called but there's no such method (" +
              p +
              ") found in the parent class (" +
              (Ext.getClassName(r) || "Object") +
              ")",
          );
        }
      }
      return o.apply(this, q || b);
    },
    self: h,
    constructor: function () {
      return this;
    },
    getConfigurator: function () {
      return this.$config || this.self.getConfigurator();
    },
    initConfig: function (q) {
      var p = this,
        o = p.getConfigurator();
      p.initConfig = Ext.emptyFn;
      p.initialConfig = q || {};
      o.configure(p, q);
      return p;
    },
    beforeInitConfig: Ext.emptyFn,
    getConfig: n,
    setConfig: function (q, s, p) {
      var r = this,
        o;
      if (q) {
        if (typeof q === "string") {
          o = {};
          o[q] = s;
        } else {
          o = q;
        }
        r.getConfigurator().reconfigure(r, o, p);
      }
      return r;
    },
    getCurrentConfig: function () {
      var o = this.getConfigurator();
      return o.getCurrentConfig(this);
    },
    hasConfig: function (o) {
      return o in this.defaultConfig;
    },
    getInitialConfig: function (p) {
      var o = this.config;
      if (!p) {
        return o;
      }
      return o[p];
    },
    $links: null,
    link: function (p, r) {
      var q = this,
        o = q.$links || (q.$links = {});
      o[p] = true;
      q[p] = r;
      return r;
    },
    unlink: function (t) {
      var r = this,
        o,
        q,
        p,
        s;
      if (!Ext.isArray(t)) {
        Ext.raise("Invalid argument - expected array of strings");
      }
      for (o = 0, q = t.length; o < q; o++) {
        p = t[o];
        s = r[p];
        if (s) {
          if (s.isInstance && !s.destroyed) {
            s.destroy();
          } else {
            if (s.parentNode && "nodeType" in s) {
              s.parentNode.removeChild(s);
            }
          }
        }
        r[p] = null;
      }
      return r;
    },
    destroy: function () {
      var p = this,
        o = p.$links;
      p.initialConfig = p.config = null;
      p.destroy = Ext.emptyFn;
      p.isDestroyed = p.destroyed = true;
      if (o) {
        p.$links = null;
        p.unlink(Ext.Object.getKeys(o));
      }
    },
  });
  e.callOverridden = e.callParent;
  Ext.privacyViolation = function (x, p, r, v) {
    var o = r.$name,
      w = p.$owner && p.$owner.$className,
      y = v ? "static " : "",
      q = r.$privacy
        ? "Private " + y + r.$privacy + ' method "' + o + '"'
        : "Public " + y + 'method "' + o + '"';
    if (x.$className) {
      q = x.$className + ": " + q;
    }
    if (!p.$privacy) {
      q += w
        ? " hides public method inherited from " + w
        : " hides inherited public method.";
    } else {
      q += w
        ? " conflicts with private " + p.$privacy + " method declared by " + w
        : " conflicts with inherited private " + p.$privacy + " method.";
    }
    var u = Ext.getCompatVersion();
    var t = Ext.getVersion();
    if (t && u && u.lt(t)) {
      Ext.log.error(q);
    } else {
      Ext.raise(q);
    }
  };
  return h;
})(Ext.Function.flexSetter);
(function (b, a) {
  (Ext.util || (Ext.util = {})).Cache = b = function (c) {
    var e = this,
      d;
    if (c) {
      Ext.apply(e, c);
    }
    e.head = d = { id: (e.seed = 0), key: null, value: null };
    e.map = {};
    d.next = d.prev = d;
  };
  b.prototype = a = {
    maxSize: 100,
    count: 0,
    clear: function () {
      var e = this,
        c = e.head,
        d = c.next;
      c.next = c.prev = c;
      if (!e.evict.$nullFn) {
        for (; d !== c; d = d.next) {
          e.evict(d.key, d.value);
        }
      }
      e.count = 0;
    },
    each: function (e, d) {
      d = d || this;
      for (var c = this.head, f = c.next; f !== c; f = f.next) {
        if (e.call(d, f.key, f.value)) {
          break;
        }
      }
    },
    get: function (d) {
      var f = this,
        c = f.head,
        g = f.map,
        e = g[d];
      if (e) {
        if (e.prev !== c) {
          f.unlinkEntry(e);
          f.linkEntry(e);
        }
      } else {
        g[d] = e = { id: ++f.seed, key: d, value: f.miss.apply(f, arguments) };
        f.linkEntry(e);
        ++f.count;
        while (f.count > f.maxSize) {
          f.unlinkEntry(c.prev, true);
          --f.count;
        }
      }
      return e.value;
    },
    evict: Ext.emptyFn,
    linkEntry: function (d) {
      var c = this.head,
        e = c.next;
      d.next = e;
      d.prev = c;
      c.next = d;
      e.prev = d;
    },
    unlinkEntry: function (e, f) {
      var c = e.next,
        d = e.prev;
      d.next = c;
      c.prev = d;
      if (f) {
        this.evict(e.key, e.value);
      }
    },
  };
  a.destroy = a.clear;
})();
(function () {
  var d,
    c = Ext.Base,
    e = c.$staticMembers,
    b = function (g, f) {
      return g.length - f.length || (g < f ? -1 : g > f ? 1 : 0);
    };
  function a(g) {
    function f() {
      return this.constructor.apply(this, arguments) || null;
    }
    if (g) {
      f.name = g;
    }
    return f;
  }
  Ext.Class = d = function (g, h, f) {
    if (typeof g != "function") {
      f = h;
      h = g;
      g = null;
    }
    if (!h) {
      h = {};
    }
    g = d.create(g, h);
    d.process(g, h, f);
    return g;
  };
  Ext.apply(d, {
    makeCtor: a,
    onBeforeCreated: function (g, h, f) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(g, ">> Ext.Class#onBeforeCreated", arguments);
      g.addMembers(h);
      f.onCreated.call(g, g);
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(g, "<< Ext.Class#onBeforeCreated", arguments);
    },
    create: function (f, j) {
      var h = e.length,
        g;
      if (!f) {
        f = a(j.$className);
      }
      while (h--) {
        g = e[h];
        f[g] = c[g];
      }
      return f;
    },
    process: function (f, n, h) {
      var g = n.preprocessors || d.defaultPreprocessors,
        q = this.preprocessors,
        t = { onBeforeCreated: this.onBeforeCreated },
        s = [],
        u,
        m,
        l,
        r,
        k,
        p,
        o;
      delete n.preprocessors;
      f._classHooks = t;
      for (l = 0, r = g.length; l < r; l++) {
        u = g[l];
        if (typeof u == "string") {
          u = q[u];
          m = u.properties;
          if (m === true) {
            s.push(u.fn);
          } else {
            if (m) {
              for (k = 0, p = m.length; k < p; k++) {
                o = m[k];
                if (n.hasOwnProperty(o)) {
                  s.push(u.fn);
                  break;
                }
              }
            }
          }
        } else {
          s.push(u);
        }
      }
      t.onCreated = h ? h : Ext.emptyFn;
      t.preprocessors = s;
      this.doProcess(f, n, t);
    },
    doProcess: function (g, k, f) {
      var j = this,
        l = f.preprocessors,
        h = l.shift(),
        i = j.doProcess;
      for (; h; h = l.shift()) {
        if (h.call(j, g, k, f, i) === false) {
          return;
        }
      }
      f.onBeforeCreated.apply(j, arguments);
    },
    preprocessors: {},
    registerPreprocessor: function (g, j, h, f, i) {
      if (!f) {
        f = "last";
      }
      if (!h) {
        h = [g];
      }
      this.preprocessors[g] = { name: g, properties: h || false, fn: j };
      this.setDefaultPreprocessorPosition(g, f, i);
      return this;
    },
    getPreprocessor: function (f) {
      return this.preprocessors[f];
    },
    getPreprocessors: function () {
      return this.preprocessors;
    },
    defaultPreprocessors: [],
    getDefaultPreprocessors: function () {
      return this.defaultPreprocessors;
    },
    setDefaultPreprocessors: function (f) {
      this.defaultPreprocessors = Ext.Array.from(f);
      return this;
    },
    setDefaultPreprocessorPosition: function (h, j, i) {
      var f = this.defaultPreprocessors,
        g;
      if (typeof j == "string") {
        if (j === "first") {
          f.unshift(h);
          return this;
        } else {
          if (j === "last") {
            f.push(h);
            return this;
          }
        }
        j = j === "after" ? 1 : -1;
      }
      g = Ext.Array.indexOf(f, i);
      if (g !== -1) {
        Ext.Array.splice(f, Math.max(0, g + j), 0, h);
      }
      return this;
    },
  });
  d.registerPreprocessor(
    "extend",
    function (g, j, o) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(g, "Ext.Class#extendPreProcessor", arguments);
      var k = Ext.Base,
        l = k.prototype,
        m = j.extend,
        f,
        n,
        h;
      delete j.extend;
      if (m && m !== Object) {
        f = m;
      } else {
        f = k;
      }
      n = f.prototype;
      if (!f.$isClass) {
        for (h in l) {
          if (!n[h]) {
            n[h] = l[h];
          }
        }
      }
      g.extend(f);
      g.triggerExtended.apply(g, arguments);
      if (j.onClassExtended) {
        g.onExtended(j.onClassExtended, g);
        delete j.onClassExtended;
      }
    },
    true,
  );
  d.registerPreprocessor("privates", function (f, i) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(f, "Ext.Class#privatePreprocessor", arguments);
    var h = i.privates,
      j = h.statics,
      g = h.privacy || true;
    delete i.privates;
    delete h.statics;
    f.addMembers(h, false, g);
    if (j) {
      f.addMembers(j, true, g);
    }
  });
  d.registerPreprocessor("statics", function (f, g) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(f, "Ext.Class#staticsPreprocessor", arguments);
    f.addStatics(g.statics);
    delete g.statics;
  });
  d.registerPreprocessor("inheritableStatics", function (f, g) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(
        f,
        "Ext.Class#inheritableStaticsPreprocessor",
        arguments,
      );
    f.addInheritableStatics(g.inheritableStatics);
    delete g.inheritableStatics;
  });
  Ext.createRuleFn = function (f) {
    return new Function("$c", "with($c) { return (" + f + "); }");
  };
  Ext.expressionCache = new Ext.util.Cache({ miss: Ext.createRuleFn });
  Ext.ruleKeySortFn = b;
  Ext.getPlatformConfigKeys = function (h) {
    var g = [],
      f,
      i;
    for (f in h) {
      i = Ext.expressionCache.get(f);
      if (i(Ext.platformTags)) {
        g.push(f);
      }
    }
    g.sort(b);
    return g;
  };
  d.registerPreprocessor("platformConfig", function (h, m, t) {
    var n = m.platformConfig,
      j = m.config,
      r,
      o,
      p,
      k,
      g,
      u,
      f,
      s,
      l,
      q;
    delete m.platformConfig;
    if (n instanceof Array) {
      throw new Error("platformConfigs must be specified as an object.");
    }
    k = h.getConfigurator();
    o = k.configs;
    u = Ext.getPlatformConfigKeys(n);
    for (l = 0, q = u.length; l < q; ++l) {
      p = n[u[l]];
      g = r = null;
      for (f in p) {
        s = p[f];
        if (j && f in j) {
          (r || (r = {}))[f] = s;
          (g || (g = {}))[f] = j[f];
          delete j[f];
        } else {
          if (f in o) {
            (r || (r = {}))[f] = s;
          } else {
            m[f] = s;
          }
        }
      }
      if (g) {
        k.add(g);
      }
      if (r) {
        k.add(r);
      }
    }
  });
  d.registerPreprocessor("config", function (f, g) {
    if (g.hasOwnProperty("$configPrefixed")) {
      f.prototype.$configPrefixed = g.$configPrefixed;
    }
    f.addConfig(g.config);
    delete g.config;
  });
  d.registerPreprocessor("cachedConfig", function (f, g) {
    if (g.hasOwnProperty("$configPrefixed")) {
      f.prototype.$configPrefixed = g.$configPrefixed;
    }
    f.addCachedConfig(g.cachedConfig);
    delete g.cachedConfig;
  });
  d.registerPreprocessor("mixins", function (i, j, f) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(i, "Ext.Class#mixinsPreprocessor", arguments);
    var h = j.mixins,
      g = f.onCreated;
    delete j.mixins;
    f.onCreated = function () {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(
          i,
          "Ext.Class#mixinsPreprocessor#beforeCreated",
          arguments,
        );
      f.onCreated = g;
      i.mixin(h);
      return f.onCreated.apply(this, arguments);
    };
  });
  Ext.extend = function (h, i, g) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(
        h,
        "Ext.Class#extend-backwards-compatible",
        arguments,
      );
    if (arguments.length === 2 && Ext.isObject(i)) {
      g = i;
      i = h;
      h = null;
    }
    var f;
    if (!i) {
      throw new Error(
        "[Ext.extend] Attempting to extend from a class which has not been loaded on the page.",
      );
    }
    g.extend = i;
    g.preprocessors = [
      "extend",
      "statics",
      "inheritableStatics",
      "mixins",
      "platformConfig",
      "config",
    ];
    if (h) {
      f = new d(h, g);
      f.prototype.constructor = h;
    } else {
      f = new d(g);
    }
    f.prototype.override = function (k) {
      for (var j in k) {
        if (k.hasOwnProperty(j)) {
          this[j] = k[j];
        }
      }
    };
    return f;
  };
})();
Ext.Inventory = function () {
  var a = this;
  a.names = [];
  a.paths = {};
  a.alternateToName = {};
  a.aliasToName = {};
  a.nameToAliases = {};
  a.nameToAlternates = {};
};
Ext.Inventory.prototype = {
  _array1: [0],
  prefixes: null,
  dotRe: /\./g,
  wildcardRe: /\*/g,
  addAlias: function (b, a) {
    return this.addMapping(b, a, this.aliasToName, this.nameToAliases);
  },
  addAlternate: function (a, b) {
    return this.addMapping(a, b, this.alternateToName, this.nameToAlternates);
  },
  addMapping: function (k, e, f, m) {
    var b = k.$className || k,
      h = b,
      j = this._array1,
      n,
      d,
      o,
      g,
      c,
      l;
    if (Ext.isString(b)) {
      h = {};
      h[b] = e;
    }
    for (o in h) {
      d = h[o];
      if (Ext.isString(d)) {
        j[0] = d;
        d = j;
      }
      c = d.length;
      l = m[o] || (m[o] = []);
      for (g = 0; g < c; ++g) {
        if (!(n = d[g])) {
          continue;
        }
        if (f[n] !== o) {
          if (f[n]) {
            Ext.log.warn(
              "Overriding existing mapping: '" +
                n +
                "' From '" +
                f[n] +
                "' to '" +
                o +
                "'. Is this intentional?",
            );
          }
          f[n] = o;
          l.push(n);
        }
      }
    }
  },
  getAliasesByName: function (a) {
    return this.nameToAliases[a] || null;
  },
  getAlternatesByName: function (a) {
    return this.nameToAlternates[a] || null;
  },
  getNameByAlias: function (a) {
    return this.aliasToName[a] || "";
  },
  getNameByAlternate: function (a) {
    return this.alternateToName[a] || "";
  },
  getNamesByExpression: function (l, a, h) {
    var u = this,
      r = u.aliasToName,
      o = u.alternateToName,
      b = u.nameToAliases,
      d = u.nameToAlternates,
      t = h ? a : {},
      k = [],
      s = Ext.isString(l) ? [l] : l,
      g = s.length,
      e = u.wildcardRe,
      c,
      p,
      q,
      j,
      m,
      v,
      f;
    for (p = 0; p < g; ++p) {
      if ((c = s[p]).indexOf("*") < 0) {
        if (!(v = r[c])) {
          if (!(v = o[c])) {
            v = c;
          }
        }
        if (!(v in t) && !(a && v in a)) {
          t[v] = 1;
          k.push(v);
        }
      } else {
        f = new RegExp("^" + c.replace(e, "(.*?)") + "$");
        for (v in b) {
          if (!(v in t) && !(a && v in a)) {
            if (!(j = f.test(v))) {
              m = (q = b[v]).length;
              while (!j && m-- > 0) {
                j = f.test(q[m]);
              }
              q = d[v];
              if (q && !j) {
                m = q.length;
                while (!j && m-- > 0) {
                  j = f.test(q[m]);
                }
              }
            }
            if (j) {
              t[v] = 1;
              k.push(v);
            }
          }
        }
      }
    }
    return k;
  },
  getPath: function (b) {
    var c = this,
      e = c.paths,
      a = "",
      d;
    if (b in e) {
      a = e[b];
    } else {
      d = c.getPrefix(b);
      if (d) {
        b = b.substring(d.length + 1);
        a = e[d];
        if (a) {
          a += "/";
        }
      }
      a += b.replace(c.dotRe, "/") + ".js";
    }
    return a;
  },
  getPrefix: function (b) {
    if (b in this.paths) {
      return b;
    }
    var e = this.getPrefixes(),
      a = e.length,
      c,
      d;
    while (a-- > 0) {
      c = (d = e[a]).length;
      if (c < b.length && b.charAt(c) === "." && d === b.substring(0, c)) {
        return d;
      }
    }
    return "";
  },
  getPrefixes: function () {
    var a = this,
      b = a.prefixes;
    if (!b) {
      a.prefixes = b = a.names.slice(0);
      b.sort(a._compareNames);
    }
    return b;
  },
  removeName: function (b) {
    var f = this,
      j = f.aliasToName,
      l = f.alternateToName,
      k = f.nameToAliases,
      e = f.nameToAlternates,
      c = k[b],
      g = e[b],
      d,
      h;
    delete k[b];
    delete e[b];
    if (c) {
      for (d = c.length; d--; ) {
        if (b === (h = c[d])) {
          delete j[h];
        }
      }
    }
    if (g) {
      for (d = g.length; d--; ) {
        if (b === (h = g[d])) {
          delete l[h];
        }
      }
    }
  },
  resolveName: function (a) {
    var b = this,
      c;
    if (!(a in b.nameToAliases)) {
      if (!(c = b.aliasToName[a])) {
        c = b.alternateToName[a];
      }
    }
    return c || a;
  },
  select: function (e, c) {
    var d = this,
      f = {},
      b = {
        excludes: f,
        exclude: function () {
          d.getNamesByExpression(arguments, f, true);
          return this;
        },
      },
      a;
    for (a in e) {
      b[a] = d.selectMethod(f, e[a], c || e);
    }
    return b;
  },
  selectMethod: function (d, b, a) {
    var c = this;
    return function (e) {
      var f = Ext.Array.slice(arguments, 1);
      f.unshift(c.getNamesByExpression(e, d));
      return b.apply(a, f);
    };
  },
  setPath: Ext.Function.flexSetter(function (a, c) {
    var b = this;
    b.paths[a] = c;
    b.names.push(a);
    b.prefixes = null;
    return b;
  }),
  _compareNames: function (a, c) {
    var b = a.length - c.length;
    if (!b) {
      b = a < c ? -1 : 1;
    }
    return b;
  },
};
Ext.ClassManager = (function (p, k, r, e, n) {
  var b = Ext.Class.makeCtor,
    g = [],
    h = { Ext: { name: "Ext", value: Ext } },
    c = Ext.apply(new Ext.Inventory(), {
      classes: {},
      classState: {},
      existCache: {},
      instantiators: [],
      isCreated: function (t) {
        if (typeof t !== "string" || t.length < 1) {
          throw new Error(
            "[Ext.ClassManager] Invalid classname, must be a string and must not be empty",
          );
        }
        if (c.classes[t] || c.existCache[t]) {
          return true;
        }
        if (!c.lookupName(t, false)) {
          return false;
        }
        c.triggerCreated(t);
        return true;
      },
      createdListeners: [],
      nameCreatedListeners: {},
      existsListeners: [],
      nameExistsListeners: {},
      overrideMap: {},
      triggerCreated: function (t, u) {
        c.existCache[t] = u || 1;
        c.classState[t] += 40;
        c.notify(t, c.createdListeners, c.nameCreatedListeners);
      },
      onCreated: function (v, u, t) {
        c.addListener(v, u, t, c.createdListeners, c.nameCreatedListeners);
      },
      notify: function (B, D, v) {
        var w = c.getAlternatesByName(B),
          C = [B],
          y,
          A,
          x,
          z,
          u,
          t;
        for (y = 0, A = D.length; y < A; y++) {
          u = D[y];
          u.fn.call(u.scope, B);
        }
        while (C) {
          for (y = 0, A = C.length; y < A; y++) {
            t = C[y];
            D = v[t];
            if (D) {
              for (x = 0, z = D.length; x < z; x++) {
                u = D[x];
                u.fn.call(u.scope, t);
              }
              delete v[t];
            }
          }
          C = w;
          w = null;
        }
      },
      addListener: function (y, x, w, v, u) {
        if (Ext.isArray(w)) {
          y = Ext.Function.createBarrier(w.length, y, x);
          for (t = 0; t < w.length; t++) {
            this.addListener(y, null, w[t], v, u);
          }
          return;
        }
        var t,
          z = { fn: y, scope: x };
        if (w) {
          if (this.isCreated(w)) {
            y.call(x, w);
            return;
          }
          if (!u[w]) {
            u[w] = [];
          }
          u[w].push(z);
        } else {
          v.push(z);
        }
      },
      $namespaceCache: h,
      addRootNamespaces: function (u) {
        for (var t in u) {
          h[t] = { name: t, value: u[t] };
        }
      },
      clearNamespaceCache: function () {
        g.length = 0;
        for (var t in h) {
          if (!h[t].value) {
            delete h[t];
          }
        }
      },
      getNamespaceEntry: function (u) {
        if (typeof u !== "string") {
          return u;
        }
        var v = h[u],
          t;
        if (!v) {
          t = u.lastIndexOf(".");
          if (t < 0) {
            v = { name: u };
          } else {
            v = {
              name: u.substring(t + 1),
              parent: c.getNamespaceEntry(u.substring(0, t)),
            };
          }
          h[u] = v;
        }
        return v;
      },
      lookupName: function (w, y) {
        var x = c.getNamespaceEntry(w),
          v = Ext.global,
          t = 0,
          z,
          u;
        for (z = x; z; z = z.parent) {
          g[t++] = z;
        }
        while (v && t-- > 0) {
          z = g[t];
          u = v;
          v = z.value || v[z.name];
          if (!v && y) {
            u[z.name] = v = {};
          }
        }
        return v;
      },
      setNamespace: function (u, w) {
        var v = c.getNamespaceEntry(u),
          t = Ext.global;
        if (v.parent) {
          t = c.lookupName(v.parent, true);
        }
        t[v.name] = w;
        return w;
      },
      set: function (t, v) {
        var u = c.getName(v);
        c.classes[t] = c.setNamespace(t, v);
        if (u && u !== t) {
          c.addAlternate(u, t);
        }
        return c;
      },
      get: function (t) {
        return c.classes[t] || c.lookupName(t, false);
      },
      addNameAliasMappings: function (t) {
        c.addAlias(t);
      },
      addNameAlternateMappings: function (t) {
        c.addAlternate(t);
      },
      getByAlias: function (t) {
        return c.get(c.getNameByAlias(t));
      },
      getName: function (t) {
        return (t && t.$className) || "";
      },
      getClass: function (t) {
        return (t && t.self) || null;
      },
      create: function (u, w, t) {
        if (u != null && typeof u !== "string") {
          throw new Error(
            "[Ext.define] Invalid class name '" +
              u +
              "' specified, must be a non-empty string",
          );
        }
        var v = b(u);
        if (typeof w === "function") {
          w = w(v);
        }
        if (u) {
          if (c.classes[u]) {
            Ext.log.warn(
              "[Ext.define] Duplicate class name '" +
                u +
                "' specified, must be a non-empty string",
            );
          }
          v.name = u;
        }
        w.$className = u;
        return new p(v, w, function () {
          var x = w.postprocessors || c.defaultPostprocessors,
            E = c.postprocessors,
            F = [],
            D,
            z,
            C,
            y,
            B,
            A,
            G;
          delete w.postprocessors;
          for (z = 0, C = x.length; z < C; z++) {
            D = x[z];
            if (typeof D === "string") {
              D = E[D];
              A = D.properties;
              if (A === true) {
                F.push(D.fn);
              } else {
                if (A) {
                  for (y = 0, B = A.length; y < B; y++) {
                    G = A[y];
                    if (w.hasOwnProperty(G)) {
                      F.push(D.fn);
                      break;
                    }
                  }
                }
              }
            } else {
              F.push(D);
            }
          }
          w.postprocessors = F;
          w.createdFn = t;
          c.processCreate(u, this, w);
        });
      },
      processCreate: function (w, u, y) {
        var x = this,
          t = y.postprocessors.shift(),
          v = y.createdFn;
        if (!t) {
          Ext.classSystemMonitor &&
            Ext.classSystemMonitor(
              w,
              "Ext.ClassManager#classCreated",
              arguments,
            );
          if (w) {
            x.set(w, u);
          }
          delete u._classHooks;
          if (v) {
            v.call(u, u);
          }
          if (w) {
            x.triggerCreated(w);
          }
          return;
        }
        if (t.call(x, w, u, y, x.processCreate) !== false) {
          x.processCreate(w, u, y);
        }
      },
      createOverride: function (z, x, v) {
        var B = this,
          C = x.override,
          E = x.requires,
          w = x.uses,
          y = x.mixins,
          t,
          D = x.compatibility,
          A,
          u = function () {
            var F, J, I, H, G;
            if (!A) {
              J = E ? E.slice(0) : [];
              if (y) {
                if (!(t = y instanceof Array)) {
                  for (H in y) {
                    if (Ext.isString((F = y[H]))) {
                      J.push(F);
                    }
                  }
                } else {
                  for (I = 0, G = y.length; I < G; ++I) {
                    if (Ext.isString((F = y[I]))) {
                      J.push(F);
                    }
                  }
                }
              }
              A = true;
              if (J.length) {
                Ext.require(J, u);
                return;
              }
            }
            if (t) {
              for (I = 0, G = y.length; I < G; ++I) {
                if (Ext.isString((F = y[I]))) {
                  y[I] = Ext.ClassManager.get(F);
                }
              }
            } else {
              if (y) {
                for (H in y) {
                  if (Ext.isString((F = y[H]))) {
                    y[H] = Ext.ClassManager.get(F);
                  }
                }
              }
            }
            F = B.get(C);
            delete x.override;
            delete x.compatibility;
            delete x.requires;
            delete x.uses;
            Ext.override(F, x);
            Ext.Loader.history.push(z);
            if (w) {
              Ext.Loader.addUsedClasses(w);
            }
            if (v) {
              v.call(F, F);
            }
          };
        c.overrideMap[z] = true;
        if (!D || Ext.checkVersion(D)) {
          B.onCreated(u, B, C);
        }
        B.triggerCreated(z, 2);
        return B;
      },
      instantiateByAlias: function () {
        var u = arguments[0],
          t = r.call(arguments),
          v = this.getNameByAlias(u);
        if (!v) {
          throw new Error("[Ext.createByAlias] Unrecognized alias: " + u);
        }
        t[0] = v;
        return Ext.create.apply(Ext, t);
      },
      instantiate: function () {
        Ext.log.warn(
          "Ext.ClassManager.instantiate() is deprecated.  Use Ext.create() instead.",
        );
        return Ext.create.apply(Ext, arguments);
      },
      dynInstantiate: function (u, t) {
        t = e(t, true);
        t.unshift(u);
        return Ext.create.apply(Ext, t);
      },
      getInstantiator: function (w) {
        var v = this.instantiators,
          x,
          u,
          t;
        x = v[w];
        if (!x) {
          u = w;
          t = [];
          for (u = 0; u < w; u++) {
            t.push("a[" + u + "]");
          }
          x = v[w] = new Function(
            "c",
            "a",
            "return new c(" + t.join(",") + ")",
          );
          x.name = "Ext.create" + w;
        }
        return x;
      },
      postprocessors: {},
      defaultPostprocessors: [],
      registerPostprocessor: function (u, x, v, t, w) {
        if (!t) {
          t = "last";
        }
        if (!v) {
          v = [u];
        }
        this.postprocessors[u] = { name: u, properties: v || false, fn: x };
        this.setDefaultPostprocessorPosition(u, t, w);
        return this;
      },
      setDefaultPostprocessors: function (t) {
        this.defaultPostprocessors = e(t);
        return this;
      },
      setDefaultPostprocessorPosition: function (u, x, w) {
        var v = this.defaultPostprocessors,
          t;
        if (typeof x === "string") {
          if (x === "first") {
            v.unshift(u);
            return this;
          } else {
            if (x === "last") {
              v.push(u);
              return this;
            }
          }
          x = x === "after" ? 1 : -1;
        }
        t = Ext.Array.indexOf(v, w);
        if (t !== -1) {
          Ext.Array.splice(v, Math.max(0, t + x), 0, u);
        }
        return this;
      },
    });
  c.registerPostprocessor(
    "alias",
    function (v, u, y) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(
          v,
          "Ext.ClassManager#aliasPostProcessor",
          arguments,
        );
      var t = Ext.Array.from(y.alias),
        w,
        x;
      for (w = 0, x = t.length; w < x; w++) {
        k = t[w];
        this.addAlias(u, k);
      }
    },
    ["xtype", "alias"],
  );
  c.registerPostprocessor("singleton", function (u, t, w, v) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(
        u,
        "Ext.ClassManager#singletonPostProcessor",
        arguments,
      );
    if (w.singleton) {
      v.call(this, u, new t(), w);
    } else {
      return true;
    }
    return false;
  });
  c.registerPostprocessor("alternateClassName", function (u, t, y) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(
        u,
        "Ext.ClassManager#alternateClassNamePostprocessor",
        arguments,
      );
    var w = y.alternateClassName,
      v,
      x,
      z;
    if (!(w instanceof Array)) {
      w = [w];
    }
    for (v = 0, x = w.length; v < x; v++) {
      z = w[v];
      if (typeof z !== "string") {
        throw new Error(
          "[Ext.define] Invalid alternate of: '" +
            z +
            "' for class: '" +
            u +
            "'; must be a valid string",
        );
      }
      this.set(z, t);
    }
  });
  c.registerPostprocessor("debugHooks", function (u, t, v) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(t, "Ext.Class#debugHooks", arguments);
    if (Ext.isDebugEnabled(t.$className, v.debugHooks.$enabled)) {
      delete v.debugHooks.$enabled;
      Ext.override(t, v.debugHooks);
    }
    var w = t.isInstance ? t.self : t;
    delete w.prototype.debugHooks;
  });
  c.registerPostprocessor("deprecated", function (u, t, v) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(t, "Ext.Class#deprecated", arguments);
    var w = t.isInstance ? t.self : t;
    w.addDeprecations(v.deprecated);
    delete w.prototype.deprecated;
  });
  Ext.apply(Ext, {
    create: function () {
      var v = arguments[0],
        w = typeof v,
        u = r.call(arguments, 1),
        t;
      if (w === "function") {
        t = v;
      } else {
        if (w !== "string" && u.length === 0) {
          u = [v];
          if (!(v = v.xclass)) {
            v = u[0].xtype;
            if (v) {
              v = "widget." + v;
            }
          }
        }
        if (typeof v !== "string" || v.length < 1) {
          throw new Error(
            "[Ext.create] Invalid class name or alias '" +
              v +
              "' specified, must be a non-empty string",
          );
        }
        v = c.resolveName(v);
        t = c.get(v);
      }
      if (!t) {
        Ext.log.warn(
          "[Ext.Loader] Synchronously loading '" +
            v +
            "'; consider adding Ext.require('" +
            v +
            "') above Ext.onReady",
        );
        Ext.syncRequire(v);
        t = c.get(v);
      }
      if (!t) {
        throw new Error("[Ext.create] Unrecognized class name / alias: " + v);
      }
      if (typeof t !== "function") {
        throw new Error(
          "[Ext.create] Singleton '" + v + "' cannot be instantiated.",
        );
      }
      return c.getInstantiator(u.length)(t, u);
    },
    widget: function (v, u) {
      var y = v,
        w,
        x,
        t;
      if (typeof y !== "string") {
        u = v;
        y = u.xtype;
        x = u.xclass;
      } else {
        u = u || {};
      }
      if (u.isComponent) {
        return u;
      }
      if (!x) {
        w = "widget." + y;
        x = c.getNameByAlias(w);
      }
      if (x) {
        t = c.get(x);
      }
      if (!t) {
        return Ext.create(x || w, u);
      }
      return new t(u);
    },
    createByAlias: k(c, "instantiateByAlias"),
    define: function (u, v, t) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(u, "ClassManager#define", arguments);
      if (v.override) {
        c.classState[u] = 20;
        return c.createOverride.apply(c, arguments);
      }
      c.classState[u] = 10;
      return c.create.apply(c, arguments);
    },
    undefine: function (y) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(y, "Ext.ClassManager#undefine", arguments);
      var u = c.classes,
        v,
        A,
        t,
        w;
      delete u[y];
      delete c.existCache[y];
      delete c.classState[y];
      c.removeName(y);
      var z = c.getNamespaceEntry(y),
        B = z.parent ? c.lookupName(z.parent, false) : Ext.global;
      if (B) {
        try {
          delete B[z.name];
        } catch (x) {
          B[z.name] = undefined;
        }
      }
    },
    getClassName: k(c, "getName"),
    getDisplayName: function (t) {
      if (t) {
        if (t.displayName) {
          return t.displayName;
        }
        if (t.$name && t.$class) {
          return Ext.getClassName(t.$class) + "#" + t.$name;
        }
        if (t.$className) {
          return t.$className;
        }
      }
      return "Anonymous";
    },
    getClass: k(c, "getClass"),
    namespace: function () {
      var t = n,
        u;
      for (u = arguments.length; u-- > 0; ) {
        t = c.lookupName(arguments[u], true);
      }
      return t;
    },
  });
  Ext.addRootNamespaces = c.addRootNamespaces;
  Ext.createWidget = Ext.widget;
  Ext.ns = Ext.namespace;
  p.registerPreprocessor(
    "className",
    function (t, u) {
      if ("$className" in u) {
        t.$className = u.$className;
        t.displayName = t.$className;
      }
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(
          t,
          "Ext.ClassManager#classNamePreprocessor",
          arguments,
        );
    },
    true,
    "first",
  );
  p.registerPreprocessor(
    "alias",
    function (E, y) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(
          E,
          "Ext.ClassManager#aliasPreprocessor",
          arguments,
        );
      var C = E.prototype,
        v = e(y.xtype),
        t = e(y.alias),
        F = "widget.",
        D = F.length,
        z = Array.prototype.slice.call(C.xtypesChain || []),
        w = Ext.merge({}, C.xtypesMap || {}),
        x,
        B,
        A,
        u;
      for (x = 0, B = t.length; x < B; x++) {
        A = t[x];
        if (typeof A !== "string" || A.length < 1) {
          throw new Error(
            "[Ext.define] Invalid alias of: '" +
              A +
              "' for class: '" +
              s +
              "'; must be a valid string",
          );
        }
        if (A.substring(0, D) === F) {
          u = A.substring(D);
          Ext.Array.include(v, u);
        }
      }
      E.xtype = y.xtype = v[0];
      y.xtypes = v;
      for (x = 0, B = v.length; x < B; x++) {
        u = v[x];
        if (!w[u]) {
          w[u] = true;
          z.push(u);
        }
      }
      y.xtypesChain = z;
      y.xtypesMap = w;
      Ext.Function.interceptAfter(y, "onClassCreated", function () {
        Ext.classSystemMonitor &&
          Ext.classSystemMonitor(
            E,
            "Ext.ClassManager#aliasPreprocessor#afterClassCreated",
            arguments,
          );
        var G = C.mixins,
          I,
          H;
        for (I in G) {
          if (G.hasOwnProperty(I)) {
            H = G[I];
            v = H.xtypes;
            if (v) {
              for (x = 0, B = v.length; x < B; x++) {
                u = v[x];
                if (!w[u]) {
                  w[u] = true;
                  z.push(u);
                }
              }
            }
          }
        }
      });
      for (x = 0, B = v.length; x < B; x++) {
        u = v[x];
        if (typeof u !== "string" || u.length < 1) {
          throw new Error(
            "[Ext.define] Invalid xtype of: '" +
              u +
              "' for class: '" +
              s +
              "'; must be a valid non-empty string",
          );
        }
        Ext.Array.include(t, F + u);
      }
      y.alias = t;
    },
    ["xtype", "alias"],
  );
  if (Ext.manifest) {
    var f = Ext.manifest,
      q = f.classes,
      m = f.paths,
      o = {},
      i = {},
      d,
      j,
      s,
      l,
      a;
    if (m) {
      if (f.bootRelative) {
        a = Ext.Boot.baseUrl;
        for (l in m) {
          if (m.hasOwnProperty(l)) {
            m[l] = a + m[l];
          }
        }
      }
      c.setPath(m);
    }
    if (q) {
      for (d in q) {
        i[d] = [];
        o[d] = [];
        j = q[d];
        if (j.alias) {
          o[d] = j.alias;
        }
        if (j.alternates) {
          i[d] = j.alternates;
        }
      }
    }
    c.addAlias(o);
    c.addAlternate(i);
  }
  return c;
})(
  Ext.Class,
  Ext.Function.alias,
  Array.prototype.slice,
  Ext.Array.from,
  Ext.global,
);
(Ext.env || (Ext.env = {})).Browser = function (t, n) {
  var u = this,
    a = u.browserPrefixes,
    b = u.enginePrefixes,
    q = t.match(
      new RegExp(
        "((?:" + Ext.Object.getValues(a).join(")|(?:") + "))([\\w\\._]+)",
      ),
    ),
    g = t.match(
      new RegExp(
        "((?:" + Ext.Object.getValues(b).join(")|(?:") + "))([\\w\\._]+)",
      ),
    ),
    c = u.browserNames,
    p = c.other,
    j = u.engineNames,
    s = j.other,
    l = "",
    f = "",
    d = "",
    h = false,
    o,
    m,
    k,
    v,
    r;
  u.userAgent = t;
  if (q) {
    p = c[Ext.Object.getKey(a, q[1])];
    if (p === "Safari" && /^Opera/.test(t)) {
      p = "Opera";
    }
    l = new Ext.Version(q[2]);
  }
  if (g) {
    s = j[Ext.Object.getKey(b, g[1])];
    f = new Ext.Version(g[2]);
  }
  if (s === "Trident" && p !== "IE") {
    p = "IE";
    var e = t.match(/.*rv:(\d+.\d+)/);
    if (e && e.length) {
      e = e[1];
      l = new Ext.Version(e);
    }
  }
  if (p && l) {
    Ext.setVersion(p, l);
  }
  if (t.match(/FB/) && p === "Other") {
    p = c.safari;
    s = j.webkit;
  }
  if (t.match(/Android.*Chrome/g)) {
    p = "ChromeMobile";
  }
  if (t.match(/OPR/)) {
    p = "Opera";
    q = t.match(/OPR\/(\d+.\d+)/);
    l = new Ext.Version(q[1]);
  }
  Ext.apply(this, { engineName: s, engineVersion: f, name: p, version: l });
  this.setFlag(p, true, n);
  if (l) {
    d = l.getMajor() || "";
    if (u.is.IE) {
      d = parseInt(d, 10);
      k = document.documentMode;
      if (k === 7 || (d === 7 && k !== 8 && k !== 9 && k !== 10)) {
        d = 7;
      } else {
        if (k === 8 || (d === 8 && k !== 8 && k !== 9 && k !== 10)) {
          d = 8;
        } else {
          if (k === 9 || (d === 9 && k !== 7 && k !== 8 && k !== 10)) {
            d = 9;
          } else {
            if (k === 10 || (d === 10 && k !== 7 && k !== 8 && k !== 9)) {
              d = 10;
            } else {
              if (
                k === 11 ||
                (d === 11 && k !== 7 && k !== 8 && k !== 9 && k !== 10)
              ) {
                d = 11;
              }
            }
          }
        }
      }
      r = Math.max(d, 11);
      for (o = 7; o <= r; ++o) {
        m = "isIE" + o;
        if (d <= o) {
          Ext[m + "m"] = true;
        }
        if (d === o) {
          Ext[m] = true;
        }
        if (d >= o) {
          Ext[m + "p"] = true;
        }
      }
    }
    if (u.is.Opera && parseInt(d, 10) <= 12) {
      Ext.isOpera12m = true;
    }
    Ext.chromeVersion = Ext.isChrome ? d : 0;
    Ext.firefoxVersion = Ext.isFirefox ? d : 0;
    Ext.ieVersion = Ext.isIE ? d : 0;
    Ext.operaVersion = Ext.isOpera ? d : 0;
    Ext.safariVersion = Ext.isSafari ? d : 0;
    Ext.webKitVersion = Ext.isWebKit ? d : 0;
    this.setFlag(p + d, true, n);
    this.setFlag(p + l.getShortVersion());
  }
  for (o in c) {
    if (c.hasOwnProperty(o)) {
      v = c[o];
      this.setFlag(v, p === v);
    }
  }
  this.setFlag(v);
  if (f) {
    this.setFlag(s + (f.getMajor() || ""));
    this.setFlag(s + f.getShortVersion());
  }
  for (o in j) {
    if (j.hasOwnProperty(o)) {
      v = j[o];
      this.setFlag(v, s === v, n);
    }
  }
  this.setFlag("Standalone", !!navigator.standalone);
  this.setFlag(
    "Ripple",
    !!document.getElementById("tinyhippos-injected") &&
      !Ext.isEmpty(window.top.ripple),
  );
  this.setFlag("WebWorks", !!window.blackberry);
  if (
    window.PhoneGap !== undefined ||
    window.Cordova !== undefined ||
    window.cordova !== undefined
  ) {
    h = true;
    this.setFlag("PhoneGap");
    this.setFlag("Cordova");
  } else {
    if (!!window.isNK) {
      h = true;
      this.setFlag("Sencha");
    }
  }
  if (/(Glass)/i.test(t)) {
    this.setFlag("GoogleGlass");
  }
  if (/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)(?!.*FBAN)/i.test(t)) {
    h = true;
  }
  this.setFlag("WebView", h);
  this.isStrict = Ext.isStrict = document.compatMode === "CSS1Compat";
  this.isSecure = Ext.isSecure;
  this.identity = p + d + (this.isStrict ? "Strict" : "Quirks");
};
Ext.env.Browser.prototype = {
  constructor: Ext.env.Browser,
  browserNames: {
    ie: "IE",
    firefox: "Firefox",
    safari: "Safari",
    chrome: "Chrome",
    opera: "Opera",
    dolfin: "Dolfin",
    webosbrowser: "webOSBrowser",
    chromeMobile: "ChromeMobile",
    chromeiOS: "ChromeiOS",
    silk: "Silk",
    other: "Other",
  },
  engineNames: {
    webkit: "WebKit",
    gecko: "Gecko",
    presto: "Presto",
    trident: "Trident",
    other: "Other",
  },
  enginePrefixes: {
    webkit: "AppleWebKit/",
    gecko: "Gecko/",
    presto: "Presto/",
    trident: "Trident/",
  },
  browserPrefixes: {
    ie: "MSIE ",
    firefox: "Firefox/",
    chrome: "Chrome/",
    safari: "Version/",
    opera: "OPR/",
    dolfin: "Dolfin/",
    webosbrowser: "wOSBrowser/",
    chromeMobile: "CrMo/",
    chromeiOS: "CriOS/",
    silk: "Silk/",
  },
  styleDashPrefixes: {
    WebKit: "-webkit-",
    Gecko: "-moz-",
    Trident: "-ms-",
    Presto: "-o-",
    Other: "",
  },
  stylePrefixes: {
    WebKit: "Webkit",
    Gecko: "Moz",
    Trident: "ms",
    Presto: "O",
    Other: "",
  },
  propertyPrefixes: {
    WebKit: "webkit",
    Gecko: "moz",
    Trident: "ms",
    Presto: "o",
    Other: "",
  },
  is: function (a) {
    return !!this.is[a];
  },
  name: null,
  version: null,
  engineName: null,
  engineVersion: null,
  setFlag: function (a, c, b) {
    if (c === undefined) {
      c = true;
    }
    this.is[a] = c;
    this.is[a.toLowerCase()] = c;
    if (b) {
      Ext["is" + a] = c;
    }
    return this;
  },
  getStyleDashPrefix: function () {
    return this.styleDashPrefixes[this.engineName];
  },
  getStylePrefix: function () {
    return this.stylePrefixes[this.engineName];
  },
  getVendorProperyName: function (a) {
    var b = this.propertyPrefixes[this.engineName];
    if (b.length > 0) {
      return b + Ext.String.capitalize(a);
    }
    return a;
  },
  getPreferredTranslationMethod: function (a) {
    if (
      typeof a === "object" &&
      "translationMethod" in a &&
      a.translationMethod !== "auto"
    ) {
      return a.translationMethod;
    } else {
      return "csstransform";
    }
  },
};
(function (a) {
  Ext.browser = new Ext.env.Browser(a, true);
  Ext.userAgent = a.toLowerCase();
  Ext.SSL_SECURE_URL =
    Ext.isSecure && Ext.isIE ? "javascript:''" : "about:blank";
})(Ext.global.navigator.userAgent);
Ext.env.OS = function (o, b, l) {
  var k = this,
    j = k.names,
    d = k.prefixes,
    a,
    h = "",
    f = k.is,
    c,
    g,
    e,
    n,
    m;
  l = l || Ext.browser;
  for (c in d) {
    if (d.hasOwnProperty(c)) {
      g = d[c];
      e = o.match(new RegExp("(?:" + g + ")([^\\s;]+)"));
      if (e) {
        a = j[c];
        m = e[1];
        if (m && m === "HTC_") {
          h = new Ext.Version("2.3");
        } else {
          if (m && m === "Silk/") {
            h = new Ext.Version("2.3");
          } else {
            h = new Ext.Version(e[e.length - 1]);
          }
        }
        break;
      }
    }
  }
  if (!a) {
    a = j[(o.toLowerCase().match(/mac|win|linux/) || ["other"])[0]];
    h = new Ext.Version("");
  }
  this.name = a;
  this.version = h;
  if (b) {
    this.setFlag(b.replace(/ simulator$/i, ""));
  }
  this.setFlag(a);
  if (h) {
    this.setFlag(a + (h.getMajor() || ""));
    this.setFlag(a + h.getShortVersion());
  }
  for (c in j) {
    if (j.hasOwnProperty(c)) {
      n = j[c];
      if (!f.hasOwnProperty(a)) {
        this.setFlag(n, a === n);
      }
    }
  }
  if (this.name === "iOS" && window.screen.height === 568) {
    this.setFlag("iPhone5");
  }
  if (l.is.Safari || l.is.Silk) {
    if (
      this.is.Android2 ||
      this.is.Android3 ||
      l.version.shortVersion === 501
    ) {
      l.setFlag("AndroidStock");
    }
    if (this.is.Android4) {
      l.setFlag("AndroidStock");
      l.setFlag("AndroidStock4");
    }
  }
};
Ext.env.OS.prototype = {
  constructor: Ext.env.OS,
  names: {
    ios: "iOS",
    android: "Android",
    windowsPhone: "WindowsPhone",
    webos: "webOS",
    blackberry: "BlackBerry",
    rimTablet: "RIMTablet",
    mac: "MacOS",
    win: "Windows",
    tizen: "Tizen",
    linux: "Linux",
    bada: "Bada",
    chrome: "ChromeOS",
    other: "Other",
  },
  prefixes: {
    tizen: "(Tizen )",
    ios: "i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",
    android: "(Android |HTC_|Silk/)",
    windowsPhone: "Windows Phone ",
    blackberry: "(?:BlackBerry|BB)(?:.*)Version/",
    rimTablet: "RIM Tablet OS ",
    webos: "(?:webOS|hpwOS)/",
    bada: "Bada/",
    chrome: "CrOS ",
  },
  is: function (a) {
    return !!this[a];
  },
  name: null,
  version: null,
  setFlag: function (a, b) {
    if (b === undefined) {
      b = true;
    }
    if (this.flags) {
      this.flags[a] = b;
    }
    this.is[a] = b;
    this.is[a.toLowerCase()] = b;
    return this;
  },
};
(function () {
  var a = Ext.global.navigator,
    g = a.userAgent,
    f = Ext.env.OS,
    e = Ext.is || (Ext.is = {}),
    h,
    d,
    b;
  f.prototype.flags = e;
  Ext.os = h = new f(g, a.platform);
  d = h.name;
  Ext["is" + d] = true;
  Ext.isMac = e.Mac = e.MacOS;
  var i = window.location.search.match(/deviceType=(Tablet|Phone)/),
    c = window.deviceType;
  if (i && i[1]) {
    b = i[1];
  } else {
    if (c === "iPhone") {
      b = "Phone";
    } else {
      if (c === "iPad") {
        b = "Tablet";
      } else {
        if (
          !h.is.Android &&
          !h.is.iOS &&
          !h.is.WindowsPhone &&
          /Windows|Linux|MacOS/.test(d)
        ) {
          b = "Desktop";
          Ext.browser.is.WebView = !!Ext.browser.is.Ripple;
        } else {
          if (
            h.is.iPad ||
            h.is.RIMTablet ||
            h.is.Android3 ||
            Ext.browser.is.Silk ||
            (h.is.Android && g.search(/mobile/i) === -1)
          ) {
            b = "Tablet";
          } else {
            b = "Phone";
          }
        }
      }
    }
  }
  h.setFlag(b, true);
  h.deviceType = b;
  delete f.prototype.flags;
})();
Ext.feature = {
  has: function (a) {
    return !!this.has[a];
  },
  testElements: {},
  getTestElement: function (a, b) {
    if (a === undefined) {
      a = "div";
    } else {
      if (typeof a !== "string") {
        return a;
      }
    }
    if (b) {
      return document.createElement(a);
    }
    if (!this.testElements[a]) {
      this.testElements[a] = document.createElement(a);
    }
    return this.testElements[a];
  },
  isStyleSupported: function (c, b) {
    var d = this.getTestElement(b).style,
      a = Ext.String.capitalize(c);
    if (
      typeof d[c] !== "undefined" ||
      typeof d[Ext.browser.getStylePrefix(c) + a] !== "undefined"
    ) {
      return true;
    }
    return false;
  },
  isStyleSupportedWithoutPrefix: function (b, a) {
    var c = this.getTestElement(a).style;
    if (typeof c[b] !== "undefined") {
      return true;
    }
    return false;
  },
  isEventSupported: function (c, a) {
    if (a === undefined) {
      a = window;
    }
    var e = this.getTestElement(a),
      b = "on" + c.toLowerCase(),
      d = b in e;
    if (!d) {
      if (e.setAttribute && e.removeAttribute) {
        e.setAttribute(b, "");
        d = typeof e[b] === "function";
        if (typeof e[b] !== "undefined") {
          e[b] = undefined;
        }
        e.removeAttribute(b);
      }
    }
    return d;
  },
  getStyle: function (c, b) {
    var a = c.ownerDocument.defaultView,
      d = a ? a.getComputedStyle(c, null) : c.currentStyle;
    return (d || c.style)[b];
  },
  getSupportedPropertyName: function (b, a) {
    var c = Ext.browser.getVendorProperyName(a);
    if (c in b) {
      return c;
    } else {
      if (a in b) {
        return a;
      }
    }
    return null;
  },
  detect: function (i) {
    var j = this,
      l = document,
      f = j.toRun || j.tests,
      e = f.length,
      b = l.createElement("div"),
      c = [],
      o = Ext.supports,
      m = j.has,
      a,
      h,
      g,
      d,
      k;
    b.innerHTML =
      '<div style="height:30px;width:50px;"><div style="height:20px;width:20px;"></div></div><div style="width: 200px; height: 200px; position: relative; padding: 5px;"><div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></div></div><div style="position: absolute; left: 10%; top: 10%;"></div><div style="float:left; background-color:transparent;"></div>';
    if (i) {
      l.body.appendChild(b);
    }
    d = j.preDetected[Ext.browser.identity] || [];
    while (e--) {
      g = f[e];
      k = d[e];
      a = g.name;
      h = g.names;
      if (k === undefined) {
        if (!i && g.ready) {
          c.push(g);
          continue;
        }
        k = g.fn.call(j, l, b);
      }
      if (a) {
        o[a] = m[a] = k;
      } else {
        if (h) {
          while (h.length) {
            a = h.pop();
            o[a] = m[a] = k;
          }
        }
      }
    }
    if (i) {
      l.body.removeChild(b);
    }
    j.toRun = c;
  },
  report: function () {
    var b = [],
      a = this.tests.length,
      c;
    for (c = 0; c < a; ++c) {
      b.push(this.has[this.tests[c].name] ? 1 : 0);
    }
    Ext.log(Ext.browser.identity + ": [" + b.join(",") + "]");
  },
  preDetected: {},
  tests: [
    {
      name: "CloneNodeCopiesExpando",
      fn: function () {
        var a = document.createElement("div");
        a.expandoProp = {};
        return a.cloneNode().expandoProp === a.expandoProp;
      },
    },
    {
      name: "CSSPointerEvents",
      fn: function (a) {
        return "pointerEvents" in a.documentElement.style;
      },
    },
    {
      name: "CSS3BoxShadow",
      fn: function (a) {
        return (
          "boxShadow" in a.documentElement.style ||
          "WebkitBoxShadow" in a.documentElement.style ||
          "MozBoxShadow" in a.documentElement.style
        );
      },
    },
    {
      name: "CSS3NegationSelector",
      fn: function (b) {
        try {
          b.querySelectorAll("foo:not(bar)");
        } catch (a) {
          return false;
        }
        return true;
      },
    },
    {
      name: "ClassList",
      fn: function (a) {
        return !!a.documentElement.classList;
      },
    },
    {
      name: "Canvas",
      fn: function () {
        var a = this.getTestElement("canvas");
        return !!(a && a.getContext && a.getContext("2d"));
      },
    },
    {
      name: "Svg",
      fn: function (a) {
        return !!(
          a.createElementNS &&
          !!a.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
        );
      },
    },
    {
      name: "Vml",
      fn: function () {
        var b = this.getTestElement(),
          a = false;
        b.innerHTML = "<!--[if vml]><br><![endif]-->";
        a = b.childNodes.length === 1;
        b.innerHTML = "";
        return a;
      },
    },
    {
      name: "touchScroll",
      fn: function () {
        var a = Ext.supports,
          b = 0;
        if (
          navigator.msMaxTouchPoints ||
          (Ext.isWebKit && a.TouchEvents && Ext.os.is.Desktop)
        ) {
          b = 1;
        } else {
          if (a.Touch) {
            b = 2;
          }
        }
        return b;
      },
    },
    {
      name: "Touch",
      fn: function () {
        var a = navigator.msMaxTouchPoints || navigator.maxTouchPoints;
        if (
          Ext.browser.is.Chrome &&
          Ext.browser.version.isLessThanOrEqual(39)
        ) {
          return (Ext.supports.TouchEvents && a !== 1) || a > 1;
        } else {
          return Ext.supports.TouchEvents || a > 0;
        }
      },
    },
    {
      name: "TouchEvents",
      fn: function () {
        return this.isEventSupported("touchend");
      },
    },
    {
      name: "PointerEvents",
      fn: function () {
        return navigator.pointerEnabled;
      },
    },
    {
      name: "MSPointerEvents",
      fn: function () {
        return navigator.msPointerEnabled;
      },
    },
    {
      name: "Orientation",
      fn: function () {
        return (
          "orientation" in window && this.isEventSupported("orientationchange")
        );
      },
    },
    {
      name: "OrientationChange",
      fn: function () {
        return this.isEventSupported("orientationchange");
      },
    },
    {
      name: "DeviceMotion",
      fn: function () {
        return this.isEventSupported("devicemotion");
      },
    },
    {
      names: ["Geolocation", "GeoLocation"],
      fn: function () {
        return "geolocation" in window.navigator;
      },
    },
    {
      name: "SqlDatabase",
      fn: function () {
        return "openDatabase" in window;
      },
    },
    {
      name: "WebSockets",
      fn: function () {
        return "WebSocket" in window;
      },
    },
    {
      name: "Range",
      fn: function () {
        return !!document.createRange;
      },
    },
    {
      name: "CreateContextualFragment",
      fn: function () {
        var a = !!document.createRange ? document.createRange() : false;
        return a && !!a.createContextualFragment;
      },
    },
    {
      name: "History",
      fn: function () {
        return "history" in window && "pushState" in window.history;
      },
    },
    {
      name: "Css3dTransforms",
      fn: function () {
        return (
          this.has("CssTransforms") && this.isStyleSupported("perspective")
        );
      },
    },
    {
      name: "CssTransforms",
      fn: function () {
        return this.isStyleSupported("transform");
      },
    },
    {
      name: "CssTransformNoPrefix",
      fn: function () {
        return this.isStyleSupportedWithoutPrefix("transform");
      },
    },
    {
      name: "CssAnimations",
      fn: function () {
        return this.isStyleSupported("animationName");
      },
    },
    {
      names: ["CssTransitions", "Transitions"],
      fn: function () {
        return this.isStyleSupported("transitionProperty");
      },
    },
    {
      names: ["Audio", "AudioTag"],
      fn: function () {
        return !!this.getTestElement("audio").canPlayType;
      },
    },
    {
      name: "Video",
      fn: function () {
        return !!this.getTestElement("video").canPlayType;
      },
    },
    {
      name: "LocalStorage",
      fn: function () {
        try {
          if ("localStorage" in window && window.localStorage !== null) {
            localStorage.setItem("sencha-localstorage-test", "test success");
            localStorage.removeItem("sencha-localstorage-test");
            return true;
          }
        } catch (a) {}
        return false;
      },
    },
    {
      name: "XHR2",
      fn: function () {
        return (
          window.ProgressEvent &&
          window.FormData &&
          window.XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest()
        );
      },
    },
    {
      name: "XHRUploadProgress",
      fn: function () {
        if (window.XMLHttpRequest && !Ext.browser.is.AndroidStock) {
          var a = new XMLHttpRequest();
          return a && "upload" in a && "onprogress" in a.upload;
        }
        return false;
      },
    },
    {
      name: "NumericInputPlaceHolder",
      fn: function () {
        return !(Ext.browser.is.AndroidStock4 && Ext.os.version.getMinor() < 2);
      },
    },
    {
      name: "ProperHBoxStretching",
      ready: true,
      fn: function () {
        var b = document.createElement("div"),
          c = b.appendChild(document.createElement("div")),
          d = c.appendChild(document.createElement("div")),
          a;
        b.setAttribute(
          "style",
          "width: 100px; height: 100px; position: relative;",
        );
        c.setAttribute(
          "style",
          "position: absolute; display: -ms-flexbox; display: -webkit-flex; display: -moz-flexbox; display: flex; -ms-flex-direction: row; -webkit-flex-direction: row; -moz-flex-direction: row; flex-direction: row; min-width: 100%;",
        );
        d.setAttribute("style", "width: 200px; height: 50px;");
        document.body.appendChild(b);
        a = c.offsetWidth;
        document.body.removeChild(b);
        return a > 100;
      },
    },
    {
      name: "matchesSelector",
      fn: function () {
        var b = document.documentElement,
          e = "matches",
          d = "webkitMatchesSelector",
          a = "msMatchesSelector",
          c = "mozMatchesSelector";
        return b[e] ? e : b[d] ? d : b[a] ? a : b[c] ? c : null;
      },
    },
    {
      name: "RightMargin",
      ready: true,
      fn: function (b, c) {
        var a = b.defaultView;
        return !(
          a &&
          a.getComputedStyle(c.firstChild.firstChild, null).marginRight !==
            "0px"
        );
      },
    },
    {
      name: "DisplayChangeInputSelectionBug",
      fn: function () {
        var a = Ext.webKitVersion;
        return 0 < a && a < 533;
      },
    },
    {
      name: "DisplayChangeTextAreaSelectionBug",
      fn: function () {
        var a = Ext.webKitVersion;
        return 0 < a && a < 534.24;
      },
    },
    {
      name: "TransparentColor",
      ready: true,
      fn: function (b, c, a) {
        a = b.defaultView;
        return !(
          a &&
          a.getComputedStyle(c.lastChild, null).backgroundColor !==
            "transparent"
        );
      },
    },
    {
      name: "ComputedStyle",
      ready: true,
      fn: function (b, c, a) {
        a = b.defaultView;
        return a && a.getComputedStyle;
      },
    },
    {
      name: "Float",
      fn: function (a) {
        return "cssFloat" in a.documentElement.style;
      },
    },
    {
      name: "CSS3BorderRadius",
      ready: true,
      fn: function (d) {
        var b = [
            "borderRadius",
            "BorderRadius",
            "MozBorderRadius",
            "WebkitBorderRadius",
            "OBorderRadius",
            "KhtmlBorderRadius",
          ],
          c = false,
          a;
        for (a = 0; a < b.length; a++) {
          if (d.documentElement.style[b[a]] !== undefined) {
            c = true;
          }
        }
        return c && !Ext.isIE9;
      },
    },
    {
      name: "CSS3LinearGradient",
      fn: function (f, a) {
        var h = "background-image:",
          g =
            "-webkit-gradient(linear, left top, right bottom, from(black), to(white))",
          e = "linear-gradient(left top, black, white)",
          d = "-moz-" + e,
          b = "-ms-" + e,
          c = "-o-" + e,
          i = [h + g, h + e, h + d, h + b, h + c];
        a.style.cssText = i.join(";");
        return (
          ("" + a.style.backgroundImage).indexOf("gradient") !== -1 &&
          !Ext.isIE9
        );
      },
    },
    {
      name: "MouseEnterLeave",
      fn: function (a) {
        return (
          "onmouseenter" in a.documentElement &&
          "onmouseleave" in a.documentElement
        );
      },
    },
    {
      name: "MouseWheel",
      fn: function (a) {
        return "onmousewheel" in a.documentElement;
      },
    },
    {
      name: "Opacity",
      fn: function (a, b) {
        if (Ext.isIE8) {
          return false;
        }
        b.firstChild.style.cssText = "opacity:0.73";
        return b.firstChild.style.opacity == "0.73";
      },
    },
    {
      name: "Placeholder",
      fn: function (a) {
        return "placeholder" in a.createElement("input");
      },
    },
    {
      name: "Direct2DBug",
      fn: function (a) {
        return (
          Ext.isString(a.documentElement.style.msTransformOrigin) && Ext.isIE9m
        );
      },
    },
    {
      name: "BoundingClientRect",
      fn: function (a) {
        return "getBoundingClientRect" in a.documentElement;
      },
    },
    {
      name: "RotatedBoundingClientRect",
      ready: true,
      fn: function (e) {
        var a = e.body,
          b = false,
          d = this.getTestElement(),
          c = d.style;
        if (d.getBoundingClientRect) {
          c.WebkitTransform =
            c.MozTransform =
            c.msTransform =
            c.OTransform =
            c.transform =
              "rotate(90deg)";
          c.width = "100px";
          c.height = "30px";
          a.appendChild(d);
          b = d.getBoundingClientRect().height !== 100;
          a.removeChild(d);
        }
        return b;
      },
    },
    {
      name: "ChildContentClearedWhenSettingInnerHTML",
      ready: true,
      fn: function () {
        var a = this.getTestElement(),
          b;
        a.innerHTML = "<div>a</div>";
        b = a.firstChild;
        a.innerHTML = "<div>b</div>";
        return b.innerHTML !== "a";
      },
    },
    {
      name: "IncludePaddingInWidthCalculation",
      ready: true,
      fn: function (a, b) {
        return b.childNodes[1].firstChild.offsetWidth === 210;
      },
    },
    {
      name: "IncludePaddingInHeightCalculation",
      ready: true,
      fn: function (a, b) {
        return b.childNodes[1].firstChild.offsetHeight === 210;
      },
    },
    {
      name: "TextAreaMaxLength",
      fn: function (a) {
        return "maxlength" in a.createElement("textarea");
      },
    },
    {
      name: "GetPositionPercentage",
      ready: true,
      fn: function (a, b) {
        return Ext.feature.getStyle(b.childNodes[2], "left") === "10%";
      },
    },
    {
      name: "PercentageHeightOverflowBug",
      ready: true,
      fn: function (d) {
        var a = false,
          c,
          b;
        if (Ext.getScrollbarSize().height) {
          b = this.getTestElement();
          c = b.style;
          c.height = "50px";
          c.width = "50px";
          c.overflow = "auto";
          c.position = "absolute";
          b.innerHTML = [
            '<div style="display:table;height:100%;">',
            '<div style="width:51px;"></div>',
            "</div>",
          ].join("");
          d.body.appendChild(b);
          if (b.firstChild.offsetHeight === 50) {
            a = true;
          }
          d.body.removeChild(b);
        }
        return a;
      },
    },
    {
      name: "xOriginBug",
      ready: true,
      fn: function (d, e) {
        e.innerHTML =
          '<div id="b1" style="height:100px;width:100px;direction:rtl;position:relative;overflow:scroll"><div id="b2" style="position:relative;width:100%;height:20px;"></div><div id="b3" style="position:absolute;width:20px;height:20px;top:0px;right:0px"></div></div>';
        var c = document.getElementById("b1").getBoundingClientRect(),
          b = document.getElementById("b2").getBoundingClientRect(),
          a = document.getElementById("b3").getBoundingClientRect();
        return b.left !== c.left && a.right !== c.right;
      },
    },
    {
      name: "ScrollWidthInlinePaddingBug",
      ready: true,
      fn: function (d) {
        var a = false,
          c,
          b;
        b = d.createElement("div");
        c = b.style;
        c.height = "50px";
        c.width = "50px";
        c.padding = "10px";
        c.overflow = "hidden";
        c.position = "absolute";
        b.innerHTML =
          '<span style="display:inline-block;zoom:1;height:60px;width:60px;"></span>';
        d.body.appendChild(b);
        if (b.scrollWidth === 70) {
          a = true;
        }
        d.body.removeChild(b);
        return a;
      },
    },
    {
      name: "rtlVertScrollbarOnRight",
      ready: true,
      fn: function (c, d) {
        d.innerHTML =
          '<div style="height:100px;width:100px;direction:rtl;overflow:scroll"><div style="width:20px;height:200px;"></div></div>';
        var b = d.firstChild,
          a = b.firstChild;
        return a.offsetLeft + a.offsetWidth !== b.offsetLeft + b.offsetWidth;
      },
    },
    {
      name: "rtlVertScrollbarOverflowBug",
      ready: true,
      fn: function (b, c) {
        c.innerHTML =
          '<div style="height:100px;width:100px;direction:rtl;overflow:auto"><div style="width:95px;height:200px;"></div></div>';
        var a = c.firstChild;
        return a.clientHeight === a.offsetHeight;
      },
    },
    {
      identity: "defineProperty",
      fn: function () {
        if (Ext.isIE8m) {
          Ext.Object.defineProperty = Ext.emptyFn;
          return false;
        }
        return true;
      },
    },
    {
      identify: "nativeXhr",
      fn: function () {
        if (typeof XMLHttpRequest !== "undefined") {
          return true;
        }
        XMLHttpRequest = function () {
          try {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
          } catch (a) {
            return null;
          }
        };
        return false;
      },
    },
    {
      name: "SpecialKeyDownRepeat",
      fn: function () {
        return Ext.isWebKit
          ? parseInt(navigator.userAgent.match(/AppleWebKit\/(\d+)/)[1], 10) >=
              525
          : !(
              (Ext.isGecko && !Ext.isWindows) ||
              (Ext.isOpera && Ext.operaVersion < 12)
            );
      },
    },
    {
      name: "EmulatedMouseOver",
      fn: function () {
        return Ext.os.is.iOS;
      },
    },
    {
      name: "Hashchange",
      fn: function () {
        var a = document.documentMode;
        return "onhashchange" in window && (a === undefined || a > 7);
      },
    },
    {
      name: "FixedTableWidthBug",
      ready: true,
      fn: function () {
        if (Ext.isIE8) {
          return false;
        }
        var b = document.createElement("div"),
          a = document.createElement("div"),
          c;
        b.setAttribute("style", "display:table;table-layout:fixed;");
        a.setAttribute("style", "display:table-cell;min-width:50px;");
        b.appendChild(a);
        document.body.appendChild(b);
        b.offsetWidth;
        b.style.width = "25px";
        c = b.offsetWidth;
        document.body.removeChild(b);
        return c === 50;
      },
    },
    {
      name: "FocusinFocusoutEvents",
      fn: function () {
        return !Ext.isGecko;
      },
    },
    {
      name: "accessibility",
      ready: true,
      fn: function (g) {
        var a = g.body,
          h,
          d,
          e,
          b,
          c;
        function f(o) {
          var j = [],
            l = 0,
            n,
            k;
          if (o.indexOf("rgb(") !== -1) {
            j = o.replace("rgb(", "").replace(")", "").split(", ");
          } else {
            if (o.indexOf("#") !== -1) {
              n = o.length === 7 ? /^#(\S\S)(\S\S)(\S\S)$/ : /^#(\S)(\S)(\S)$/;
              k = o.match(n);
              if (k) {
                j = ["0x" + k[1], "0x" + k[2], "0x" + k[3]];
              }
            }
          }
          for (var m = 0; m < j.length; m++) {
            l += parseInt(j[m]);
          }
          return l;
        }
        h = g.createElement("div");
        d = g.createElement("img");
        e = h.style;
        Ext.apply(e, {
          width: "2px",
          position: "absolute",
          clip: "rect(1px,1px,1px,1px)",
          borderWidth: "1px",
          borderStyle: "solid",
          borderTopTolor: "#f00",
          borderRightColor: "#ff0",
          backgroundColor: "#fff",
          backgroundImage: "url(" + Ext.BLANK_IMAGE_URL + ")",
        });
        d.alt = "";
        d.src = Ext.BLANK_IMAGE_URL;
        h.appendChild(d);
        a.appendChild(h);
        e = h.currentStyle || h.style;
        c = e.backgroundImage;
        b = {
          Images: d.offsetWidth === 1 && d.readyState !== "uninitialized",
          BackgroundImages: !(
            c !== null &&
            (c === "none" || c === "url(invalid-url:)")
          ),
          BorderColors: e.borderTopColor !== e.borderRightColor,
          LightOnDark: f(e.color) - f(e.backgroundColor) > 0,
        };
        Ext.supports.HighContrastMode = !b.BackgroundImages;
        a.removeChild(h);
        h = d = null;
        return b;
      },
    },
    0,
  ],
};
Ext.feature.tests.pop();
Ext.supports = {};
Ext.feature.detect();
Ext.env.Ready = {
  blocks: (location.search || "").indexOf("ext-pauseReadyFire") > 0 ? 1 : 0,
  bound: 0,
  delay: 1,
  events: [],
  firing: false,
  generation: 0,
  listeners: [],
  nextId: 0,
  sortGeneration: 0,
  state: 0,
  timer: null,
  bind: function () {
    var a = Ext.env.Ready,
      b = document;
    if (!a.bound) {
      if (b.readyState === "complete") {
        a.onReadyEvent({ type: b.readyState || "body" });
      } else {
        a.bound = 1;
        if (Ext.browser.is.PhoneGap && !Ext.os.is.Desktop) {
          a.bound = 2;
          b.addEventListener("deviceready", a.onReadyEvent, false);
        }
        b.addEventListener("DOMContentLoaded", a.onReadyEvent, false);
        window.addEventListener("load", a.onReadyEvent, false);
      }
    }
  },
  block: function () {
    ++this.blocks;
    Ext.isReady = false;
  },
  fireReady: function () {
    var a = Ext.env.Ready;
    if (!a.state) {
      Ext._readyTime = Ext.now();
      Ext.isDomReady = true;
      a.state = 1;
      Ext.feature.detect(true);
      if (!a.delay) {
        a.handleReady();
      } else {
        if (navigator.standalone) {
          a.timer = Ext.defer(function () {
            a.timer = null;
            a.handleReadySoon();
          }, 1);
        } else {
          a.handleReadySoon();
        }
      }
    }
  },
  handleReady: function () {
    var a = this;
    if (a.state === 1) {
      a.state = 2;
      Ext._beforeReadyTime = Ext.now();
      a.invokeAll();
      Ext._afterReadytime = Ext.now();
    }
  },
  handleReadySoon: function (a) {
    var b = this;
    if (!b.timer) {
      b.timer = Ext.defer(function () {
        b.timer = null;
        b.handleReady();
      }, a || b.delay);
    }
  },
  invoke: function (b) {
    var a = b.delay;
    if (a) {
      Ext.defer(b.fn, a, b.scope);
    } else {
      if (Ext.elevateFunction) {
        Ext.elevateFunction(b.fn, b.scope);
      } else {
        b.fn.call(b.scope);
      }
    }
  },
  invokeAll: function () {
    if (Ext.elevateFunction) {
      Ext.elevateFunction(this.doInvokeAll, this);
    } else {
      this.doInvokeAll();
    }
  },
  doInvokeAll: function () {
    var b = this,
      a = b.listeners,
      c;
    if (!b.blocks) {
      Ext.isReady = true;
    }
    b.firing = true;
    while (a.length) {
      if (b.sortGeneration !== b.generation) {
        b.sortGeneration = b.generation;
        a.sort(b.sortFn);
      }
      c = a.pop();
      if (b.blocks && !c.dom) {
        a.push(c);
        break;
      }
      b.invoke(c);
    }
    b.firing = false;
  },
  makeListener: function (d, c, b) {
    var a = { fn: d, id: ++this.nextId, scope: c, dom: false, priority: 0 };
    if (b) {
      Ext.apply(a, b);
    }
    a.phase = a.dom ? 0 : 1;
    return a;
  },
  on: function (c, b, a) {
    var d = Ext.env.Ready,
      e = d.makeListener(c, b, a);
    if (d.state === 2 && !d.firing && (e.dom || !d.blocks)) {
      d.invoke(e);
    } else {
      d.listeners.push(e);
      ++d.generation;
      if (!d.bound) {
        d.bind();
      }
    }
  },
  onReadyEvent: function (b) {
    var a = Ext.env.Ready;
    if (Ext.elevateFunction) {
      Ext.elevateFunction(a.doReadyEvent, a, arguments);
    } else {
      a.doReadyEvent(b);
    }
  },
  doReadyEvent: function (b) {
    var a = this;
    if (b && b.type) {
      a.events.push(b);
    }
    if (a.bound > 0) {
      a.unbind();
      a.bound = -1;
    }
    if (!a.state) {
      a.fireReady();
    }
  },
  sortFn: function (d, c) {
    return -(d.phase - c.phase || c.priority - d.priority || d.id - c.id);
  },
  unblock: function () {
    var a = this;
    if (a.blocks) {
      if (!--a.blocks) {
        if (a.state === 2 && !a.firing) {
          a.invokeAll();
        }
      }
    }
  },
  unbind: function () {
    var a = this,
      b = document;
    if (a.bound > 1) {
      b.removeEventListener("deviceready", a.onReadyEvent, false);
    }
    b.removeEventListener("DOMContentLoaded", a.onReadyEvent, false);
    window.removeEventListener("load", a.onReadyEvent, false);
  },
};
(function () {
  var a = Ext.env.Ready;
  if (Ext.isIE9m) {
    Ext.apply(a, {
      scrollTimer: null,
      readyStatesRe: /complete/i,
      pollScroll: function () {
        var b = true;
        try {
          document.documentElement.doScroll("left");
        } catch (c) {
          b = false;
        }
        if (b && document.body) {
          a.onReadyEvent({ type: "doScroll" });
        } else {
          a.scrollTimer = Ext.defer(a.pollScroll, 20);
        }
        return b;
      },
      bind: function () {
        if (a.bound) {
          return;
        }
        var d = document,
          b;
        try {
          b = window.frameElement === undefined;
        } catch (c) {}
        if (!b || !d.documentElement.doScroll) {
          a.pollScroll = Ext.emptyFn;
        } else {
          if (a.pollScroll()) {
            return;
          }
        }
        if (d.readyState === "complete") {
          a.onReadyEvent({ type: "already " + (d.readyState || "body") });
        } else {
          d.attachEvent("onreadystatechange", a.onReadyStateChange);
          window.attachEvent("onload", a.onReadyEvent);
          a.bound = 1;
        }
      },
      unbind: function () {
        document.detachEvent("onreadystatechange", a.onReadyStateChange);
        window.detachEvent("onload", a.onReadyEvent);
        if (Ext.isNumber(a.scrollTimer)) {
          clearTimeout(a.scrollTimer);
          a.scrollTimer = null;
        }
      },
      onReadyStateChange: function () {
        var b = document.readyState;
        if (a.readyStatesRe.test(b)) {
          a.onReadyEvent({ type: b });
        }
      },
    });
  }
  Ext.onDocumentReady = function (e, d, b) {
    var c = { dom: true };
    if (b) {
      Ext.apply(c, b);
    }
    a.on(e, d, c);
  };
  Ext.onReady = function (d, c, b) {
    a.on(d, c, b);
  };
  Ext.onInternalReady = function (d, c, b) {
    a.on(d, c, Ext.apply({ priority: 1000 }, b));
  };
  a.bind();
})();
Ext.Loader = new (function () {
  var c = this,
    a = Ext.ClassManager,
    g = Ext.Boot,
    d = Ext.Class,
    i = Ext.env.Ready,
    h = Ext.Function.alias,
    f = ["extend", "mixins", "requires"],
    m = {},
    j = [],
    b = [],
    e = [],
    n = {},
    l = {},
    k = {
      enabled: true,
      scriptChainDelay: false,
      disableCaching: true,
      disableCachingParam: "_dc",
      paths: a.paths,
      preserveScripts: true,
      scriptCharset: undefined,
    },
    o = {
      disableCaching: true,
      disableCachingParam: true,
      preserveScripts: true,
      scriptChainDelay: "loadDelay",
    };
  Ext.apply(c, {
    isInHistory: m,
    isLoading: false,
    history: j,
    config: k,
    readyListeners: b,
    optionalRequires: e,
    requiresMap: n,
    hasFileLoadError: false,
    scriptsLoading: 0,
    classesLoading: [],
    syncModeEnabled: false,
    missingQueue: l,
    init: function () {
      var u = document.getElementsByTagName("script"),
        p = u[u.length - 1].src,
        z = p.substring(0, p.lastIndexOf("/") + 1),
        x = Ext._classPathMetadata,
        y = Ext.Microloader,
        r = Ext.manifest,
        s,
        v,
        w,
        t,
        q;
      if (p.indexOf("packages/core/src/") !== -1) {
        z = z + "../../";
      } else {
        if (p.indexOf("/core/src/class/") !== -1) {
          z = z + "../../../";
        }
      }
      if (!a.getPath("Ext")) {
        a.setPath("Ext", z + "src");
      }
      if (x) {
        Ext._classPathMetadata = null;
        c.addClassPathMappings(x);
      }
      if (r) {
        s = r.loadOrder;
        v = Ext.Boot.baseUrl;
        if (s && r.bootRelative) {
          for (w = s.length, t = 0; t < w; t++) {
            q = s[t];
            q.path = v + q.path;
          }
        }
      }
      if (y) {
        i.block();
        y.onMicroloaderReady(function () {
          i.unblock();
        });
      }
    },
    setConfig: Ext.Function.flexSetter(function (p, q) {
      if (p === "paths") {
        c.setPath(q);
      } else {
        k[p] = q;
        var r = o[p];
        if (r) {
          g.setConfig(r === true ? p : r, q);
        }
      }
      return c;
    }),
    getConfig: function (p) {
      return p ? k[p] : k;
    },
    setPath: function () {
      a.setPath.apply(a, arguments);
      return c;
    },
    addClassPathMappings: function (p) {
      a.setPath(p);
      return c;
    },
    addBaseUrlClassPathMappings: function (p) {
      for (var q in p) {
        p[q] = g.baseUrl + p[q];
      }
      Ext.Loader.addClassPathMappings(p);
    },
    getPath: function (p) {
      return a.getPath(p);
    },
    require: function (r, q, p, t) {
      if (t) {
        return c.exclude(t).require(r, q, p);
      }
      var s = a.getNamesByExpression(r);
      return c.load(s, q, p);
    },
    syncRequire: function () {
      var q = c.syncModeEnabled;
      c.syncModeEnabled = true;
      var p = c.require.apply(c, arguments);
      c.syncModeEnabled = q;
      return p;
    },
    exclude: function (q) {
      var p = a.select({
        require: function (t, s, r) {
          return c.load(t, s, r);
        },
        syncRequire: function (v, t, s) {
          var u = c.syncModeEnabled;
          c.syncModeEnabled = true;
          var r = c.load(v, t, s);
          c.syncModeEnabled = u;
          return r;
        },
      });
      p.exclude(q);
      return p;
    },
    load: function (p, x, y) {
      if (x) {
        if (x.length) {
          x = c.makeLoadCallback(p, x);
        }
        x = x.bind(y || Ext.global);
      }
      var s = [],
        r = p.length,
        v,
        u,
        t,
        w = [],
        q = a.classState;
      for (u = 0; u < r; ++u) {
        v = a.resolveName(p[u]);
        if (!a.isCreated(v)) {
          s.push(v);
          l[v] = c.getPath(v);
          if (!q[v]) {
            w.push(l[v]);
          }
        }
      }
      t = s.length;
      if (t) {
        c.missingCount += t;
        Ext.Array.push(c.classesLoading, s);
        a.onCreated(
          function () {
            Ext.Array.remove(c.classesLoading, s);
            Ext.each(s, function (z) {
              Ext.Array.remove(c.classesLoading, z);
            });
            if (x) {
              Ext.callback(x, y, arguments);
            }
            c.checkReady();
          },
          c,
          s,
        );
        if (!k.enabled) {
          Ext.raise(
            "Ext.Loader is not enabled, so dependencies cannot be resolved dynamically. Missing required class" +
              (s.length > 1 ? "es" : "") +
              ": " +
              s.join(", "),
          );
        }
        if (w.length) {
          c.loadScripts({ url: w, _classNames: s });
        } else {
          c.checkReady();
        }
      } else {
        if (x) {
          x.call(y);
        }
        c.checkReady();
      }
      if (c.syncModeEnabled) {
        if (r === 1) {
          return a.get(p[0]);
        }
      }
      return c;
    },
    makeLoadCallback: function (p, q) {
      return function () {
        var s = [],
          r = p.length;
        while (r-- > 0) {
          s[r] = a.get(p[r]);
        }
        return q.apply(this, s);
      };
    },
    onLoadFailure: function () {
      var p = this,
        q = p.onError;
      c.hasFileLoadError = true;
      --c.scriptsLoading;
      if (q) {
        q.call(p.userScope, p);
      } else {
        Ext.log.error("[Ext.Loader] Some requested files failed to load.");
      }
      c.checkReady();
    },
    onLoadSuccess: function () {
      var p = this,
        q = p.onLoad;
      --c.scriptsLoading;
      if (q) {
        q.call(p.userScope, p);
      }
      c.checkReady();
    },
    reportMissingClasses: function () {
      if (
        !c.syncModeEnabled &&
        !c.scriptsLoading &&
        c.isLoading &&
        !c.hasFileLoadError
      ) {
        var p = [],
          r = [];
        for (var q in l) {
          p.push(q);
          r.push(l[q]);
        }
        if (p.length) {
          throw new Error(
            "The following classes are not declared even if their files have been loaded: '" +
              p.join("', '") +
              "'. Please check the source code of their corresponding files for possible typos: '" +
              r.join("', '"),
          );
        }
      }
    },
    onReady: function (r, q, t, p) {
      if (t) {
        i.on(r, q, p);
      } else {
        var s = i.makeListener(r, q, p);
        if (c.isLoading) {
          b.push(s);
        } else {
          i.invoke(s);
        }
      }
    },
    addUsedClasses: function (r) {
      var p, q, s;
      if (r) {
        r = typeof r === "string" ? [r] : r;
        for (q = 0, s = r.length; q < s; q++) {
          p = r[q];
          if (typeof p === "string" && !Ext.Array.contains(e, p)) {
            e.push(p);
          }
        }
      }
      return c;
    },
    triggerReady: function () {
      var p,
        q = e;
      if (c.isLoading && q.length) {
        e = [];
        c.require(q);
      } else {
        c.isLoading = false;
        b.sort(i.sortFn);
        while (b.length && !c.isLoading) {
          p = b.pop();
          i.invoke(p);
        }
        i.unblock();
      }
    },
    historyPush: function (p) {
      if (p && !m[p] && !a.overrideMap[p]) {
        m[p] = true;
        j.push(p);
      }
      return c;
    },
    loadScripts: function (t) {
      var s = Ext.manifest,
        p = s && s.loadOrder,
        q = s && s.loadOrderMap,
        r;
      ++c.scriptsLoading;
      if (p && !q) {
        s.loadOrderMap = q = g.createLoadOrderMap(p);
      }
      c.checkReady();
      r = Ext.apply(
        {
          loadOrder: p,
          loadOrderMap: q,
          charset: k.scriptCharset,
          success: c.onLoadSuccess,
          failure: c.onLoadFailure,
          sync: c.syncModeEnabled,
          _classNames: [],
        },
        t,
      );
      r.userScope = r.scope;
      r.scope = r;
      g.load(r);
    },
    loadScriptsSync: function (q) {
      var p = c.syncModeEnabled;
      c.syncModeEnabled = true;
      c.loadScripts({ url: q });
      c.syncModeEnabled = p;
    },
    loadScriptsSyncBasePrefix: function (q) {
      var p = c.syncModeEnabled;
      c.syncModeEnabled = true;
      c.loadScripts({ url: q, prependBaseUrl: true });
      c.syncModeEnabled = p;
    },
    loadScript: function (x) {
      var q = typeof x === "string",
        t = x instanceof Array,
        w = !t && !q,
        p = w ? x.url : x,
        s = w && x.onError,
        u = w && x.onLoad,
        v = w && x.scope,
        r = { url: p, scope: v, onLoad: u, onError: s, _classNames: [] };
      c.loadScripts(r);
    },
    flushMissingQueue: function () {
      var p,
        s,
        r = 0,
        q = 0;
      for (p in l) {
        r++;
        s = l[p];
        if (a.isCreated(p)) {
          delete l[p];
        } else {
          if (a.existCache[p] === 2) {
            delete l[p];
          } else {
            ++q;
          }
        }
      }
      this.missingCount = q;
    },
    checkReady: function () {
      var q = c.isLoading,
        p;
      c.flushMissingQueue();
      p = c.missingCount + c.scriptsLoading;
      if (p && !q) {
        i.block();
        c.isLoading = !!p;
      } else {
        if (!p && q) {
          c.triggerReady();
        }
      }
    },
  });
  Ext.require = h(c, "require");
  Ext.syncRequire = h(c, "syncRequire");
  Ext.exclude = h(c, "exclude");
  d.registerPreprocessor(
    "loader",
    function (p, G, q, D) {
      Ext.classSystemMonitor &&
        Ext.classSystemMonitor(p, "Ext.Loader#loaderPreprocessor", arguments);
      var F = this,
        x = [],
        z,
        s = a.getName(p),
        C,
        B,
        w,
        t,
        A,
        y,
        E,
        r;
      for (C = 0, w = f.length; C < w; C++) {
        y = f[C];
        if (G.hasOwnProperty(y)) {
          E = G[y];
          if (typeof E === "string") {
            x.push(E);
          } else {
            if (E instanceof Array) {
              for (B = 0, t = E.length; B < t; B++) {
                A = E[B];
                if (typeof A === "string") {
                  x.push(A);
                }
              }
            } else {
              if (typeof E !== "function") {
                for (B in E) {
                  if (E.hasOwnProperty(B)) {
                    A = E[B];
                    if (typeof A === "string") {
                      x.push(A);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (x.length === 0) {
        return;
      }
      if (s) {
        n[s] = x;
      }
      var v = [],
        u;
      if (s) {
        r = c.requiredByMap || (c.requiredByMap = {});
        for (C = 0, w = x.length; C < w; C++) {
          z = x[C];
          (r[z] || (r[z] = [])).push(s);
        }
        u = function (H) {
          v.push(H);
          if (n[H]) {
            if (Ext.Array.contains(n[H], s)) {
              Ext.raise(
                "Circular requirement detected! '" +
                  s +
                  "' and '" +
                  v[1] +
                  "' mutually require each other. Path: " +
                  v.join(" -> ") +
                  " -> " +
                  v[0],
              );
            }
            for (C = 0, w = n[H].length; C < w; C++) {
              u(n[H][C]);
            }
          }
        };
        u(s);
      }
      (s ? c.exclude(s) : c).require(x, function () {
        for (C = 0, w = f.length; C < w; C++) {
          y = f[C];
          if (G.hasOwnProperty(y)) {
            E = G[y];
            if (typeof E === "string") {
              G[y] = a.get(E);
            } else {
              if (E instanceof Array) {
                for (B = 0, t = E.length; B < t; B++) {
                  A = E[B];
                  if (typeof A === "string") {
                    G[y][B] = a.get(A);
                  }
                }
              } else {
                if (typeof E !== "function") {
                  for (var H in E) {
                    if (E.hasOwnProperty(H)) {
                      A = E[H];
                      if (typeof A === "string") {
                        G[y][H] = a.get(A);
                      }
                    }
                  }
                }
              }
            }
          }
        }
        D.call(F, p, G, q);
      });
      return false;
    },
    true,
    "after",
    "className",
  );
  a.registerPostprocessor("uses", function (q, A, v) {
    Ext.classSystemMonitor &&
      Ext.classSystemMonitor(A, "Ext.Loader#usesPostprocessor", arguments);
    var p = Ext.manifest,
      r = p && p.loadOrder,
      s = p && p.classes,
      t,
      x,
      z,
      w,
      u,
      y;
    if (r) {
      x = s[q];
      if (x && !isNaN((u = x.idx))) {
        z = r[u];
        t = z.uses;
        y = {};
        for (w = t.length, u = 0; u < w; u++) {
          y[t[u]] = true;
        }
        t = Ext.Boot.getPathsFromIndexes(y, r, true);
        if (t.length > 0) {
          c.loadScripts({ url: t, sequential: true });
        }
      }
    }
    if (v.uses) {
      t = v.uses;
      c.addUsedClasses(t);
    }
  });
  a.onCreated(c.historyPush);
  c.init();
})();
Ext._endTime = new Date().getTime();
if (Ext._beforereadyhandler) {
  Ext._beforereadyhandler();
}
Ext.define("Ext.overrides.util.Positionable", {
  override: "Ext.util.Positionable",
  anchorTo: function (g, e, b, a, i, j) {
    var f = this,
      h = !Ext.isEmpty(i),
      c = function () {
        f.alignTo(g, e, b, a);
        Ext.callback(j, f);
      },
      d = f.getAnchor();
    f.removeAnchor();
    Ext.apply(d, { fn: c, scroll: h });
    Ext.on("resize", c, null);
    if (h) {
      Ext.getWin().on("scroll", c, null, { buffer: !isNaN(i) ? i : 50 });
    }
    c();
    return f;
  },
  getAnchor: function () {
    var b = this.el,
      c,
      a;
    if (!b.dom) {
      return;
    }
    c = b.getData();
    a = c._anchor;
    if (!a) {
      a = c._anchor = {};
    }
    return a;
  },
  removeAnchor: function () {
    var a = this.getAnchor();
    if (a && a.fn) {
      Ext.un("resize", a.fn);
      if (a.scroll) {
        Ext.getWin().on("scroll", a.fn);
      }
      delete a.fn;
    }
    return this;
  },
  setBox: function (c, a) {
    var b = this;
    if (c.isRegion) {
      c = {
        x: c.left,
        y: c.top,
        width: c.right - c.left,
        height: c.bottom - c.top,
      };
    }
    if (a) {
      b.constrainBox(c);
      b.animate(
        Ext.applyIf(
          {
            to: c,
            listeners: {
              afteranimate: Ext.Function.bind(b.afterSetPosition, b, [
                c.x,
                c.y,
              ]),
            },
          },
          a,
        ),
      );
    } else {
      b.callParent([c]);
    }
    return b;
  },
});
Ext.define(
  "Ext.overrides.event.Event",
  {
    override: "Ext.event.Event",
    mousedownEvents: { mousedown: 1, pointerdown: 1, touchstart: 1 },
    injectEvent: (function () {
      var d,
        e = {},
        c;
      if (!Ext.isIE9m && document.createEvent) {
        d = {
          createHtmlEvent: function (j, h, g, f) {
            var i = j.createEvent("HTMLEvents");
            i.initEvent(h, g, f);
            return i;
          },
          createMouseEvent: function (t, r, l, k, n, j, h, i, f, q, p, m, o) {
            var g = t.createEvent("MouseEvents"),
              s = t.defaultView || window;
            if (g.initMouseEvent) {
              g.initMouseEvent(r, l, k, s, n, j, h, j, h, i, f, q, p, m, o);
            } else {
              g = t.createEvent("UIEvents");
              g.initEvent(r, l, k);
              g.view = s;
              g.detail = n;
              g.screenX = j;
              g.screenY = h;
              g.clientX = j;
              g.clientY = h;
              g.ctrlKey = i;
              g.altKey = f;
              g.metaKey = p;
              g.shiftKey = q;
              g.button = m;
              g.relatedTarget = o;
            }
            return g;
          },
          createUIEvent: function (l, j, h, g, i) {
            var k = l.createEvent("UIEvents"),
              f = l.defaultView || window;
            k.initUIEvent(j, h, g, f, i);
            return k;
          },
          fireEvent: function (h, f, g) {
            h.dispatchEvent(g);
          },
        };
      } else {
        if (document.createEventObject) {
          c = { 0: 1, 1: 4, 2: 2 };
          d = {
            createHtmlEvent: function (j, h, g, f) {
              var i = j.createEventObject();
              i.bubbles = g;
              i.cancelable = f;
              return i;
            },
            createMouseEvent: function (s, r, l, k, n, j, h, i, f, q, p, m, o) {
              var g = s.createEventObject();
              g.bubbles = l;
              g.cancelable = k;
              g.detail = n;
              g.screenX = j;
              g.screenY = h;
              g.clientX = j;
              g.clientY = h;
              g.ctrlKey = i;
              g.altKey = f;
              g.shiftKey = q;
              g.metaKey = p;
              g.button = c[m] || m;
              g.relatedTarget = o;
              return g;
            },
            createUIEvent: function (k, i, g, f, h) {
              var j = k.createEventObject();
              j.bubbles = g;
              j.cancelable = f;
              return j;
            },
            fireEvent: function (h, f, g) {
              h.fireEvent("on" + f, g);
            },
          };
        }
      }
      Ext.Object.each(
        {
          load: [false, false],
          unload: [false, false],
          select: [true, false],
          change: [true, false],
          submit: [true, true],
          reset: [true, false],
          resize: [true, false],
          scroll: [true, false],
        },
        function (h, i) {
          var g = i[0],
            f = i[1];
          e[h] = function (l, j) {
            var k = d.createHtmlEvent(h, g, f);
            d.fireEvent(l, h, k);
          };
        },
      );
      function b(h, g) {
        var f = h !== "mousemove";
        return function (l, i) {
          var k = i.getXY(),
            j = d.createMouseEvent(
              l.ownerDocument,
              h,
              true,
              f,
              g,
              k[0],
              k[1],
              i.ctrlKey,
              i.altKey,
              i.shiftKey,
              i.metaKey,
              i.button,
              i.relatedTarget,
            );
          d.fireEvent(l, h, j);
        };
      }
      Ext.each(
        [
          "click",
          "dblclick",
          "mousedown",
          "mouseup",
          "mouseover",
          "mousemove",
          "mouseout",
        ],
        function (f) {
          e[f] = b(f, 1);
        },
      );
      Ext.Object.each(
        {
          focusin: [true, false],
          focusout: [true, false],
          activate: [true, true],
          focus: [false, false],
          blur: [false, false],
        },
        function (h, i) {
          var g = i[0],
            f = i[1];
          e[h] = function (l, j) {
            var k = d.createUIEvent(l.ownerDocument, h, g, f, 1);
            d.fireEvent(l, h, k);
          };
        },
      );
      if (!d) {
        e = {};
        d = {};
      }
      function a(g, f) {}
      return function (i) {
        var h = this,
          g = e[h.type] || a,
          f = i ? i.dom || i : h.getTarget();
        g(f, h);
      };
    })(),
    preventDefault: function () {
      var d = this,
        c = d.browserEvent,
        b = d.parentEvent,
        a,
        e;
      if (typeof c.type !== "unknown") {
        d.defaultPrevented = true;
        if (b) {
          b.defaultPrevented = true;
        }
        if (c.preventDefault) {
          c.preventDefault();
        } else {
          if (c.type === "mousedown") {
            e = c.target;
            a = e.getAttribute("unselectable");
            if (a !== "on") {
              e.setAttribute("unselectable", "on");
              Ext.defer(function () {
                e.setAttribute("unselectable", a);
              }, 1);
            }
          }
          c.returnValue = false;
          if (c.ctrlKey || (c.keyCode > 111 && c.keyCode < 124)) {
            c.keyCode = -1;
          }
        }
      }
      return d;
    },
    stopPropagation: function () {
      var b = this,
        a = b.browserEvent;
      if (typeof a.type !== "unknown") {
        if (b.mousedownEvents[b.type]) {
          Ext.GlobalEvents.fireMouseDown(b);
        }
        b.callParent();
      }
      return b;
    },
    deprecated: {
      "5.0": {
        methods: {
          clone: function () {
            return new this.self(this.browserEvent, this);
          },
        },
      },
    },
  },
  function () {
    var a = this,
      d,
      c = function (f) {
        if (f.keyCode === 9) {
          a.forwardTab = !f.shiftKey;
        }
      },
      b = function (f) {
        if (f.keyCode === 9) {
          delete a.forwardTab;
        }
      };
    if (Ext.isIE9m) {
      d = { 0: 0, 1: 0, 4: 1, 2: 2 };
      a.override({
        statics: {
          enableIEAsync: function (g) {
            var e,
              f = {};
            for (e in g) {
              f[e] = g[e];
            }
            return f;
          },
        },
        constructor: function (h, i, f, e) {
          var g = this;
          g.callParent([h, i, f, e]);
          g.button = d[h.button];
          if (h.type === "contextmenu") {
            g.button = 2;
          }
          g.toElement = h.toElement;
          g.fromElement = h.fromElement;
        },
        mouseLeaveRe: /(mouseout|mouseleave)/,
        mouseEnterRe: /(mouseover|mouseenter)/,
        enableIEAsync: function (e) {
          this.browserEvent = this.self.enableIEAsync(e);
        },
        getRelatedTarget: function (f, j, e) {
          var h = this,
            g,
            i;
          if (!h.relatedTarget) {
            g = h.type;
            if (h.mouseLeaveRe.test(g)) {
              i = h.toElement;
            } else {
              if (h.mouseEnterRe.test(g)) {
                i = h.fromElement;
              }
            }
            if (i) {
              h.relatedTarget = h.self.resolveTextNode(i);
            }
          }
          return h.callParent([f, j, e]);
        },
      });
      document.attachEvent("onkeydown", c);
      document.attachEvent("onkeyup", b);
      window.attachEvent("onunload", function () {
        document.detachEvent("onkeydown", c);
        document.detachEvent("onkeyup", b);
      });
    } else {
      if (document.addEventListener) {
        document.addEventListener("keydown", c, true);
        document.addEventListener("keyup", b, true);
      }
    }
  },
);
Ext.define(
  "Ext.overrides.event.publisher.Dom",
  { override: "Ext.event.publisher.Dom" },
  function (e) {
    if (Ext.isIE9m) {
      var d = document.body,
        c = e.prototype,
        a,
        b;
      c.target = document;
      c.directBoundListeners = {};
      a = function (h, g, f) {
        h.target = h.srcElement || window;
        h.currentTarget = this;
        if (f) {
          g.onDirectCaptureEvent(h);
        } else {
          g.onDirectEvent(h);
        }
      };
      b = function (g, f) {
        g.target = g.srcElement || window;
        g.currentTarget = this;
        f.onDirectCaptureEvent(g);
      };
      e.override({
        addDelegatedListener: function (f) {
          this.delegatedListeners[f] = 1;
          this.target.attachEvent("on" + f, this.onDelegatedEvent);
        },
        removeDelegatedListener: function (f) {
          delete this.delegatedListeners[f];
          this.target.detachEvent("on" + f, this.onDelegatedEvent);
        },
        addDirectListener: function (i, j, h) {
          var l = this,
            m = j.dom,
            k = Ext.Function.bind(a, m, [l, h], true),
            f = l.directBoundListeners,
            g = f[i] || (f[i] = {});
          g[m.id] = k;
          if (m.attachEvent) {
            m.attachEvent("on" + i, k);
          } else {
            l.callParent(arguments);
          }
        },
        removeDirectListener: function (f, g) {
          var h = g.dom;
          if (h.detachEvent) {
            h.detachEvent("on" + f, this.directBoundListeners[f][h.id]);
          } else {
            this.callParent(arguments);
          }
        },
        doDelegatedEvent: function (g, f) {
          g.target = g.srcElement || window;
          if (g.type === "focusin") {
            g.relatedTarget = g.fromElement === d ? null : g.fromElement;
          } else {
            if (g.type === "focusout") {
              g.relatedTarget = g.toElement === d ? null : g.toElement;
            }
          }
          return this.callParent([g, f]);
        },
      });
      Ext.apply(c.directEvents, c.captureEvents);
      c.captureEvents = {};
    }
  },
);
Ext.define(
  "Ext.overrides.event.publisher.Gesture",
  { override: "Ext.event.publisher.Gesture" },
  function () {
    if (Ext.isIE9m) {
      this.override({
        updateTouches: function (c, a) {
          var d = c.browserEvent,
            b = c.getXY();
          d.pageX = b[0];
          d.pageY = b[1];
          this.callParent([c, a]);
        },
        doDelegatedEvent: function (a) {
          this.callParent([Ext.event.Event.enableIEAsync(a)]);
        },
      });
    }
  },
);
Ext.define(
  "Ext.overrides.dom.Element",
  (function () {
    var Element,
      WIN = window,
      DOC = document,
      HIDDEN = "hidden",
      ISCLIPPED = "isClipped",
      OVERFLOW = "overflow",
      OVERFLOWX = "overflow-x",
      OVERFLOWY = "overflow-y",
      ORIGINALCLIP = "originalClip",
      HEIGHT = "height",
      WIDTH = "width",
      VISIBILITY = "visibility",
      DISPLAY = "display",
      NONE = "none",
      OFFSETS = "offsets",
      CLIP = "clip",
      ORIGINALDISPLAY = "originalDisplay",
      VISMODE = "visibilityMode",
      ISVISIBLE = "isVisible",
      OFFSETCLASS = Ext.baseCSSPrefix + "hidden-offsets",
      CLIPCLASS = Ext.baseCSSPrefix + "hidden-clip",
      boxMarkup = [
        '<div class="{0}-tl" role="presentation">',
        '<div class="{0}-tr" role="presentation">',
        '<div class="{0}-tc" role="presentation"></div>',
        "</div>",
        "</div>",
        '<div class="{0}-ml" role="presentation">',
        '<div class="{0}-mr" role="presentation">',
        '<div class="{0}-mc" role="presentation"></div>',
        "</div>",
        "</div>",
        '<div class="{0}-bl" role="presentation">',
        '<div class="{0}-br" role="presentation">',
        '<div class="{0}-bc" role="presentation"></div>',
        "</div>",
        "</div>",
      ].join(""),
      scriptTagRe = /(?:<script([^>]*)?>)((\n|\r|.)*?)(?:<\/script>)/gi,
      replaceScriptTagRe = /(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)/gi,
      srcRe = /\ssrc=([\'\"])(.*?)\1/i,
      nonSpaceRe = /\S/,
      typeRe = /\stype=([\'\"])(.*?)\1/i,
      msRe = /^-ms-/,
      camelRe = /(-[a-z])/gi,
      camelReplaceFn = function (m, a) {
        return a.charAt(1).toUpperCase();
      },
      XMASKED = Ext.baseCSSPrefix + "masked",
      XMASKEDRELATIVE = Ext.baseCSSPrefix + "masked-relative",
      EXTELMASKMSG = Ext.baseCSSPrefix + "mask-msg",
      bodyRe = /^body/i,
      propertyCache = {},
      getVisMode = function (el) {
        var data = el.getData(),
          visMode = data[VISMODE];
        if (visMode === undefined) {
          data[VISMODE] = visMode = Element.VISIBILITY;
        }
        return visMode;
      },
      emptyRange = DOC.createRange ? DOC.createRange() : null,
      inputTags = { INPUT: true, TEXTAREA: true };
    if (Ext.isIE8) {
      var removeNode = Ext.removeNode,
        garbageBin = DOC.createElement("div"),
        destroyQueue = [],
        clearGarbage = Ext.Function.createBuffered(function () {
          var len = destroyQueue.length,
            i;
          for (i = 0; i < len; i++) {
            garbageBin.appendChild(destroyQueue[i]);
          }
          garbageBin.innerHTML = "";
          destroyQueue.length = 0;
        }, 10);
      Ext.removeNode = function (node) {
        node = node.dom || node;
        removeNode(node);
        destroyQueue[destroyQueue.length] = node;
        clearGarbage();
      };
    }
    return {
      override: "Ext.dom.Element",
      mixins: ["Ext.util.Animate"],
      uses: [
        "Ext.dom.GarbageCollector",
        "Ext.dom.Fly",
        "Ext.event.publisher.MouseEnterLeave",
        "Ext.fx.Manager",
        "Ext.fx.Anim",
      ],
      skipGarbageCollection: false,
      _init: function (E) {
        Element = E;
        E.tabbableSelector += ",[" + E.tabbableSavedCounterAttribute + "]";
      },
      statics: {
        selectableCls: Ext.baseCSSPrefix + "selectable",
        unselectableCls: Ext.baseCSSPrefix + "unselectable",
        tabbableSelector: Ext.supports.CSS3NegationSelector
          ? 'a[href],button,iframe,input,select,textarea,[tabindex]:not([tabindex="-1"]),[contenteditable="true"]'
          : 'a[href],button,iframe,input,select,textarea,[tabindex],[contenteditable="true"]',
        naturallyFocusableTags: {
          BUTTON: true,
          IFRAME: true,
          EMBED: true,
          INPUT: true,
          OBJECT: true,
          SELECT: true,
          TEXTAREA: true,
          HTML: Ext.isIE ? true : false,
        },
        naturallyTabbableTags: {
          BUTTON: true,
          IFRAME: true,
          INPUT: true,
          SELECT: true,
          TEXTAREA: true,
          OBJECT: Ext.isIE8m ? true : false,
        },
        tabbableSavedCounterAttribute: "data-tabindex-counter",
        tabbableSavedValueAttribute: "data-tabindex-value",
        normalize: function (prop) {
          if (prop === "float") {
            prop = Ext.supports.Float ? "cssFloat" : "styleFloat";
          }
          return (
            propertyCache[prop] ||
            (propertyCache[prop] = prop
              .replace(msRe, "ms-")
              .replace(camelRe, camelReplaceFn))
          );
        },
      },
      addClsOnClick: function (className, testFn, scope) {
        var me = this,
          dom = me.dom,
          hasTest = Ext.isFunction(testFn);
        me.on("mousedown", function () {
          if (hasTest && testFn.call(scope || me, me) === false) {
            return false;
          }
          Ext.fly(dom).addCls(className);
          var d = Ext.getDoc(),
            fn = function () {
              Ext.fly(dom).removeCls(className);
              d.removeListener("mouseup", fn);
            };
          d.on("mouseup", fn);
        });
        return me;
      },
      addClsOnFocus: function (className, testFn, scope) {
        var me = this,
          dom = me.dom,
          hasTest = Ext.isFunction(testFn);
        me.on("focus", function () {
          if (hasTest && testFn.call(scope || me, me) === false) {
            return false;
          }
          Ext.fly(dom).addCls(className);
        });
        me.on("blur", function () {
          Ext.fly(dom).removeCls(className);
        });
        return me;
      },
      addClsOnOver: function (className, testFn, scope) {
        var me = this,
          dom = me.dom,
          hasTest = Ext.isFunction(testFn);
        me.hover(
          function () {
            if (hasTest && testFn.call(scope || me, me) === false) {
              return;
            }
            Ext.fly(dom).addCls(className);
          },
          function () {
            Ext.fly(dom).removeCls(className);
          },
        );
        return me;
      },
      addKeyListener: function (key, fn, scope) {
        var config;
        if (typeof key !== "object" || Ext.isArray(key)) {
          config = { target: this, key: key, fn: fn, scope: scope };
        } else {
          config = {
            target: this,
            key: key.key,
            shift: key.shift,
            ctrl: key.ctrl,
            alt: key.alt,
            fn: fn,
            scope: scope,
          };
        }
        return new Ext.util.KeyMap(config);
      },
      addKeyMap: function (config) {
        return new Ext.util.KeyMap(Ext.apply({ target: this }, config));
      },
      afterAnimate: function () {
        var shadow = this.shadow;
        if (shadow && !shadow.disabled && !shadow.animate) {
          shadow.show();
        }
      },
      anchorAnimX: function (anchor) {
        var xName = anchor === "l" ? "right" : "left";
        this.dom.style[xName] = "0px";
      },
      anim: function (config) {
        if (!Ext.isObject(config)) {
          return config ? {} : false;
        }
        var me = this,
          duration = config.duration || Ext.fx.Anim.prototype.duration,
          easing = config.easing || "ease",
          animConfig;
        if (config.stopAnimation) {
          me.stopAnimation();
        }
        Ext.applyIf(config, Ext.fx.Manager.getFxDefaults(me.id));
        Ext.fx.Manager.setFxDefaults(me.id, { delay: 0 });
        animConfig = {
          target: me.dom,
          remove: config.remove,
          alternate: config.alternate || false,
          duration: duration,
          easing: easing,
          callback: config.callback,
          listeners: config.listeners,
          iterations: config.iterations || 1,
          scope: config.scope,
          block: config.block,
          concurrent: config.concurrent,
          delay: config.delay || 0,
          paused: true,
          keyframes: config.keyframes,
          from: config.from || {},
          to: Ext.apply({}, config),
          userConfig: config,
        };
        Ext.apply(animConfig.to, config.to);
        delete animConfig.to.to;
        delete animConfig.to.from;
        delete animConfig.to.remove;
        delete animConfig.to.alternate;
        delete animConfig.to.keyframes;
        delete animConfig.to.iterations;
        delete animConfig.to.listeners;
        delete animConfig.to.target;
        delete animConfig.to.paused;
        delete animConfig.to.callback;
        delete animConfig.to.scope;
        delete animConfig.to.duration;
        delete animConfig.to.easing;
        delete animConfig.to.concurrent;
        delete animConfig.to.block;
        delete animConfig.to.stopAnimation;
        delete animConfig.to.delay;
        return animConfig;
      },
      animate: function (config) {
        this.addAnimation(config);
        return this;
      },
      addAnimation: function (config) {
        var me = this,
          animId = me.dom.id || Ext.id(me.dom),
          listeners,
          anim,
          end;
        if (!Ext.fx.Manager.hasFxBlock(animId)) {
          if (config.listeners) {
            listeners = config.listeners;
            delete config.listeners;
          }
          if (config.internalListeners) {
            config.listeners = config.internalListeners;
            delete config.internalListeners;
          }
          end = config.autoEnd;
          delete config.autoEnd;
          anim = new Ext.fx.Anim(me.anim(config));
          anim.on({
            afteranimate: "afterAnimate",
            beforeanimate: "beforeAnimate",
            scope: me,
            single: true,
          });
          if (listeners) {
            anim.on(listeners);
          }
          Ext.fx.Manager.queueFx(anim);
          if (end) {
            anim.jumpToEnd();
          }
        }
        return anim;
      },
      beforeAnimate: function () {
        var shadow = this.shadow;
        if (shadow && !shadow.disabled && !shadow.animate) {
          shadow.hide();
        }
      },
      boxWrap: function (cls) {
        cls = cls || Ext.baseCSSPrefix + "box";
        var el = Ext.get(
          this.insertHtml(
            "beforeBegin",
            "<div class='" +
              cls +
              "' role='presentation'>" +
              Ext.String.format(boxMarkup, cls) +
              "</div>",
          ),
        );
        el.selectNode("." + cls + "-mc").appendChild(this.dom);
        return el;
      },
      clean: function (forceReclean) {
        var me = this,
          dom = me.dom,
          data = me.getData(),
          n = dom.firstChild,
          ni = -1,
          nx;
        if (data.isCleaned && forceReclean !== true) {
          return me;
        }
        while (n) {
          nx = n.nextSibling;
          if (n.nodeType === 3) {
            if (!nonSpaceRe.test(n.nodeValue)) {
              dom.removeChild(n);
            } else {
              if (nx && nx.nodeType === 3) {
                n.appendData(Ext.String.trim(nx.data));
                dom.removeChild(nx);
                nx = n.nextSibling;
                n.nodeIndex = ++ni;
              }
            }
          } else {
            Ext.fly(n, "_clean").clean();
            n.nodeIndex = ++ni;
          }
          n = nx;
        }
        data.isCleaned = true;
        return me;
      },
      empty: emptyRange
        ? function () {
            var dom = this.dom;
            if (dom.firstChild) {
              emptyRange.setStartBefore(dom.firstChild);
              emptyRange.setEndAfter(dom.lastChild);
              emptyRange.deleteContents();
            }
          }
        : function () {
            var dom = this.dom;
            while (dom.lastChild) {
              dom.removeChild(dom.lastChild);
            }
          },
      clearListeners: function () {
        this.removeAnchor();
        this.callParent();
      },
      clearPositioning: function (value) {
        value = value || "";
        return this.setStyle({
          left: value,
          right: value,
          top: value,
          bottom: value,
          "z-index": "",
          position: "static",
        });
      },
      createProxy: function (config, renderTo, matchBox) {
        config =
          typeof config === "object"
            ? config
            : { tag: "div", role: "presentation", cls: config };
        var me = this,
          proxy = renderTo
            ? Ext.DomHelper.append(renderTo, config, true)
            : Ext.DomHelper.insertBefore(me.dom, config, true);
        proxy.setVisibilityMode(Element.DISPLAY);
        proxy.hide();
        if (matchBox && me.setBox && me.getBox) {
          proxy.setBox(me.getBox());
        }
        return proxy;
      },
      clearOpacity: function () {
        return this.setOpacity("");
      },
      clip: function () {
        var me = this,
          data = me.getData(),
          style;
        if (!data[ISCLIPPED]) {
          data[ISCLIPPED] = true;
          style = me.getStyle([OVERFLOW, OVERFLOWX, OVERFLOWY]);
          data[ORIGINALCLIP] = {
            o: style[OVERFLOW],
            x: style[OVERFLOWX],
            y: style[OVERFLOWY],
          };
          me.setStyle(OVERFLOW, HIDDEN);
          me.setStyle(OVERFLOWX, HIDDEN);
          me.setStyle(OVERFLOWY, HIDDEN);
        }
        return me;
      },
      destroy: function () {
        var me = this,
          dom = me.dom,
          data = me.getData(),
          maskEl,
          maskMsg;
        if (dom && me.isAnimate) {
          me.stopAnimation();
        }
        me.callParent();
        if (
          dom &&
          Ext.isIE8 &&
          dom.window != dom &&
          dom.nodeType !== 9 &&
          dom.tagName !== "BODY" &&
          dom.tagName !== "HTML"
        ) {
          destroyQueue[destroyQueue.length] = dom;
          clearGarbage();
        }
        if (data) {
          maskEl = data.maskEl;
          maskMsg = data.maskMsg;
          if (maskEl) {
            maskEl.destroy();
          }
          if (maskMsg) {
            maskMsg.destroy();
          }
        }
      },
      enableDisplayMode: function (display) {
        var me = this;
        me.setVisibilityMode(Element.DISPLAY);
        if (display !== undefined) {
          me.getData()[ORIGINALDISPLAY] = display;
        }
        return me;
      },
      fadeIn: function (o) {
        var me = this,
          dom = me.dom;
        me.animate(
          Ext.apply({}, o, {
            opacity: 1,
            internalListeners: {
              beforeanimate: function (anim) {
                var el = Ext.fly(dom, "_anim");
                if (el.isStyle("display", "none")) {
                  el.setDisplayed("");
                } else {
                  el.show();
                }
              },
            },
          }),
        );
        return this;
      },
      fadeOut: function (o) {
        var me = this,
          dom = me.dom;
        o = Ext.apply(
          {
            opacity: 0,
            internalListeners: {
              afteranimate: function (anim) {
                if (dom && anim.to.opacity === 0) {
                  var el = Ext.fly(dom, "_anim");
                  if (o.useDisplay) {
                    el.setDisplayed(false);
                  } else {
                    el.hide();
                  }
                }
              },
            },
          },
          o,
        );
        me.animate(o);
        return me;
      },
      fixDisplay: function () {
        var me = this;
        if (me.isStyle(DISPLAY, NONE)) {
          me.setStyle(VISIBILITY, HIDDEN);
          me.setStyle(DISPLAY, me._getDisplay());
          if (me.isStyle(DISPLAY, NONE)) {
            me.setStyle(DISPLAY, "block");
          }
        }
      },
      frame: function (color, count, obj) {
        var me = this,
          dom = me.dom,
          beforeAnim;
        color = color || "#C3DAF9";
        count = count || 1;
        obj = obj || {};
        beforeAnim = function () {
          var el = Ext.fly(dom, "_anim"),
            animScope = this,
            box,
            proxy,
            proxyAnim;
          el.show();
          box = el.getBox();
          proxy = Ext.getBody().createChild({
            role: "presentation",
            id: el.dom.id + "-anim-proxy",
            style: {
              position: "absolute",
              "pointer-events": "none",
              "z-index": 35000,
              border: "0px solid " + color,
            },
          });
          proxyAnim = new Ext.fx.Anim({
            target: proxy,
            duration: obj.duration || 1000,
            iterations: count,
            from: {
              top: box.y,
              left: box.x,
              borderWidth: 0,
              opacity: 1,
              height: box.height,
              width: box.width,
            },
            to: {
              top: box.y - 20,
              left: box.x - 20,
              borderWidth: 10,
              opacity: 0,
              height: box.height + 40,
              width: box.width + 40,
            },
          });
          proxyAnim.on("afteranimate", function () {
            proxy.destroy();
            animScope.end();
          });
        };
        me.animate({
          duration: Math.max(obj.duration, 500) * 2 || 2000,
          listeners: { beforeanimate: { fn: beforeAnim } },
          callback: obj.callback,
          scope: obj.scope,
        });
        return me;
      },
      getColor: function (attr, defaultValue, prefix) {
        var v = this.getStyle(attr),
          color = prefix || prefix === "" ? prefix : "#",
          h,
          len,
          i = 0;
        if (!v || /transparent|inherit/.test(v)) {
          return defaultValue;
        }
        if (/^r/.test(v)) {
          v = v.slice(4, v.length - 1).split(",");
          len = v.length;
          for (; i < len; i++) {
            h = parseInt(v[i], 10);
            color += (h < 16 ? "0" : "") + h.toString(16);
          }
        } else {
          v = v.replace("#", "");
          color +=
            v.length === 3 ? v.replace(/^(\w)(\w)(\w)$/, "$1$1$2$2$3$3") : v;
        }
        return color.length > 5 ? color.toLowerCase() : defaultValue;
      },
      getLoader: function () {
        var me = this,
          data = me.getData(),
          loader = data.loader;
        if (!loader) {
          data.loader = loader = new Ext.ElementLoader({ target: me });
        }
        return loader;
      },
      getPositioning: function (autoPx) {
        var styles = this.getStyle(["left", "top", "position", "z-index"]),
          dom = this.dom;
        if (autoPx) {
          if (styles.left === "auto") {
            styles.left = dom.offsetLeft + "px";
          }
          if (styles.top === "auto") {
            styles.top = dom.offsetTop + "px";
          }
        }
        return styles;
      },
      ghost: function (anchor, obj) {
        var me = this,
          dom = me.dom,
          beforeAnim;
        anchor = anchor || "b";
        beforeAnim = function () {
          var el = Ext.fly(dom, "_anim"),
            width = el.getWidth(),
            height = el.getHeight(),
            xy = el.getXY(),
            position = el.getPositioning(),
            to = { opacity: 0 };
          switch (anchor) {
            case "t":
              to.y = xy[1] - height;
              break;
            case "l":
              to.x = xy[0] - width;
              break;
            case "r":
              to.x = xy[0] + width;
              break;
            case "b":
              to.y = xy[1] + height;
              break;
            case "tl":
              to.x = xy[0] - width;
              to.y = xy[1] - height;
              break;
            case "bl":
              to.x = xy[0] - width;
              to.y = xy[1] + height;
              break;
            case "br":
              to.x = xy[0] + width;
              to.y = xy[1] + height;
              break;
            case "tr":
              to.x = xy[0] + width;
              to.y = xy[1] - height;
              break;
          }
          this.to = to;
          this.on("afteranimate", function () {
            var el = Ext.fly(dom, "_anim");
            if (el) {
              el.hide();
              el.clearOpacity();
              el.setPositioning(position);
            }
          });
        };
        me.animate(
          Ext.applyIf(obj || {}, {
            duration: 500,
            easing: "ease-out",
            listeners: { beforeanimate: beforeAnim },
          }),
        );
        return me;
      },
      hide: function (animate) {
        if (typeof animate === "string") {
          this.setVisible(false, animate);
          return this;
        }
        this.setVisible(false, this.anim(animate));
        return this;
      },
      highlight: function (color, o) {
        var me = this,
          dom = me.dom,
          from = {},
          restore,
          to,
          attr,
          lns,
          event,
          fn;
        o = o || {};
        lns = o.listeners || {};
        attr = o.attr || "backgroundColor";
        from[attr] = color || "ffff9c";
        if (!o.to) {
          to = {};
          to[attr] = o.endColor || me.getColor(attr, "ffffff", "");
        } else {
          to = o.to;
        }
        o.listeners = Ext.apply(Ext.apply({}, lns), {
          beforeanimate: function () {
            restore = dom.style[attr];
            var el = Ext.fly(dom, "_anim");
            el.clearOpacity();
            el.show();
            event = lns.beforeanimate;
            if (event) {
              fn = event.fn || event;
              return fn.apply(event.scope || lns.scope || WIN, arguments);
            }
          },
          afteranimate: function () {
            if (dom) {
              dom.style[attr] = restore;
            }
            event = lns.afteranimate;
            if (event) {
              fn = event.fn || event;
              fn.apply(event.scope || lns.scope || WIN, arguments);
            }
          },
        });
        me.animate(
          Ext.apply({}, o, {
            duration: 1000,
            easing: "ease-in",
            from: from,
            to: to,
          }),
        );
        return me;
      },
      hover: function (overFn, outFn, scope, options) {
        var me = this;
        me.on("mouseenter", overFn, scope || me.dom, options);
        me.on("mouseleave", outFn, scope || me.dom, options);
        return me;
      },
      initDD: function (group, config, overrides) {
        var dd = new Ext.dd.DD(Ext.id(this.dom), group, config);
        return Ext.apply(dd, overrides);
      },
      initDDProxy: function (group, config, overrides) {
        var dd = new Ext.dd.DDProxy(Ext.id(this.dom), group, config);
        return Ext.apply(dd, overrides);
      },
      initDDTarget: function (group, config, overrides) {
        var dd = new Ext.dd.DDTarget(Ext.id(this.dom), group, config);
        return Ext.apply(dd, overrides);
      },
      isFocusable: function () {
        var dom = this.dom,
          focusable = false,
          nodeName;
        if (dom && !dom.disabled) {
          nodeName = dom.nodeName;
          focusable =
            !!Ext.Element.naturallyFocusableTags[nodeName] ||
            ((nodeName === "A" || nodeName === "LINK") && !!dom.href) ||
            dom.getAttribute("tabIndex") != null ||
            dom.contentEditable === "true";
          if (Ext.isIE8 && nodeName === "INPUT" && dom.type === "hidden") {
            focusable = false;
          }
          focusable = focusable && this.isVisible(true);
        }
        return focusable;
      },
      isInputField: function () {
        var dom = this.dom,
          contentEditable = dom.contentEditable;
        if (
          (inputTags[dom.tagName] && dom.type !== "button") ||
          contentEditable === "" ||
          contentEditable === "true"
        ) {
          return true;
        }
        return false;
      },
      isTabbable: function (includeHidden) {
        var dom = this.dom,
          tabbable = false,
          nodeName,
          hasIndex,
          tabIndex;
        if (dom && !dom.disabled) {
          nodeName = dom.nodeName;
          tabIndex = dom.getAttribute("tabIndex");
          hasIndex = tabIndex != null;
          tabIndex -= 0;
          if (nodeName === "A" || nodeName === "LINK") {
            if (dom.href) {
              tabbable = hasIndex && tabIndex < 0 ? false : true;
            } else {
              if (dom.contentEditable === "true") {
                tabbable =
                  !hasIndex || (hasIndex && tabIndex >= 0) ? true : false;
              } else {
                tabbable = hasIndex && tabIndex >= 0 ? true : false;
              }
            }
          } else {
            if (
              dom.contentEditable === "true" ||
              Ext.Element.naturallyTabbableTags[nodeName]
            ) {
              tabbable = hasIndex && tabIndex < 0 ? false : true;
            } else {
              if (hasIndex && tabIndex >= 0) {
                tabbable = true;
              }
            }
          }
          if (Ext.isIE8 && nodeName === "INPUT" && dom.type === "hidden") {
            tabbable = false;
          }
          tabbable =
            tabbable &&
            (includeHidden ||
              ((!this.component || this.component.isVisible(true)) &&
                this.isVisible(true)));
        }
        return tabbable;
      },
      isMasked: function (deep) {
        var me = this,
          data = me.getData(),
          maskEl = data.maskEl,
          maskMsg = data.maskMsg,
          hasMask = false,
          parent;
        if (maskEl && maskEl.isVisible()) {
          if (maskMsg) {
            maskMsg.center(me);
          }
          hasMask = true;
        } else {
          if (deep) {
            parent = me.findParentNode();
            if (parent) {
              return Ext.fly(parent).isMasked(deep);
            }
          }
        }
        return hasMask;
      },
      load: function (options) {
        this.getLoader().load(options);
        return this;
      },
      mask: function (msg, msgCls, elHeight) {
        var me = this,
          dom = me.dom,
          data = me.getData(),
          maskEl = data.maskEl,
          maskMsg;
        if (
          !(bodyRe.test(dom.tagName) && me.getStyle("position") === "static")
        ) {
          me.addCls(XMASKEDRELATIVE);
        }
        if (maskEl) {
          maskEl.destroy();
        }
        maskEl = Ext.DomHelper.append(
          dom,
          {
            role: "presentation",
            cls: Ext.baseCSSPrefix + "mask " + Ext.baseCSSPrefix + "border-box",
            children: {
              role: "presentation",
              cls: msgCls ? EXTELMASKMSG + " " + msgCls : EXTELMASKMSG,
              cn: {
                tag: "div",
                role: "presentation",
                cls: Ext.baseCSSPrefix + "mask-msg-inner",
                cn: {
                  tag: "div",
                  role: "presentation",
                  cls: Ext.baseCSSPrefix + "mask-msg-text",
                  html: msg || "",
                },
              },
            },
          },
          true,
        );
        maskMsg = Ext.get(maskEl.dom.firstChild);
        data.maskEl = maskEl;
        me.addCls(XMASKED);
        maskEl.setDisplayed(true);
        if (typeof msg === "string") {
          maskMsg.setDisplayed(true);
          maskMsg.center(me);
        } else {
          maskMsg.setDisplayed(false);
        }
        if (dom === DOC.body) {
          maskEl.addCls(Ext.baseCSSPrefix + "mask-fixed");
        }
        me.saveTabbableState({ skipSelf: dom === DOC.body });
        if (Ext.isIE9m && dom !== DOC.body && me.isStyle("height", "auto")) {
          maskEl.setSize(undefined, elHeight || me.getHeight());
        }
        return maskEl;
      },
      monitorMouseLeave: function (delay, handler, scope) {
        var me = this,
          timer,
          listeners = {
            mouseleave: function (e) {
              if (Ext.isIE9m) {
                e.enableIEAsync();
              }
              timer = Ext.defer(handler, delay, scope || me, [e]);
            },
            mouseenter: function () {
              clearTimeout(timer);
            },
          };
        me.on(listeners);
        return listeners;
      },
      puff: function (obj) {
        var me = this,
          dom = me.dom,
          beforeAnim,
          box = me.getBox(),
          originalStyles = me.getStyle(
            [
              "width",
              "height",
              "left",
              "right",
              "top",
              "bottom",
              "position",
              "z-index",
              "font-size",
              "opacity",
            ],
            true,
          );
        obj = Ext.applyIf(obj || {}, {
          easing: "ease-out",
          duration: 500,
          useDisplay: false,
        });
        beforeAnim = function () {
          var el = Ext.fly(dom, "_anim");
          el.clearOpacity();
          el.show();
          this.to = {
            width: box.width * 2,
            height: box.height * 2,
            x: box.x - box.width / 2,
            y: box.y - box.height / 2,
            opacity: 0,
            fontSize: "200%",
          };
          this.on("afteranimate", function () {
            var el = Ext.fly(dom, "_anim");
            if (el) {
              if (obj.useDisplay) {
                el.setDisplayed(false);
              } else {
                el.hide();
              }
              el.setStyle(originalStyles);
              Ext.callback(obj.callback, obj.scope);
            }
          });
        };
        me.animate({
          duration: obj.duration,
          easing: obj.easing,
          listeners: { beforeanimate: { fn: beforeAnim } },
        });
        return me;
      },
      selectable: function () {
        var me = this;
        me.dom.unselectable = "";
        me.removeCls(Element.unselectableCls);
        me.addCls(Element.selectableCls);
        return me;
      },
      setCapture: function () {
        var dom = this.dom;
        if (Ext.isIE9m && dom.setCapture) {
          dom.setCapture();
        }
      },
      setHeight: function (height, animate) {
        var me = this;
        if (!animate || !me.anim) {
          me.callParent(arguments);
        } else {
          if (!Ext.isObject(animate)) {
            animate = {};
          }
          me.animate(Ext.applyIf({ to: { height: height } }, animate));
        }
        return me;
      },
      setHorizontal: function () {
        var me = this,
          cls = me.verticalCls;
        delete me.vertical;
        if (cls) {
          delete me.verticalCls;
          me.removeCls(cls);
        }
        delete me.setWidth;
        delete me.setHeight;
        if (!Ext.isIE8) {
          delete me.getWidth;
          delete me.getHeight;
        }
        delete me.styleHooks;
      },
      updateText: function (text) {
        var me = this,
          dom,
          textNode;
        if (dom) {
          textNode = dom.firstChild;
          if (!textNode || textNode.nodeType !== 3 || textNode.nextSibling) {
            textNode = DOC.createTextNode();
            me.empty();
            dom.appendChild(textNode);
          }
          if (text) {
            textNode.data = text;
          }
        }
      },
      setHtml: function (html, loadScripts, callback) {
        var me = this,
          id,
          dom,
          interval;
        if (!me.dom) {
          return me;
        }
        html = html || "";
        dom = me.dom;
        if (loadScripts !== true) {
          dom.innerHTML = html;
          Ext.callback(callback, me);
          return me;
        }
        id = Ext.id();
        html += '<span id="' + id + '" role="presentation"></span>';
        interval = Ext.interval(function () {
          var hd, match, attrs, srcMatch, typeMatch, el, s;
          if (!(el = DOC.getElementById(id))) {
            return false;
          }
          clearInterval(interval);
          Ext.removeNode(el);
          hd = Ext.getHead().dom;
          while ((match = scriptTagRe.exec(html))) {
            attrs = match[1];
            srcMatch = attrs ? attrs.match(srcRe) : false;
            if (srcMatch && srcMatch[2]) {
              s = DOC.createElement("script");
              s.src = srcMatch[2];
              typeMatch = attrs.match(typeRe);
              if (typeMatch && typeMatch[2]) {
                s.type = typeMatch[2];
              }
              hd.appendChild(s);
            } else {
              if (match[2] && match[2].length > 0) {
                (WIN.execScript || WIN.eval)(match[2]);
              }
            }
          }
          Ext.callback(callback, me);
        }, 20);
        dom.innerHTML = html.replace(replaceScriptTagRe, "");
        return me;
      },
      setOpacity: function (opacity, animate) {
        var me = this;
        if (!me.dom) {
          return me;
        }
        if (!animate || !me.anim) {
          me.setStyle("opacity", opacity);
        } else {
          if (typeof animate != "object") {
            animate = { duration: 350, easing: "ease-in" };
          }
          me.animate(Ext.applyIf({ to: { opacity: opacity } }, animate));
        }
        return me;
      },
      setPositioning: function (pc) {
        return this.setStyle(pc);
      },
      setVertical: function (angle, cls) {
        var me = this,
          proto = Element.prototype;
        me.vertical = true;
        if (cls) {
          me.addCls((me.verticalCls = cls));
        }
        me.setWidth = proto.setHeight;
        me.setHeight = proto.setWidth;
        if (!Ext.isIE8) {
          me.getWidth = proto.getHeight;
          me.getHeight = proto.getWidth;
        }
        me.styleHooks =
          angle === 270
            ? proto.verticalStyleHooks270
            : proto.verticalStyleHooks90;
      },
      setSize: function (width, height, animate) {
        var me = this;
        if (Ext.isObject(width)) {
          animate = height;
          height = width.height;
          width = width.width;
        }
        if (!animate || !me.anim) {
          me.dom.style.width = Element.addUnits(width);
          me.dom.style.height = Element.addUnits(height);
          if (me.shadow || me.shim) {
            me.syncUnderlays();
          }
        } else {
          if (animate === true) {
            animate = {};
          }
          me.animate(
            Ext.applyIf({ to: { width: width, height: height } }, animate),
          );
        }
        return me;
      },
      setVisible: function (visible, animate) {
        var me = this,
          dom = me.dom,
          visMode = getVisMode(me);
        if (typeof animate === "string") {
          switch (animate) {
            case DISPLAY:
              visMode = Element.DISPLAY;
              break;
            case VISIBILITY:
              visMode = Element.VISIBILITY;
              break;
            case OFFSETS:
              visMode = Element.OFFSETS;
              break;
            case CLIP:
              visMode = Element.CLIP;
              break;
          }
          me.setVisibilityMode(visMode);
          animate = false;
        }
        if (!animate || !me.anim) {
          if (visMode === Element.DISPLAY) {
            return me.setDisplayed(visible);
          } else {
            if (visMode === Element.OFFSETS) {
              me[visible ? "removeCls" : "addCls"](OFFSETCLASS);
            } else {
              if (visMode === Element.CLIP) {
                me[visible ? "removeCls" : "addCls"](CLIPCLASS);
              } else {
                if (visMode === Element.VISIBILITY) {
                  me.fixDisplay();
                  dom.style.visibility = visible ? "" : HIDDEN;
                }
              }
            }
          }
        } else {
          if (visible) {
            me.setOpacity(0.01);
            me.setVisible(true);
          }
          if (!Ext.isObject(animate)) {
            animate = { duration: 350, easing: "ease-in" };
          }
          me.animate(
            Ext.applyIf(
              {
                callback: function () {
                  if (!visible) {
                    Ext.fly(dom).setVisible(false).setOpacity(1);
                  }
                },
                to: { opacity: visible ? 1 : 0 },
              },
              animate,
            ),
          );
        }
        me.getData()[ISVISIBLE] = visible;
        if (me.shadow || me.shim) {
          me.setUnderlaysVisible(visible);
        }
        return me;
      },
      setWidth: function (width, animate) {
        var me = this;
        if (!animate || !me.anim) {
          me.callParent(arguments);
        } else {
          if (!Ext.isObject(animate)) {
            animate = {};
          }
          me.animate(Ext.applyIf({ to: { width: width } }, animate));
        }
        return me;
      },
      setX: function (x, animate) {
        return this.setXY([x, this.getY()], animate);
      },
      setXY: function (xy, animate) {
        var me = this;
        if (!animate || !me.anim) {
          me.callParent([xy]);
        } else {
          if (!Ext.isObject(animate)) {
            animate = {};
          }
          me.animate(Ext.applyIf({ to: { x: xy[0], y: xy[1] } }, animate));
        }
        return this;
      },
      setY: function (y, animate) {
        return this.setXY([this.getX(), y], animate);
      },
      show: function (animate) {
        if (typeof animate === "string") {
          this.setVisible(true, animate);
          return this;
        }
        this.setVisible(true, this.anim(animate));
        return this;
      },
      slideIn: function (anchor, obj, slideOut) {
        var me = this,
          dom = me.dom,
          elStyle = dom.style,
          beforeAnim,
          wrapAnim,
          restoreScroll,
          wrapDomParentNode;
        anchor = anchor || "t";
        obj = obj || {};
        beforeAnim = function () {
          var animScope = this,
            listeners = obj.listeners,
            el = Ext.fly(dom, "_anim"),
            box,
            originalStyles,
            anim,
            wrap;
          if (!slideOut) {
            el.fixDisplay();
          }
          box = el.getBox();
          if ((anchor == "t" || anchor == "b") && box.height === 0) {
            box.height = dom.scrollHeight;
          } else {
            if ((anchor == "l" || anchor == "r") && box.width === 0) {
              box.width = dom.scrollWidth;
            }
          }
          originalStyles = el.getStyle(
            [
              "width",
              "height",
              "left",
              "right",
              "top",
              "bottom",
              "position",
              "z-index",
            ],
            true,
          );
          el.setSize(box.width, box.height);
          if (obj.preserveScroll) {
            restoreScroll = el.cacheScrollValues();
          }
          wrap = el.wrap({
            role: "presentation",
            id: Ext.id() + "-anim-wrap-for-" + el.dom.id,
            style: { visibility: slideOut ? "visible" : "hidden" },
          });
          wrapDomParentNode = wrap.dom.parentNode;
          wrap.setPositioning(el.getPositioning());
          if (wrap.isStyle("position", "static")) {
            wrap.position("relative");
          }
          el.clearPositioning("auto");
          wrap.clip();
          if (restoreScroll) {
            restoreScroll();
          }
          el.setStyle({ visibility: "", position: "absolute" });
          if (slideOut) {
            wrap.setSize(box.width, box.height);
          }
          switch (anchor) {
            case "t":
              anim = {
                from: { width: box.width + "px", height: "0px" },
                to: { width: box.width + "px", height: box.height + "px" },
              };
              elStyle.bottom = "0px";
              break;
            case "l":
              anim = {
                from: { width: "0px", height: box.height + "px" },
                to: { width: box.width + "px", height: box.height + "px" },
              };
              me.anchorAnimX(anchor);
              break;
            case "r":
              anim = {
                from: {
                  x: box.x + box.width,
                  width: "0px",
                  height: box.height + "px",
                },
                to: {
                  x: box.x,
                  width: box.width + "px",
                  height: box.height + "px",
                },
              };
              me.anchorAnimX(anchor);
              break;
            case "b":
              anim = {
                from: {
                  y: box.y + box.height,
                  width: box.width + "px",
                  height: "0px",
                },
                to: {
                  y: box.y,
                  width: box.width + "px",
                  height: box.height + "px",
                },
              };
              break;
            case "tl":
              anim = {
                from: { x: box.x, y: box.y, width: "0px", height: "0px" },
                to: { width: box.width + "px", height: box.height + "px" },
              };
              elStyle.bottom = "0px";
              me.anchorAnimX("l");
              break;
            case "bl":
              anim = {
                from: { y: box.y + box.height, width: "0px", height: "0px" },
                to: {
                  y: box.y,
                  width: box.width + "px",
                  height: box.height + "px",
                },
              };
              me.anchorAnimX("l");
              break;
            case "br":
              anim = {
                from: {
                  x: box.x + box.width,
                  y: box.y + box.height,
                  width: "0px",
                  height: "0px",
                },
                to: {
                  x: box.x,
                  y: box.y,
                  width: box.width + "px",
                  height: box.height + "px",
                },
              };
              me.anchorAnimX("r");
              break;
            case "tr":
              anim = {
                from: { x: box.x + box.width, width: "0px", height: "0px" },
                to: {
                  x: box.x,
                  width: box.width + "px",
                  height: box.height + "px",
                },
              };
              elStyle.bottom = "0px";
              me.anchorAnimX("r");
              break;
          }
          wrap.show();
          wrapAnim = Ext.apply({}, obj);
          delete wrapAnim.listeners;
          wrapAnim = new Ext.fx.Anim(
            Ext.applyIf(wrapAnim, {
              target: wrap,
              duration: 500,
              easing: "ease-out",
              from: slideOut ? anim.to : anim.from,
              to: slideOut ? anim.from : anim.to,
            }),
          );
          wrapAnim.on("afteranimate", function () {
            var el = Ext.fly(dom, "_anim");
            el.setStyle(originalStyles);
            if (slideOut) {
              if (obj.useDisplay) {
                el.setDisplayed(false);
              } else {
                el.hide();
              }
            }
            if (wrap.dom) {
              if (wrap.dom.parentNode) {
                wrap.dom.parentNode.insertBefore(el.dom, wrap.dom);
              } else {
                wrapDomParentNode.appendChild(el.dom);
              }
              wrap.destroy();
            }
            if (restoreScroll) {
              restoreScroll();
            }
            animScope.end();
          });
          if (listeners) {
            wrapAnim.on(listeners);
          }
        };
        me.animate({
          duration: obj.duration ? Math.max(obj.duration, 500) * 2 : 1000,
          listeners: { beforeanimate: beforeAnim },
        });
        return me;
      },
      slideOut: function (anchor, o) {
        return this.slideIn(anchor, o, true);
      },
      swallowEvent: function (eventName, preventDefault) {
        var me = this,
          e,
          eLen,
          fn = function (e) {
            e.stopPropagation();
            if (preventDefault) {
              e.preventDefault();
            }
          };
        if (Ext.isArray(eventName)) {
          eLen = eventName.length;
          for (e = 0; e < eLen; e++) {
            me.on(eventName[e], fn);
          }
          return me;
        }
        me.on(eventName, fn);
        return me;
      },
      switchOff: function (obj) {
        var me = this,
          dom = me.dom,
          beforeAnim;
        obj = Ext.applyIf(obj || {}, {
          easing: "ease-in",
          duration: 500,
          remove: false,
          useDisplay: false,
        });
        beforeAnim = function () {
          var el = Ext.fly(dom, "_anim"),
            animScope = this,
            size = el.getSize(),
            xy = el.getXY(),
            keyframe,
            position;
          el.clearOpacity();
          el.clip();
          position = el.getPositioning();
          keyframe = new Ext.fx.Animator({
            target: dom,
            duration: obj.duration,
            easing: obj.easing,
            keyframes: {
              33: { opacity: 0.3 },
              66: { height: 1, y: xy[1] + size.height / 2 },
              100: { width: 1, x: xy[0] + size.width / 2 },
            },
          });
          keyframe.on("afteranimate", function () {
            var el = Ext.fly(dom, "_anim");
            if (obj.useDisplay) {
              el.setDisplayed(false);
            } else {
              el.hide();
            }
            el.clearOpacity();
            el.setPositioning(position);
            el.setSize(size);
            animScope.end();
          });
        };
        me.animate({
          duration: Math.max(obj.duration, 500) * 2,
          listeners: { beforeanimate: { fn: beforeAnim } },
          callback: obj.callback,
          scope: obj.scope,
        });
        return me;
      },
      syncContent: function (source) {
        source = Ext.getDom(source);
        var sourceNodes = source.childNodes,
          sourceLen = sourceNodes.length,
          dest = this.dom,
          destNodes = dest.childNodes,
          destLen = destNodes.length,
          i,
          destNode,
          sourceNode,
          nodeType,
          newAttrs,
          attLen,
          attName,
          elData = dest._extData;
        if (Ext.isIE9m && dest.mergeAttributes) {
          dest.mergeAttributes(source, true);
          dest.src = source.src;
        } else {
          newAttrs = source.attributes;
          attLen = newAttrs.length;
          for (i = 0; i < attLen; i++) {
            attName = newAttrs[i].name;
            if (attName !== "id") {
              dest.setAttribute(attName, newAttrs[i].value);
            }
          }
        }
        if (elData) {
          elData.isSynchronized = false;
        }
        if (sourceLen !== destLen) {
          dest.innerHTML = source.innerHTML;
          return;
        }
        for (i = 0; i < sourceLen; i++) {
          sourceNode = sourceNodes[i];
          destNode = destNodes[i];
          nodeType = sourceNode.nodeType;
          if (
            nodeType !== destNode.nodeType ||
            (nodeType === 1 && sourceNode.tagName !== destNode.tagName)
          ) {
            dest.innerHTML = source.innerHTML;
            return;
          }
          if (nodeType === 3) {
            destNode.data = sourceNode.data;
          } else {
            if (sourceNode.id && destNode.id !== sourceNode.id) {
              destNode.id = sourceNode.id;
            }
            destNode.style.cssText = sourceNode.style.cssText;
            destNode.className = sourceNode.className;
            Ext.fly(destNode, "_syncContent").syncContent(sourceNode);
          }
        }
      },
      toggle: function (animate) {
        var me = this;
        me.setVisible(!me.isVisible(), me.anim(animate));
        return me;
      },
      unmask: function () {
        var me = this,
          data = me.getData(),
          maskEl = data.maskEl,
          style;
        if (maskEl) {
          style = maskEl.dom.style;
          if (style.clearExpression) {
            style.clearExpression("width");
            style.clearExpression("height");
          }
          if (maskEl) {
            maskEl.destroy();
            delete data.maskEl;
          }
          me.removeCls([XMASKED, XMASKEDRELATIVE]);
        }
        me.restoreTabbableState(me.dom === DOC.body);
      },
      unclip: function () {
        var me = this,
          data = me.getData(),
          clip;
        if (data[ISCLIPPED]) {
          data[ISCLIPPED] = false;
          clip = data[ORIGINALCLIP];
          if (clip.o) {
            me.setStyle(OVERFLOW, clip.o);
          }
          if (clip.x) {
            me.setStyle(OVERFLOWX, clip.x);
          }
          if (clip.y) {
            me.setStyle(OVERFLOWY, clip.y);
          }
        }
        return me;
      },
      translate: function (x, y, z) {
        if (Ext.supports.CssTransforms && !Ext.isIE9m) {
          this.callParent(arguments);
        } else {
          if (x != null) {
            this.dom.style.left = x + "px";
          }
          if (y != null) {
            this.dom.style.top = y + "px";
          }
        }
      },
      unselectable: function () {
        var me = this;
        if (Ext.isOpera) {
          me.dom.unselectable = "on";
        }
        me.removeCls(Element.selectableCls);
        me.addCls(Element.unselectableCls);
        return me;
      },
      privates: {
        findTabbableElements: function (options) {
          var skipSelf,
            skipChildren,
            excludeRoot,
            includeSaved,
            includeHidden,
            dom = this.dom,
            cAttr = Ext.Element.tabbableSavedCounterAttribute,
            selection = [],
            idx = 0,
            nodes,
            node,
            fly,
            i,
            len,
            tabIndex;
          if (!dom) {
            return selection;
          }
          if (options) {
            skipSelf = options.skipSelf;
            skipChildren = options.skipChildren;
            excludeRoot = options.excludeRoot;
            includeSaved = options.includeSaved;
            includeHidden = options.includeHidden;
          }
          excludeRoot = excludeRoot && Ext.getDom(excludeRoot);
          if (excludeRoot && excludeRoot.contains(dom)) {
            return selection;
          }
          if (
            !skipSelf &&
            ((includeSaved && dom.hasAttribute(cAttr)) ||
              this.isTabbable(includeHidden))
          ) {
            selection[idx++] = dom;
          }
          if (skipChildren) {
            return selection;
          }
          nodes = dom.querySelectorAll(Ext.Element.tabbableSelector);
          len = nodes.length;
          if (!len) {
            return selection;
          }
          fly = new Ext.dom.Fly();
          for (i = 0; i < len; i++) {
            node = nodes[i];
            tabIndex = +node.getAttribute("tabIndex");
            if (
              ((includeSaved && node.hasAttribute(cAttr)) ||
                (!(tabIndex < 0) &&
                  fly.attach(node).isTabbable(includeHidden))) &&
              !(
                excludeRoot &&
                (excludeRoot === node || excludeRoot.contains(node))
              )
            ) {
              selection[idx++] = node;
            }
          }
          return selection;
        },
        saveTabbableState: function (options) {
          var counterAttr = Ext.Element.tabbableSavedCounterAttribute,
            savedAttr = Ext.Element.tabbableSavedValueAttribute,
            counter,
            nodes,
            node,
            i,
            len;
          if (!options || options.includeSaved == null) {
            options = Ext.Object.chain(options || null);
            options.includeSaved = true;
          }
          nodes = this.findTabbableElements(options);
          for (i = 0, len = nodes.length; i < len; i++) {
            node = nodes[i];
            counter = +node.getAttribute(counterAttr);
            if (counter > 0) {
              node.setAttribute(counterAttr, ++counter);
            } else {
              if (node.hasAttribute("tabIndex")) {
                node.setAttribute(savedAttr, node.getAttribute("tabIndex"));
              } else {
                node.setAttribute(savedAttr, "none");
              }
              node.setAttribute("tabIndex", "-1");
              node.setAttribute(counterAttr, "1");
            }
          }
          return nodes;
        },
        restoreTabbableState: function (skipSelf, skipChildren) {
          var dom = this.dom,
            counterAttr = Ext.Element.tabbableSavedCounterAttribute,
            savedAttr = Ext.Element.tabbableSavedValueAttribute,
            nodes = [],
            idx,
            counter,
            nodes,
            node,
            i,
            len;
          if (!dom) {
            return this;
          }
          if (!skipChildren) {
            nodes = Ext.Array.from(
              dom.querySelectorAll("[" + counterAttr + "]"),
            );
          }
          if (!skipSelf) {
            nodes.unshift(dom);
          }
          for (i = 0, len = nodes.length; i < len; i++) {
            node = nodes[i];
            if (
              !node.hasAttribute(counterAttr) ||
              !node.hasAttribute(savedAttr)
            ) {
              continue;
            }
            counter = +node.getAttribute(counterAttr);
            if (counter > 1) {
              node.setAttribute(counterAttr, --counter);
              continue;
            }
            idx = node.getAttribute(savedAttr);
            if (idx === "none") {
              node.removeAttribute("tabIndex");
            } else {
              node.setAttribute("tabIndex", idx);
            }
            node.removeAttribute(savedAttr);
            node.removeAttribute(counterAttr);
          }
          return nodes;
        },
      },
      deprecated: {
        "4.0": {
          methods: {
            pause: function (ms) {
              var me = this;
              Ext.fx.Manager.setFxDefaults(me.id, { delay: ms });
              return me;
            },
            scale: function (w, h, o) {
              this.animate(Ext.apply({}, o, { width: w, height: h }));
              return this;
            },
            shift: function (config) {
              this.animate(config);
              return this;
            },
          },
        },
        4.2: {
          methods: {
            moveTo: function (x, y, animate) {
              return this.setXY([x, y], animate);
            },
            setBounds: function (x, y, width, height, animate) {
              return this.setBox(
                { x: x, y: y, width: width, height: height },
                animate,
              );
            },
            setLeftTop: function (left, top) {
              var me = this,
                style = me.dom.style;
              style.left = Element.addUnits(left);
              style.top = Element.addUnits(top);
              if (me.shadow || me.shim) {
                me.syncUnderlays();
              }
              return me;
            },
            setLocation: function (x, y, animate) {
              return this.setXY([x, y], animate);
            },
          },
        },
        "5.0": {
          methods: {
            getAttributeNS: function (namespace, name) {
              return this.getAttribute(name, namespace);
            },
            getCenterXY: function () {
              return this.getAlignToXY(DOC, "c-c");
            },
            getComputedHeight: function () {
              return (
                Math.max(this.dom.offsetHeight, this.dom.clientHeight) ||
                parseFloat(this.getStyle(HEIGHT)) ||
                0
              );
            },
            getComputedWidth: function () {
              return (
                Math.max(this.dom.offsetWidth, this.dom.clientWidth) ||
                parseFloat(this.getStyle(WIDTH)) ||
                0
              );
            },
            getStyleSize: function () {
              var me = this,
                d = this.dom,
                isDoc = d === DOC || d === DOC.body,
                s,
                w,
                h;
              if (isDoc) {
                return {
                  width: Element.getViewportWidth(),
                  height: Element.getViewportHeight(),
                };
              }
              s = me.getStyle(["height", "width"], true);
              if (s.width && s.width !== "auto") {
                w = parseFloat(s.width);
              }
              if (s.height && s.height !== "auto") {
                h = parseFloat(s.height);
              }
              return {
                width: w || me.getWidth(true),
                height: h || me.getHeight(true),
              };
            },
            isBorderBox: function () {
              return true;
            },
            isDisplayed: function () {
              return !this.isStyle("display", "none");
            },
            focusable: "isFocusable",
          },
        },
      },
    };
  })(),
  function () {
    var p = Ext.dom.Element,
      o = p.prototype,
      v = !Ext.isIE8,
      b = document,
      l = b.defaultView,
      u = /alpha\(opacity=(.*)\)/i,
      g = /^\s+|\s+$/g,
      w = o.styleHooks,
      s = Ext.supports,
      e,
      n,
      d,
      r,
      f,
      x,
      c;
    o._init(p);
    delete o._init;
    Ext.plainTableCls = Ext.baseCSSPrefix + "table-plain";
    Ext.plainListCls = Ext.baseCSSPrefix + "list-plain";
    if (Ext.CompositeElementLite) {
      Ext.CompositeElementLite.importElementMethods();
    }
    if (!s.Opacity && Ext.isIE) {
      Ext.apply(w.opacity, {
        get: function (A) {
          var z = A.style.filter,
            y,
            k;
          if (z.match) {
            y = z.match(u);
            if (y) {
              k = parseFloat(y[1]);
              if (!isNaN(k)) {
                return k ? k / 100 : 0;
              }
            }
          }
          return 1;
        },
        set: function (A, y) {
          var k = A.style,
            z = k.filter.replace(u, "").replace(g, "");
          k.zoom = 1;
          if (typeof y === "number" && y >= 0 && y < 1) {
            y *= 100;
            k.filter = z + (z.length ? " " : "") + "alpha(opacity=" + y + ")";
          } else {
            k.filter = z;
          }
        },
      });
    }
    if (!s.matchesSelector) {
      var i = /^([a-z]+|\*)?(?:\.([a-z][a-z\-_0-9]*))?$/i,
        j = /\-/g,
        a,
        t = function (k, y) {
          var z = new RegExp("(?:^|\\s+)" + y.replace(j, "\\-") + "(?:\\s+|$)");
          if (k && k !== "*") {
            k = k.toUpperCase();
            return function (A) {
              return A.tagName === k && z.test(A.className);
            };
          }
          return function (A) {
            return z.test(A.className);
          };
        },
        q = function (k) {
          k = k.toUpperCase();
          return function (y) {
            return y.tagName === k;
          };
        },
        m = {};
      o.matcherCache = m;
      o.is = function (k) {
        if (!k) {
          return true;
        }
        var y = this.dom,
          E,
          A,
          D,
          C,
          B,
          z,
          F;
        if (y.nodeType !== 1) {
          return false;
        }
        if (!(D = Ext.isFunction(k) ? k : m[k])) {
          if (!(A = k.match(i))) {
            C = y.parentNode;
            if (!C) {
              B = true;
              C = a || (a = b.createDocumentFragment());
              a.appendChild(y);
            }
            z = Ext.Array.indexOf(Ext.fly(C, "_is").query(k), y) !== -1;
            if (B) {
              a.removeChild(y);
            }
            return z;
          }
          F = A[1];
          E = A[2];
          m[k] = D = E ? t(F, E) : q(F);
        }
        return D(y);
      };
    }
    if (!l || !l.getComputedStyle) {
      o.getStyle = function (L, G) {
        var H = this,
          C = H.dom,
          N = typeof L !== "string",
          z = L,
          I = z,
          F = 1,
          A = G,
          y = H.styleHooks,
          M,
          E,
          K,
          J,
          B,
          k,
          D;
        if (N) {
          K = {};
          z = I[0];
          D = 0;
          if (!(F = I.length)) {
            return K;
          }
        }
        if (!C || C.documentElement) {
          return K || "";
        }
        E = C.style;
        if (G) {
          k = E;
        } else {
          k = C.currentStyle;
          if (!k) {
            A = true;
            k = E;
          }
        }
        do {
          J = y[z];
          if (!J) {
            y[z] = J = { name: p.normalize(z) };
          }
          if (J.get) {
            B = J.get(C, H, A, k);
          } else {
            M = J.name;
            B = k[M];
          }
          if (!N) {
            return B;
          }
          K[z] = B;
          z = I[++D];
        } while (D < F);
        return K;
      };
    }
    if (Ext.isIE8) {
      c = function (A, y, z, k) {
        if (k[this.styleName] === "none") {
          return "0px";
        }
        return k[this.name];
      };
      d = ["Top", "Right", "Bottom", "Left"];
      r = d.length;
      while (r--) {
        f = d[r];
        x = "border" + f + "Width";
        w["border-" + f.toLowerCase() + "-width"] = w[x] = {
          name: x,
          styleName: "border" + f + "Style",
          get: c,
        };
      }
      var h = Ext.baseCSSPrefix + "sync-repaint";
      o.syncRepaint = function () {
        this.addCls(h);
        this.getWidth();
        this.removeCls(h);
      };
    }
    Ext.apply(Ext, {
      enableGarbageCollector: true,
      isBorderBox: true,
      useShims: false,
      getDetachedBody: function () {
        var k = Ext.detachedBodyEl;
        if (!k) {
          k = b.createElement("div");
          Ext.detachedBodyEl = k = new Ext.dom.Fly(k);
          k.isDetachedBody = true;
        }
        return k;
      },
      getElementById: function (z) {
        var y = b.getElementById(z),
          k;
        if (!y && (k = Ext.detachedBodyEl)) {
          y = k.dom.querySelector(Ext.makeIdSelector(z));
        }
        return y;
      },
      addBehaviors: function (B) {
        if (!Ext.isReady) {
          Ext.onInternalReady(function () {
            Ext.addBehaviors(B);
          });
        } else {
          var y = {},
            A,
            k,
            z;
          for (k in B) {
            if ((A = k.split("@"))[1]) {
              z = A[0];
              if (!y[z]) {
                y[z] = Ext.fly(document).select(z, true);
              }
              y[z].on(A[1], B[k]);
            }
          }
          y = null;
        }
      },
    });
    if (Ext.isIE9m) {
      Ext.getElementById = function (z) {
        var y = b.getElementById(z),
          k;
        if (!y && (k = Ext.detachedBodyEl)) {
          y = k.dom.all[z];
        }
        return y;
      };
      o.getById = function (C, k) {
        var B = this.dom,
          y = null,
          A,
          z;
        if (B) {
          z = (v && b.getElementById(C)) || B.all[C];
          if (z) {
            if (k) {
              y = z;
            } else {
              A = Ext.cache[C];
              if (A) {
                if (A.skipGarbageCollection || !Ext.isGarbage(A.dom)) {
                  y = A;
                } else {
                  Ext.raise(
                    "Stale Element with id '" +
                      z.id +
                      "' found in Element cache. Make sure to clean up Element instances using destroy()",
                  );
                  A.destroy();
                }
              }
              y = y || new Ext.Element(z);
            }
          }
        }
        return y;
      };
    } else {
      if (!b.querySelector) {
        Ext.getDetachedBody = Ext.getBody;
        Ext.getElementById = function (k) {
          return b.getElementById(k);
        };
        o.getById = function (z, k) {
          var y = b.getElementById(z);
          return k ? y : y ? Ext.get(y) : null;
        };
      }
    }
    if (Ext.isIE && !(Ext.isIE9p && b.documentMode >= 9)) {
      o.getAttribute = function (k, z) {
        var A = this.dom,
          y;
        if (z) {
          y = typeof A[z + ":" + k];
          if (y !== "undefined" && y !== "unknown") {
            return A[z + ":" + k] || null;
          }
          return null;
        }
        if (k === "for") {
          k = "htmlFor";
        }
        return A[k] || null;
      };
    }
    Ext.onInternalReady(
      function () {
        var A = /^(?:transparent|(?:rgba[(](?:\s*\d+\s*[,]){3}\s*0\s*[)]))$/i,
          y = [],
          F = o.setWidth,
          G = o.setHeight,
          K = o.setSize,
          L = /^\d+(?:\.\d*)?px$/i,
          E,
          C,
          k,
          J;
        if (s.FixedTableWidthBug) {
          w.width = {
            name: "width",
            set: function (R, Q, O) {
              var N = R.style,
                M = O._needsTableWidthFix,
                P = N.display;
              if (M) {
                N.display = "none";
              }
              N.width = Q;
              if (M) {
                R.scrollWidth;
                N.display = P;
              }
            },
          };
          o.setWidth = function (P, N) {
            var R = this,
              S = R.dom,
              O = S.style,
              M = R._needsTableWidthFix,
              Q = O.display;
            if (M && !N) {
              O.display = "none";
            }
            F.call(R, P, N);
            if (M && !N) {
              S.scrollWidth;
              O.display = Q;
            }
            return R;
          };
          o.setSize = function (Q, N, O) {
            var S = this,
              T = S.dom,
              P = T.style,
              M = S._needsTableWidthFix,
              R = P.display;
            if (M && !O) {
              P.display = "none";
            }
            K.call(S, Q, N, O);
            if (M && !O) {
              T.scrollWidth;
              P.display = R;
            }
            return S;
          };
        }
        if (Ext.isIE8) {
          w.height = {
            name: "height",
            set: function (R, Q, O) {
              var N = O.component,
                P,
                M;
              if (N && N._syncFrameHeight && O === N.el) {
                M = N.frameBody.dom.style;
                if (L.test(Q)) {
                  P = N.getFrameInfo();
                  if (P) {
                    M.height = parseInt(Q, 10) - P.height + "px";
                  }
                } else {
                  if (!Q || Q === "auto") {
                    M.height = "";
                  }
                }
              }
              R.style.height = Q;
            },
          };
          o.setHeight = function (M, O) {
            var P = this.component,
              Q,
              N;
            if (P && P._syncFrameHeight && this === P.el) {
              N = P.frameBody.dom.style;
              if (!M || M === "auto") {
                N.height = "";
              } else {
                Q = P.getFrameInfo();
                if (Q) {
                  N.height = M - Q.height + "px";
                }
              }
            }
            return G.call(this, M, O);
          };
          o.setSize = function (Q, M, O) {
            var P = this.component,
              R,
              N;
            if (P && P._syncFrameHeight && this === P.el) {
              N = P.frameBody.dom.style;
              if (!M || M === "auto") {
                N.height = "";
              } else {
                R = P.getFrameInfo();
                if (R) {
                  N.height = M - R.height + "px";
                }
              }
            }
            return K.call(this, Q, M, O);
          };
        }
        Ext.getDoc().on("selectstart", function (Q, R) {
          var P = p.selectableCls,
            O = p.unselectableCls,
            M = R && R.tagName;
          M = M && M.toLowerCase();
          if (M === "input" || M === "textarea") {
            return;
          }
          while (R && R.nodeType === 1 && R !== b.documentElement) {
            var N = Ext.fly(R);
            if (N.hasCls(P)) {
              return;
            }
            if (N.hasCls(O)) {
              Q.stopEvent();
              return;
            }
            R = R.parentNode;
          }
        });
        function D(Q, N, P, M) {
          var O = M[this.name] || "";
          return A.test(O) ? "transparent" : O;
        }
        function I(N, O, M) {
          return function () {
            N.selectionStart = O;
            N.selectionEnd = M;
          };
        }
        function H(Q) {
          var O = s.DisplayChangeInputSelectionBug,
            P = s.DisplayChangeTextAreaSelectionBug,
            R,
            M,
            S,
            N;
          if (O || P) {
            R = p.getActiveElement();
            M = R && R.tagName;
            if (
              (P && M === "TEXTAREA") ||
              (O && M === "INPUT" && R.type === "text")
            ) {
              if (Ext.fly(Q).isAncestor(R)) {
                S = R.selectionStart;
                N = R.selectionEnd;
                if (Ext.isNumber(S) && Ext.isNumber(N)) {
                  return I(R, S, N);
                }
              }
            }
          }
          return Ext.emptyFn;
        }
        function B(S, P, R, O) {
          var M = O.marginRight,
            N,
            Q;
          if (M !== "0px") {
            N = S.style;
            Q = N.display;
            N.display = "inline-block";
            M = (R ? O : S.ownerDocument.defaultView.getComputedStyle(S, null))
              .marginRight;
            N.display = Q;
          }
          return M;
        }
        function z(T, Q, S, P) {
          var M = P.marginRight,
            O,
            N,
            R;
          if (M !== "0px") {
            O = T.style;
            N = H(T);
            R = O.display;
            O.display = "inline-block";
            M = (S ? P : T.ownerDocument.defaultView.getComputedStyle(T, ""))
              .marginRight;
            O.display = R;
            N();
          }
          return M;
        }
        if (!s.RightMargin) {
          w.marginRight = w["margin-right"] = {
            name: "marginRight",
            get:
              s.DisplayChangeInputSelectionBug ||
              s.DisplayChangeTextAreaSelectionBug
                ? z
                : B,
          };
        }
        if (!s.TransparentColor) {
          E = ["background-color", "border-color", "color", "outline-color"];
          for (C = E.length; C--; ) {
            k = E[C];
            J = p.normalize(k);
            w[k] = w[J] = { name: J, get: D };
          }
        }
        o.verticalStyleHooks90 = e = Ext.Object.chain(w);
        o.verticalStyleHooks270 = n = Ext.Object.chain(w);
        e.width = w.height || { name: "height" };
        e.height = w.width || { name: "width" };
        e["margin-top"] = { name: "marginLeft" };
        e["margin-right"] = { name: "marginTop" };
        e["margin-bottom"] = { name: "marginRight" };
        e["margin-left"] = { name: "marginBottom" };
        e["padding-top"] = { name: "paddingLeft" };
        e["padding-right"] = { name: "paddingTop" };
        e["padding-bottom"] = { name: "paddingRight" };
        e["padding-left"] = { name: "paddingBottom" };
        e["border-top"] = { name: "borderLeft" };
        e["border-right"] = { name: "borderTop" };
        e["border-bottom"] = { name: "borderRight" };
        e["border-left"] = { name: "borderBottom" };
        n.width = w.height || { name: "height" };
        n.height = w.width || { name: "width" };
        n["margin-top"] = { name: "marginRight" };
        n["margin-right"] = { name: "marginBottom" };
        n["margin-bottom"] = { name: "marginLeft" };
        n["margin-left"] = { name: "marginTop" };
        n["padding-top"] = { name: "paddingRight" };
        n["padding-right"] = { name: "paddingBottom" };
        n["padding-bottom"] = { name: "paddingLeft" };
        n["padding-left"] = { name: "paddingTop" };
        n["border-top"] = { name: "borderRight" };
        n["border-right"] = { name: "borderBottom" };
        n["border-bottom"] = { name: "borderLeft" };
        n["border-left"] = { name: "borderTop" };
        if (!Ext.scopeCss) {
          y.push(Ext.baseCSSPrefix + "body");
        }
        if (s.Touch) {
          y.push(Ext.baseCSSPrefix + "touch");
        }
        if (Ext.isIE && Ext.isIE9m) {
          y.push(Ext.baseCSSPrefix + "ie", Ext.baseCSSPrefix + "ie9m");
          y.push(Ext.baseCSSPrefix + "ie8p");
          if (Ext.isIE8) {
            y.push(Ext.baseCSSPrefix + "ie8");
          } else {
            y.push(Ext.baseCSSPrefix + "ie9", Ext.baseCSSPrefix + "ie9p");
          }
          if (Ext.isIE8m) {
            y.push(Ext.baseCSSPrefix + "ie8m");
          }
        }
        if (Ext.isIE10) {
          y.push(Ext.baseCSSPrefix + "ie10");
        }
        if (Ext.isIE10p) {
          y.push(Ext.baseCSSPrefix + "ie10p");
        }
        if (Ext.isIE11) {
          y.push(Ext.baseCSSPrefix + "ie11");
        }
        if (Ext.isGecko) {
          y.push(Ext.baseCSSPrefix + "gecko");
        }
        if (Ext.isOpera) {
          y.push(Ext.baseCSSPrefix + "opera");
        }
        if (Ext.isOpera12m) {
          y.push(Ext.baseCSSPrefix + "opera12m");
        }
        if (Ext.isWebKit) {
          y.push(Ext.baseCSSPrefix + "webkit");
        }
        if (Ext.isSafari) {
          y.push(Ext.baseCSSPrefix + "safari");
        }
        if (Ext.isChrome) {
          y.push(Ext.baseCSSPrefix + "chrome");
        }
        if (Ext.isMac) {
          y.push(Ext.baseCSSPrefix + "mac");
        }
        if (Ext.isLinux) {
          y.push(Ext.baseCSSPrefix + "linux");
        }
        if (!s.CSS3BorderRadius) {
          y.push(Ext.baseCSSPrefix + "nbr");
        }
        if (!s.CSS3LinearGradient) {
          y.push(Ext.baseCSSPrefix + "nlg");
        }
        if (s.Touch) {
          y.push(Ext.baseCSSPrefix + "touch");
        }
        Ext.getBody().addCls(y);
      },
      null,
      { priority: 1500 },
    );
  },
);
Ext.define("Ext.overrides.GlobalEvents", {
  override: "Ext.GlobalEvents",
  deprecated: {
    5: {
      methods: {
        addListener: function (d, g, h, i, c, b, e) {
          var a, f;
          if (d === "ready") {
            f = g;
          } else {
            if (typeof d !== "string") {
              for (a in d) {
                if (a === "ready") {
                  f = d[a];
                }
              }
            }
          }
          if (f) {
            Ext.log.warn(
              "Ext.on('ready', fn) is deprecated.  Please use Ext.onReady(fn) instead.",
            );
            Ext.onReady(f);
          }
          this.callParent([d, g, h, i, c, b, e]);
        },
      },
    },
  },
});
Ext.define(
  "Ext.overrides.Widget",
  {
    override: "Ext.Widget",
    uses: ["Ext.Component"],
    $configStrict: false,
    isComponent: true,
    liquidLayout: true,
    rendered: true,
    rendering: true,
    config: { renderTo: null },
    cachedConfig: { baseCls: Ext.baseCSSPrefix + "widget" },
    constructor: function (a) {
      var b = this,
        c;
      b.callParent([a]);
      b.getComponentLayout();
      c = b.getRenderTo();
      if (c) {
        b.render(c);
      }
    },
    addClsWithUI: function (a) {
      this.el.addCls(a);
    },
    afterComponentLayout: Ext.emptyFn,
    updateLayout: function () {
      var a = this.getRefOwner();
      if (a) {
        a.updateLayout();
      }
    },
    destroy: function () {
      var b = this,
        a = b.ownerCt;
      if (a && a.remove) {
        a.remove(b, false);
      }
      b.callParent();
    },
    finishRender: function () {
      this.rendering = false;
      this.initBindable();
    },
    getAnimationProps: function () {
      return {};
    },
    getComponentLayout: function () {
      var b = this,
        a = b.componentLayout;
      if (!a) {
        a = b.componentLayout = new Ext.layout.component.Auto();
        a.setOwner(b);
      }
      return a;
    },
    getEl: function () {
      return this.element;
    },
    getTdCls: function () {
      return (
        Ext.baseCSSPrefix +
        this.getTdType() +
        "-" +
        (this.ui || "default") +
        "-cell"
      );
    },
    getTdType: function () {
      return this.xtype;
    },
    getItemId: function () {
      return this.itemId || this.id;
    },
    getSizeModel: function () {
      return Ext.Component.prototype.getSizeModel.apply(this, arguments);
    },
    onAdded: function (b, e, a) {
      var d = this,
        c = d.inheritedState;
      d.ownerCt = b;
      d.onInheritedAdd(d, a);
    },
    onRemoved: function (b) {
      var a = this;
      if (!b) {
        a.removeBindings();
      }
      a.onInheritedRemove(b);
      a.ownerCt = a.ownerLayout = null;
    },
    parseBox: function (a) {
      return Ext.Element.parseBox(a);
    },
    removeClsWithUI: function (a) {
      this.el.removeCls(a);
    },
    render: function (b, a) {
      var e = this,
        c = e.element,
        d = Ext.Component.prototype,
        f;
      if (!e.ownerCt || e.floating) {
        if (Ext.scopeCss) {
          c.addCls(d.rootCls);
        }
        c.addCls(d.borderBoxCls);
      }
      if (a) {
        f = b.childNodes[a];
        if (f) {
          Ext.fly(b).insertBefore(c, f);
          return;
        }
      }
      Ext.fly(b).appendChild(c);
    },
    setPosition: function (a, b) {
      this.el.setLocalXY(a, b);
    },
    up: function () {
      return Ext.Component.prototype.up.apply(this, arguments);
    },
    isAncestor: function () {
      return Ext.Component.prototype.isAncestor.apply(this, arguments);
    },
    onFocusEnter: function () {
      return Ext.Component.prototype.onFocusEnter.apply(this, arguments);
    },
    onFocusLeave: function () {
      return Ext.Component.prototype.onFocusLeave.apply(this, arguments);
    },
    isLayoutChild: function (b) {
      var a = this.ownerCt;
      return a ? a === b || a.isLayoutChild(b) : false;
    },
  },
  function (b) {
    var a = b.prototype;
    if (Ext.isIE9m) {
      a.addElementReferenceOnDemand = a.addElementReference;
    }
  },
);
Ext.define(
  "Ext.overrides.app.domain.Component",
  { override: "Ext.app.domain.Component", requires: ["Ext.Component"] },
  function (a) {
    a.monitor(Ext.Component);
  },
);
Ext.application = function (a) {
  var b = function (c) {
    Ext.onReady(function () {
      var d = Ext.viewport;
      d = d && d.Viewport;
      if (d && d.setup) {
        d.setup(c.prototype.config.viewport);
      }
      Ext.app.Application.instance = new c();
    });
  };
  if (typeof a === "string") {
    Ext.require(a, function () {
      b(Ext.ClassManager.get(a));
    });
  } else {
    a = Ext.apply({ extend: "Ext.app.Application" }, a);
    Ext.app.setupPaths(a.name, a.appFolder, a.paths);
    a["paths processed"] = true;
    Ext.define(a.name + ".$application", a, function () {
      b(this);
    });
  }
};
Ext.define("Ext.overrides.app.Application", {
  override: "Ext.app.Application",
  uses: ["Ext.tip.QuickTipManager"],
  autoCreateViewport: false,
  config: { enableQuickTips: true },
  applyMainView: function (e) {
    var b = this.getView(e),
      d = b.prototype,
      c,
      a;
    if (!d.isViewport) {
      a = d.plugins;
      a = ["viewport"].concat(a ? Ext.Array.from(a, true) : []);
      c = { plugins: a };
    }
    return b.create(c);
  },
  getDependencies: function (a, f, d) {
    var g = Ext.app.Controller,
      e = a.prototype,
      c = f.$namespace,
      b = f.autoCreateViewport;
    if (b) {
      if (!c) {
        Ext.raise(
          "[Ext.app.Application] Can't resolve namespace for " +
            f.$className +
            ", did you forget to specify 'name' property?",
        );
      }
      if (b === true) {
        b = "Viewport";
      } else {
        d.push("Ext.plugin.Viewport");
      }
      g.processDependencies(e, d, c, "view", b);
    }
  },
  onBeforeLaunch: function () {
    var b = this,
      a = b.autoCreateViewport;
    if (b.getEnableQuickTips()) {
      b.initQuickTips();
    }
    if (a) {
      b.initViewport();
    }
    this.callParent(arguments);
  },
  getViewportName: function () {
    var a = null,
      b = this.autoCreateViewport;
    if (b) {
      a = b === true ? "Viewport" : b;
    }
    return a;
  },
  initViewport: function () {
    this.setMainView(this.getViewportName());
  },
  initQuickTips: function () {
    Ext.tip.QuickTipManager.init();
  },
});
Ext.define(
  "Ext.overrides.dom.Helper",
  (function () {
    var c = /^(?:table|thead|tbody|tr|td)$/i,
      g = /td|tr|tbody|thead/i,
      f = "<table>",
      h = "</table>",
      b = f + "<tbody>",
      e = "</tbody>" + h,
      a = b + "<tr>",
      d = "</tr>" + e;
    return {
      override: "Ext.dom.Helper",
      ieInsertHtml: function (i, k, j) {
        var l = null;
        if (Ext.isIE9m && c.test(k.tagName)) {
          l = this.insertIntoTable(k.tagName.toLowerCase(), i, k, j);
        }
        return l;
      },
      ieOverwrite: function (j, i) {
        if (Ext.isIE9m && c.test(j.tagName)) {
          while (j.firstChild) {
            j.removeChild(j.firstChild);
          }
          if (i) {
            return this.insertHtml("afterbegin", j, i);
          }
        }
      },
      ieTable: function (p, k, q, o) {
        var l = -1,
          n = this.detachedDiv,
          m,
          j;
        n.innerHTML = [k, q, o].join("");
        while (++l < p) {
          n = n.firstChild;
        }
        m = n.nextSibling;
        if (m) {
          m = n;
          n = document.createDocumentFragment();
          while (m) {
            j = m.nextSibling;
            n.appendChild(m);
            m = j;
          }
        }
        return n;
      },
      insertIntoTable: function (r, k, j, l) {
        var i,
          o,
          n = k === "beforebegin",
          q = k === "afterbegin",
          m = k === "beforeend",
          p = k === "afterend";
        if ((r === "td" && (q || m)) || (!g.test(r) && (n || p))) {
          return null;
        }
        o = n ? j : p ? j.nextSibling : q ? j.firstChild : null;
        if (n || p) {
          j = j.parentNode;
        }
        if (r === "td" || (r === "tr" && (m || q))) {
          i = this.ieTable(4, a, l, d);
        } else {
          if (
            ((r === "tbody" || r === "thead") && (m || q)) ||
            (r === "tr" && (n || p))
          ) {
            i = this.ieTable(3, b, l, e);
          } else {
            i = this.ieTable(2, f, l, h);
          }
        }
        j.insertBefore(i, o);
        return i;
      },
    };
  })(),
);
Ext.define("Ext.overrides.list.TreeItem", {
  override: "Ext.list.TreeItem",
  createFloater: function () {
    var d = this,
      a = d.getOwner(),
      e = a.getUi(),
      b = Ext.baseCSSPrefix + "treelist",
      c;
    if (e) {
      b += " " + b + "-" + e;
    }
    d.floater = c = new Ext.container.Container({
      cls: b + " " + Ext.baseCSSPrefix + "treelist-floater",
      floating: true,
      width: 200,
      shadow: false,
      renderTo: Ext.getBody(),
      listeners: {
        element: "el",
        click: function (f) {
          return a.onClick(f);
        },
      },
    });
    c.add(d);
    c.el.alignTo(d.getToolElement(), "tr?");
    return c;
  },
  runAnimation: function (a) {
    return this.itemContainer.addAnimation(a);
  },
  stopAnimation: function (a) {
    a.jumpToEnd();
  },
});
Ext.define("Ext.overrides.plugin.Abstract", {
  override: "Ext.plugin.Abstract",
  $configStrict: false,
  $configPrefixed: false,
  disabled: false,
  getState: null,
  applyState: null,
  enable: function () {
    this.disabled = false;
  },
  disable: function () {
    this.disabled = true;
  },
});
