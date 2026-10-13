'use strict';
var TWEEN = TWEEN || function() {
    var a = [];
    return {
        REVISION: "7",
        getAll: function() {
            return a
        },
        removeAll: function() {
            a = []
        },
        add: function(c) {
            a.push(c)
        },
        remove: function(c) {
            c = a.indexOf(c);
            - 1 !== c && a.splice(c, 1)
        },
        update: function(c) {
            if (0 === a.length)
                return !1;
            for (var b = 0, d = a.length, c = void 0 !== c ? c : Date.now(); b < d;)
                a[b].update(c) ? b++ : (a.splice(b, 1), d--);
            return !0
        }
    }
}();
TWEEN.Tween = function(a) {
    var c = {}, b = {}, d = 1E3, e = 0, f = null, h = TWEEN.Easing.Linear.None, r = TWEEN.Interpolation.Linear, k = [], l = null, m=!1, n = null, p = null;
    this.to = function(a, c) {
        null !== c && (d = c);
        b = a;
        return this
    };
    this.start = function(d) {
        TWEEN.add(this);
        m=!1;
        f = void 0 !== d ? d : Date.now();
        f += e;
        for (var g in b)
            if (null !== a[g]) {
                if (b[g]instanceof Array) {
                    if (0 === b[g].length)
                        continue;
                        b[g] = [a[g]].concat(b[g])
                    }
                    c[g] = a[g]
            }
        return this
    };
    this.stop = function() {
        TWEEN.remove(this);
        return this
    };
    this.delay = function(a) {
        e = a;
        return this
    };
    this.easing =
    function(a) {
        h = a;
        return this
    };
    this.interpolation = function(a) {
        r = a;
        return this
    };
    this.chain = function() {
        k = arguments;
        return this
    };
    this.onStart = function(a) {
        l = a;
        return this
    };
    this.onUpdate = function(a) {
        n = a;
        return this
    };
    this.onComplete = function(a) {
        p = a;
        return this
    };
    this.update = function(e) {
        if (e < f)
            return !0;
        !1 === m && (null !== l && l.call(a), m=!0);
        var g = (e - f) / d, g = 1 < g ? 1: g, i = h(g), j;
        for (j in c) {
            var s = c[j], q = b[j];
            a[j] = q instanceof Array ? r(q, i) : s + (q - s) * i
        }
        null !== n && n.call(a, i);
        if (1 == g) {
            null !== p && p.call(a);
            g = 0;
            for (i = k.length; g <
            i; g++)
                k[g].start(e);
            return !1
        }
        return !0
    }
};
TWEEN.Easing = {
    Linear: {
        None: function(a) {
            return a
        }
    },
    Quadratic: {
        In: function(a) {
            return a * a
        },
        Out: function(a) {
            return a * (2 - a)
        },
        InOut: function(a) {
            return 1 > (a*=2) ? 0.5 * a * a : - 0.5 * (--a * (a - 2) - 1)
        }
    },
    Cubic: {
        In: function(a) {
            return a * a * a
        },
        Out: function(a) {
            return --a * a * a + 1
        },
        InOut: function(a) {
            return 1 > (a*=2) ? 0.5 * a * a * a : 0.5 * ((a -= 2) * a * a + 2)
        }
    },
    Quartic: {
        In: function(a) {
            return a * a * a * a
        },
        Out: function(a) {
            return 1 - --a * a * a * a
        },
        InOut: function(a) {
            return 1 > (a*=2) ? 0.5 * a * a * a * a : - 0.5 * ((a -= 2) * a * a * a - 2)
        }
    },
    Quintic: {
        In: function(a) {
            return a * a * a *
            a * a
        },
        Out: function(a) {
            return --a * a * a * a * a + 1
        },
        InOut: function(a) {
            return 1 > (a*=2) ? 0.5 * a * a * a * a * a : 0.5 * ((a -= 2) * a * a * a * a + 2)
        }
    },
    Sinusoidal: {
        In: function(a) {
            return 1 - Math.cos(a * Math.PI / 2)
        },
        Out: function(a) {
            return Math.sin(a * Math.PI / 2)
        },
        InOut: function(a) {
            return 0.5 * (1 - Math.cos(Math.PI * a))
        }
    },
    Exponential: {
        In: function(a) {
            return 0 === a ? 0 : Math.pow(1024, a - 1)
        },
        Out: function(a) {
            return 1 === a ? 1 : 1 - Math.pow(2, - 10 * a)
        },
        InOut: function(a) {
            return 0 === a ? 0 : 1 === a ? 1 : 1 > (a*=2) ? 0.5 * Math.pow(1024, a - 1) : 0.5 * ( - Math.pow(2, - 10 * (a - 1)) + 2)
        }
    },
    Circular: {
        In: function(a) {
            return 1 -
            Math.sqrt(1 - a * a)
        },
        Out: function(a) {
            return Math.sqrt(1 - --a * a)
        },
        InOut: function(a) {
            return 1 > (a*=2)?-0.5 * (Math.sqrt(1 - a * a) - 1) : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
        }
    },
    Elastic: {
        In: function(a) {
            var c, b = 0.1;
            if (0 === a)
                return 0;
            if (1 === a)
                return 1;
            !b || 1 > b ? (b = 1, c = 0.1) : c = 0.4 * Math.asin(1 / b) / (2 * Math.PI);
            return - (b * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - c) * 2 * Math.PI / 0.4))
        },
        Out: function(a) {
            var c, b = 0.1;
            if (0 === a)
                return 0;
            if (1 === a)
                return 1;
            !b || 1 > b ? (b = 1, c = 0.1) : c = 0.4 * Math.asin(1 / b) / (2 * Math.PI);
            return b * Math.pow(2, - 10 * a) * Math.sin((a - c) *
            2 * Math.PI / 0.4) + 1
        },
        InOut: function(a) {
            var c, b = 0.1;
            if (0 === a)
                return 0;
            if (1 === a)
                return 1;
            !b || 1 > b ? (b = 1, c = 0.1) : c = 0.4 * Math.asin(1 / b) / (2 * Math.PI);
            return 1 > (a*=2)?-0.5 * b * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - c) * 2 * Math.PI / 0.4) : 0.5 * b * Math.pow(2, - 10 * (a -= 1)) * Math.sin((a - c) * 2 * Math.PI / 0.4) + 1
        }
    },
    Back: {
        In: function(a) {
            return a * a * (2.70158 * a - 1.70158)
        },
        Out: function(a) {
            return --a * a * (2.70158 * a + 1.70158) + 1
        },
        InOut: function(a) {
            return 1 > (a*=2) ? 0.5 * a * a * (3.5949095 * a - 2.5949095) : 0.5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2)
        }
    },
    Bounce: {
        In: function(a) {
            return 1 -
            TWEEN.Easing.Bounce.Out(1 - a)
        },
        Out: function(a) {
            return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375 : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375
        },
        InOut: function(a) {
            return 0.5 > a ? 0.5 * TWEEN.Easing.Bounce.In(2 * a) : 0.5 * TWEEN.Easing.Bounce.Out(2 * a - 1) + 0.5
        }
    }
};
TWEEN.Interpolation = {
    Linear: function(a, c) {
        var b = a.length - 1, d = b * c, e = Math.floor(d), f = TWEEN.Interpolation.Utils.Linear;
        return 0 > c ? f(a[0], a[1], d) : 1 < c ? f(a[b], a[b - 1], b - d) : f(a[e], a[e + 1 > b ? b: e + 1], d - e)
    },
    Bezier: function(a, c) {
        var b = 0, d = a.length - 1, e = Math.pow, f = TWEEN.Interpolation.Utils.Bernstein, h;
        for (h = 0; h <= d; h++)
            b += e(1 - c, d - h) * e(c, h) * a[h] * f(d, h);
        return b
    },
    CatmullRom: function(a, c) {
        var b = a.length - 1, d = b * c, e = Math.floor(d), f = TWEEN.Interpolation.Utils.CatmullRom;
        return a[0] === a[b] ? (0 > c && (e = Math.floor(d = b * (1 + c))), f(a[(e -
        1 + b)%b], a[e], a[(e + 1)%b], a[(e + 2)%b], d - e)) : 0 > c ? a[0] - (f(a[0], a[0], a[1], a[1], - d) - a[0]) : 1 < c ? a[b] - (f(a[b], a[b], a[b - 1], a[b - 1], d - b) - a[b]) : f(a[e ? e - 1: 0], a[e], a[b < e + 1 ? b: e + 1], a[b < e + 2 ? b: e + 2], d - e)
    },
    Utils: {
        Linear: function(a, c, b) {
            return (c - a) * b + a
        },
        Bernstein: function(a, c) {
            var b = TWEEN.Interpolation.Utils.Factorial;
            return b(a) / b(c) / b(a - c)
        },
        Factorial: function() {
            var a = [1];
            return function(c) {
                var b = 1, d;
                if (a[c])
                    return a[c];
                for (d = c; 1 < d; d--)
                    b*=d;
                return a[c] = b
            }
        }(),
        CatmullRom: function(a, c, b, d, e) {
            var a = 0.5 * (b - a), d = 0.5 * (d - c), f =
            e * e;
            return (2 * c - 2 * b + a + d) * e * f + ( - 3 * c + 3 * b - 2 * a - d) * f + a * e + c
        }
    }
};


THREE.TrackballControls = function ( object, domElement ) {

	var _this = this;
	var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM: 4, TOUCH_PAN: 5 };

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	this.enabled = true;

	this.screen = { left: 0, top: 0, width: 0, height: 0 };

	this.rotateSpeed = 1.0;
	this.zoomSpeed = 1.2;
	this.panSpeed = 0.3;

	this.noRotate = false;
	this.noZoom = false;
	this.noPan = false;
	this.noRoll = false;

	this.staticMoving = false;
	this.dynamicDampingFactor = 0.2;

	this.minDistance = 0;
	this.maxDistance = Infinity;

	this.keys = [ 65, 83, 68 ];

	this.target = new THREE.Vector3();

	var EPS = 0.000001;

	var lastPosition = new THREE.Vector3();

	var _state = STATE.NONE,
	_prevState = STATE.NONE,

	_eye = new THREE.Vector3(),

	_rotateStart = new THREE.Vector3(),
	_rotateEnd = new THREE.Vector3(),

	_zoomStart = new THREE.Vector2(),
	_zoomEnd = new THREE.Vector2(),

	_touchZoomDistanceStart = 0,
	_touchZoomDistanceEnd = 0,

	_panStart = new THREE.Vector2(),
	_panEnd = new THREE.Vector2();

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.up0 = this.object.up.clone();

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start'};
	var endEvent = { type: 'end'};

	this.handleResize = function () {

		if ( this.domElement === document ) {

			this.screen.left = 0;
			this.screen.top = 0;
			this.screen.width = window.innerWidth;
			this.screen.height = window.innerHeight;

		} else {

			var box = this.domElement.getBoundingClientRect();
			var d = this.domElement.ownerDocument.documentElement;
			this.screen.left = box.left + window.pageXOffset - d.clientLeft;
			this.screen.top = box.top + window.pageYOffset - d.clientTop;
			this.screen.width = box.width;
			this.screen.height = box.height;

		}

	};

	this.handleEvent = function ( event ) {

		if ( typeof this[ event.type ] == 'function' ) {

			this[ event.type ]( event );

		}

	};

	this.getMouseOnScreen = function ( pageX, pageY, vector ) {

		return vector.set(
			( pageX - _this.screen.left ) / _this.screen.width,
			( pageY - _this.screen.top ) / _this.screen.height
		);

	};

	this.getMouseProjectionOnBall = (function(){

		var objectUp = new THREE.Vector3(),
		    mouseOnBall = new THREE.Vector3();


		return function ( pageX, pageY, projection ) {

			mouseOnBall.set(
				( pageX - _this.screen.width * 0.5 - _this.screen.left ) / (_this.screen.width*.5),
				( _this.screen.height * 0.5 + _this.screen.top - pageY ) / (_this.screen.height*.5),
				0.0
			);

			var length = mouseOnBall.length();

			if ( _this.noRoll ) {

				if ( length < Math.SQRT1_2 ) {

					mouseOnBall.z = Math.sqrt( 1.0 - length*length );

				} else {

					mouseOnBall.z = .5 / length;
					
				}

			} else if ( length > 1.0 ) {

				mouseOnBall.normalize();

			} else {

				mouseOnBall.z = Math.sqrt( 1.0 - length * length );

			}

			_eye.copy( _this.object.position ).sub( _this.target );

			projection.copy( _this.object.up ).setLength( mouseOnBall.y )
			projection.add( objectUp.copy( _this.object.up ).cross( _eye ).setLength( mouseOnBall.x ) );
			projection.add( _eye.setLength( mouseOnBall.z ) );

			return projection;
		}

	}());

	this.rotateCamera = (function(){

		var axis = new THREE.Vector3(),
			quaternion = new THREE.Quaternion();


		return function () {

			var angle = Math.acos( _rotateStart.dot( _rotateEnd ) / _rotateStart.length() / _rotateEnd.length() );

			if ( angle ) {

				axis.crossVectors( _rotateStart, _rotateEnd ).normalize();

				angle *= _this.rotateSpeed;

				quaternion.setFromAxisAngle( axis, -angle );

				_eye.applyQuaternion( quaternion );
				_this.object.up.applyQuaternion( quaternion );

				_rotateEnd.applyQuaternion( quaternion );

				if ( _this.staticMoving ) {

					_rotateStart.copy( _rotateEnd );

				} else {

					quaternion.setFromAxisAngle( axis, angle * ( _this.dynamicDampingFactor - 1.0 ) );
					_rotateStart.applyQuaternion( quaternion );

				}

			}
		}

	}());

	this.zoomCamera = function () {

		if ( _state === STATE.TOUCH_ZOOM ) {

			var factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
			_touchZoomDistanceStart = _touchZoomDistanceEnd;
			_eye.multiplyScalar( factor );

		} else {

			var factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * _this.zoomSpeed;

			if ( factor !== 1.0 && factor > 0.0 ) {

				_eye.multiplyScalar( factor );

				if ( _this.staticMoving ) {

					_zoomStart.copy( _zoomEnd );

				} else {

					_zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;

				}

			}

		}

	};

	this.panCamera = (function(){

		var mouseChange = new THREE.Vector2(),
			objectUp = new THREE.Vector3(),
			pan = new THREE.Vector3();

		return function () {

			mouseChange.copy( _panEnd ).sub( _panStart );

			if ( mouseChange.lengthSq() ) {

				mouseChange.multiplyScalar( _eye.length() * _this.panSpeed );

				pan.copy( _eye ).cross( _this.object.up ).setLength( mouseChange.x );
				pan.add( objectUp.copy( _this.object.up ).setLength( mouseChange.y ) );

				_this.object.position.add( pan );
				_this.target.add( pan );

				if ( _this.staticMoving ) {

					_panStart.copy( _panEnd );

				} else {

					_panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( _this.dynamicDampingFactor ) );

				}

			}
		}

	}());

	this.checkDistances = function () {

		if ( !_this.noZoom || !_this.noPan ) {

			if ( _eye.lengthSq() > _this.maxDistance * _this.maxDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.maxDistance ) );

			}

			if ( _eye.lengthSq() < _this.minDistance * _this.minDistance ) {

				_this.object.position.addVectors( _this.target, _eye.setLength( _this.minDistance ) );

			}

		}

	};

	this.update = function () {

		_eye.subVectors( _this.object.position, _this.target );

		if ( !_this.noRotate ) {

			_this.rotateCamera();

		}

		if ( !_this.noZoom ) {

			_this.zoomCamera();

		}

		if ( !_this.noPan ) {

			_this.panCamera();

		}

		_this.object.position.addVectors( _this.target, _eye );

		_this.checkDistances();

		_this.object.lookAt( _this.target );

		if ( lastPosition.distanceToSquared( _this.object.position ) > EPS ) {

			_this.dispatchEvent( changeEvent );

			lastPosition.copy( _this.object.position );

		}

	};

	this.reset = function () {

		_state = STATE.NONE;
		_prevState = STATE.NONE;

		_this.target.copy( _this.target0 );
		_this.object.position.copy( _this.position0 );
		_this.object.up.copy( _this.up0 );

		_eye.subVectors( _this.object.position, _this.target );

		_this.object.lookAt( _this.target );

		_this.dispatchEvent( changeEvent );

		lastPosition.copy( _this.object.position );

	};

	function keydown( event ) {

		if ( _this.enabled === false ) return;

		window.removeEventListener( 'keydown', keydown );

		_prevState = _state;

		if ( _state !== STATE.NONE ) {

			return;

		} else if ( event.keyCode === _this.keys[ STATE.ROTATE ] && !_this.noRotate ) {

			_state = STATE.ROTATE;

		} else if ( event.keyCode === _this.keys[ STATE.ZOOM ] && !_this.noZoom ) {

			_state = STATE.ZOOM;

		} else if ( event.keyCode === _this.keys[ STATE.PAN ] && !_this.noPan ) {

			_state = STATE.PAN;

		}

	}

	function keyup( event ) {

		if ( _this.enabled === false ) return;

		_state = _prevState;

		window.addEventListener( 'keydown', keydown, false );

	}

	function mousedown( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		if ( _state === STATE.NONE ) {

			_state = event.button;

		}

		if ( _state === STATE.ROTATE && !_this.noRotate ) {

			_this.getMouseProjectionOnBall( event.pageX, event.pageY, _rotateStart );
			_rotateEnd.copy(_rotateStart)

		} else if ( _state === STATE.ZOOM && !_this.noZoom ) {

			_this.getMouseOnScreen( event.pageX, event.pageY, _zoomStart );
			_zoomEnd.copy(_zoomStart);

		} else if ( _state === STATE.PAN && !_this.noPan ) {

			_this.getMouseOnScreen( event.pageX, event.pageY, _panStart );
			_panEnd.copy(_panStart)

		}

		document.addEventListener( 'mousemove', mousemove, false );
		document.addEventListener( 'mouseup', mouseup, false );
		_this.dispatchEvent( startEvent );


	}

	function mousemove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		if ( _state === STATE.ROTATE && !_this.noRotate ) {

			_this.getMouseProjectionOnBall( event.pageX, event.pageY, _rotateEnd );

		} else if ( _state === STATE.ZOOM && !_this.noZoom ) {

			_this.getMouseOnScreen( event.pageX, event.pageY, _zoomEnd );

		} else if ( _state === STATE.PAN && !_this.noPan ) {

			_this.getMouseOnScreen( event.pageX, event.pageY, _panEnd );

		}

	}

	function mouseup( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		_state = STATE.NONE;

		document.removeEventListener( 'mousemove', mousemove );
		document.removeEventListener( 'mouseup', mouseup );
		_this.dispatchEvent( endEvent );

	}

	function mousewheel( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		var delta = 0;

		if ( event.wheelDelta ) {

			delta = event.wheelDelta / 40;

		} else if ( event.detail ) {

			delta = - event.detail / 3;

		}

		_zoomStart.y += delta * 0.01;
		_this.dispatchEvent( startEvent );
		_this.dispatchEvent( endEvent );

	}

	function touchstart( event ) {

		if ( _this.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:
				_state = STATE.TOUCH_ROTATE;
				_rotateEnd.copy( _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateStart ));
				break;

			case 2:
				_state = STATE.TOUCH_ZOOM;
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );
				break;

			case 3:
				_state = STATE.TOUCH_PAN;
				_panEnd.copy( _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panStart ));
				break;

			default:
				_state = STATE.NONE;

		}
		_this.dispatchEvent( startEvent );


	}

	function touchmove( event ) {

		if ( _this.enabled === false ) return;

		event.preventDefault();
		event.stopPropagation();

		switch ( event.touches.length ) {

			case 1:
				_this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateEnd );
				break;

			case 2:
				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				_touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy )
				break;

			case 3:
				_this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panEnd );
				break;

			default:
				_state = STATE.NONE;

		}

	}

	function touchend( event ) {

		if ( _this.enabled === false ) return;

		switch ( event.touches.length ) {

			case 1:
				_rotateStart.copy( _this.getMouseProjectionOnBall( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _rotateEnd ));
				break;

			case 2:
				_touchZoomDistanceStart = _touchZoomDistanceEnd = 0;
				break;

			case 3:
				_panStart.copy( _this.getMouseOnScreen( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY, _panEnd ));
				break;

		}

		_state = STATE.NONE;
		_this.dispatchEvent( endEvent );

	}

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );

	this.domElement.addEventListener( 'mousedown', mousedown, false );

	this.domElement.addEventListener( 'mousewheel', mousewheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', mousewheel, false );

	this.domElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

	window.addEventListener( 'keydown', keydown, false );
	window.addEventListener( 'keyup', keyup, false );

	this.handleResize();

	this.update();

};

THREE.TrackballControls.prototype = Object.create( THREE.EventDispatcher.prototype );

THREE.CSS3DObject = function ( element ) {

	THREE.Object3D.call( this );

	this.element = element;
	this.element.style.position = 'absolute';

	this.addEventListener( 'removed', function ( event ) {

		if ( this.element.parentNode !== null ) {

			this.element.parentNode.removeChild( this.element );

			for ( var i = 0, l = this.children.length; i < l; i ++ ) {

				this.children[ i ].dispatchEvent( event );

			}

		}

	} );

};

THREE.CSS3DObject.prototype = Object.create( THREE.Object3D.prototype );

THREE.CSS3DSprite = function ( element ) {

	THREE.CSS3DObject.call( this, element );

};

THREE.CSS3DSprite.prototype = Object.create( THREE.CSS3DObject.prototype );

THREE.CSS3DRenderer = function () {

	var _width, _height;
	var _widthHalf, _heightHalf;

	var matrix = new THREE.Matrix4();

	var domElement = document.createElement( 'div' );
	domElement.style.overflow = 'hidden';

	domElement.style.WebkitTransformStyle = 'preserve-3d';
	domElement.style.MozTransformStyle = 'preserve-3d';
	domElement.style.oTransformStyle = 'preserve-3d';
	domElement.style.transformStyle = 'preserve-3d';

	this.domElement = domElement;

	var cameraElement = document.createElement( 'div' );

	cameraElement.style.WebkitTransformStyle = 'preserve-3d';
	cameraElement.style.MozTransformStyle = 'preserve-3d';
	cameraElement.style.oTransformStyle = 'preserve-3d';
	cameraElement.style.transformStyle = 'preserve-3d';

	domElement.appendChild( cameraElement );

	this.setClearColor = function () {};

	this.setSize = function ( width, height ) {

		_width = width;
		_height = height;

		_widthHalf = _width / 2;
		_heightHalf = _height / 2;

		domElement.style.width = width + 'px';
		domElement.style.height = height + 'px';

		cameraElement.style.width = width + 'px';
		cameraElement.style.height = height + 'px';

	};

	var epsilon = function ( value ) {

		return Math.abs( value ) < 0.000001 ? 0 : value;

	};

	var getCameraCSSMatrix = function ( matrix ) {

		var elements = matrix.elements;

		return 'matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( - elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( elements[ 6 ] ) + ',' +
			epsilon( elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( - elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( - elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';

	};

	var getObjectCSSMatrix = function ( matrix ) {

		var elements = matrix.elements;

		return 'translate3d(-50%,-50%,0) matrix3d(' +
			epsilon( elements[ 0 ] ) + ',' +
			epsilon( elements[ 1 ] ) + ',' +
			epsilon( elements[ 2 ] ) + ',' +
			epsilon( elements[ 3 ] ) + ',' +
			epsilon( - elements[ 4 ] ) + ',' +
			epsilon( - elements[ 5 ] ) + ',' +
			epsilon( - elements[ 6 ] ) + ',' +
			epsilon( - elements[ 7 ] ) + ',' +
			epsilon( elements[ 8 ] ) + ',' +
			epsilon( elements[ 9 ] ) + ',' +
			epsilon( elements[ 10 ] ) + ',' +
			epsilon( elements[ 11 ] ) + ',' +
			epsilon( elements[ 12 ] ) + ',' +
			epsilon( elements[ 13 ] ) + ',' +
			epsilon( elements[ 14 ] ) + ',' +
			epsilon( elements[ 15 ] ) +
		')';

	};

	var renderObject = function ( object, camera ) {

		if ( object instanceof THREE.CSS3DObject ) {

			var style;

			if ( object instanceof THREE.CSS3DSprite ) {

				matrix.copy( camera.matrixWorldInverse );
				matrix.transpose();
				matrix.copyPosition( object.matrixWorld );
				matrix.scale( object.scale );

				matrix.elements[ 3 ] = 0;
				matrix.elements[ 7 ] = 0;
				matrix.elements[ 11 ] = 0;
				matrix.elements[ 15 ] = 1;

				style = getObjectCSSMatrix( matrix );

			} else {

				style = getObjectCSSMatrix( object.matrixWorld );

			}

			var element = object.element;

			element.style.WebkitTransform = style;
			element.style.MozTransform = style;
			element.style.oTransform = style;
			element.style.transform = style;

			if ( element.parentNode !== cameraElement ) {

				cameraElement.appendChild( element );

			}

		}

		for ( var i = 0, l = object.children.length; i < l; i ++ ) {

			renderObject( object.children[ i ], camera );

		}

	};

	this.render = function ( scene, camera ) {

		var fov = 0.5 / Math.tan( THREE.Math.degToRad( camera.fov * 0.5 ) ) * _height;

		domElement.style.WebkitPerspective = fov + "px";
		domElement.style.MozPerspective = fov + "px";
		domElement.style.oPerspective = fov + "px";
		domElement.style.perspective = fov + "px";

		scene.updateMatrixWorld();

		if ( camera.parent === undefined ) camera.updateMatrixWorld();

		camera.matrixWorldInverse.getInverse( camera.matrixWorld );

		var style = "translate3d(0,0," + fov + "px)" + getCameraCSSMatrix( camera.matrixWorldInverse ) +
			" translate3d(" + _widthHalf + "px," + _heightHalf + "px, 0)";

		cameraElement.style.WebkitTransform = style;
		cameraElement.style.MozTransform = style;
		cameraElement.style.oTransform = style;
		cameraElement.style.transform = style;

		renderObject( scene, camera );

	};

};


var table = [
	"H", "Hydrogen", "1.008", 1, 1,
	"He", "Helium", "4.0026", 18, 1,
	"Li", "Lithium", "6.94", 1, 2,
	"Be", "Beryllium", "9.0122", 2, 2,
	"B", "Boron", "10.81", 13, 2,
	"C", "Carbon", "12.011", 14, 2,
	"N", "Nitrogen", "14.007", 15, 2,
	"O", "Oxygen", "15.999", 16, 2,
	"F", "Fluorine", "18.998", 17, 2,
	"Ne", "Neon", "20.180", 18, 2,
	"Na", "Sodium", "22.990", 1, 3,
	"Mg", "Magnesium", "24.305", 2, 3,
	"Al", "Aluminium", "26.982", 13, 3,
	"Si", "Silicon", "28.085", 14, 3,
	"P", "Phosphorus", "30.974", 15, 3,
	"S", "Sulfur", "32.06", 16, 3,
	"Cl", "Chlorine", "35.45", 17, 3,
	"Ar", "Argon", "39.948", 18, 3,
	"K", "Potassium", "39.098", 1, 4,
	"Ca", "Calcium", "40.078", 2, 4,
	"Sc", "Scandium", "44.956", 3, 4,
	"Ti", "Titanium", "47.867", 4, 4,
	"V", "Vanadium", "50.942", 5, 4,
	"Cr", "Chromium", "51.996", 6, 4,
	"Mn", "Manganese", "54.938", 7, 4,
	"Fe", "Iron", "55.845", 8, 4,
	"Co", "Cobalt", "58.933", 9, 4,
	"Ni", "Nickel", "58.693", 10, 4,
	"Cu", "Copper", "63.546", 11, 4,
	"Zn", "Zinc", "65.38", 12, 4,
	"Ga", "Gallium", "69.723", 13, 4,
	"Ge", "Germanium", "72.630", 14, 4,
	"As", "Arsenic", "74.922", 15, 4,
	"Se", "Selenium", "78.971", 16, 4,
	"Br", "Bromine", "79.904", 17, 4,
	"Kr", "Krypton", "83.798", 18, 4,
	"Rb", "Rubidium", "85.468", 1, 5,
	"Sr", "Strontium", "87.62", 2, 5,
	"Y", "Yttrium", "88.906", 3, 5,
	"Zr", "Zirconium", "91.224", 4, 5,
	"Nb", "Niobium", "92.906", 5, 5,
	"Mo", "Molybdenum", "95.95", 6, 5,
	"Tc", "Technetium", "(98)", 7, 5,
	"Ru", "Ruthenium", "101.07", 8, 5,
	"Rh", "Rhodium", "102.91", 9, 5,
	"Pd", "Palladium", "106.42", 10, 5,
	"Ag", "Silver", "107.87", 11, 5,
	"Cd", "Cadmium", "112.41", 12, 5,
	"In", "Indium", "114.82", 13, 5,
	"Sn", "Tin", "118.71", 14, 5,
	"Sb", "Antimony", "121.76", 15, 5,
	"Te", "Tellurium", "127.60", 16, 5,
	"I", "Iodine", "126.90", 17, 5,
	"Xe", "Xenon", "131.29", 18, 5,
	"Cs", "Caesium", "132.91", 1, 6,
	"Ba", "Barium", "137.33", 2, 6,
	"La", "Lanthanum", "138.91", 4, 9,
	"Ce", "Cerium", "140.12", 5, 9,
	"Pr", "Praseodymium", "140.91", 6, 9,
	"Nd", "Neodymium", "144.24", 7, 9,
	"Pm", "Promethium", "(145)", 8, 9,
	"Sm", "Samarium", "150.36", 9, 9,
	"Eu", "Europium", "151.96", 10, 9,
	"Gd", "Gadolinium", "157.25", 11, 9,
	"Tb", "Terbium", "158.93", 12, 9,
	"Dy", "Dysprosium", "162.50", 13, 9,
	"Ho", "Holmium", "164.93", 14, 9,
	"Er", "Erbium", "167.26", 15, 9,
	"Tm", "Thulium", "168.93", 16, 9,
	"Yb", "Ytterbium", "173.05", 17, 9,
	"Lu", "Lutetium", "174.97", 18, 9,
	"Hf", "Hafnium", "178.49", 4, 6,
	"Ta", "Tantalum", "180.95", 5, 6,
	"W", "Tungsten", "183.84", 6, 6,
	"Re", "Rhenium", "186.21", 7, 6,
	"Os", "Osmium", "190.23", 8, 6,
	"Ir", "Iridium", "192.22", 9, 6,
	"Pt", "Platinum", "195.08", 10, 6,
	"Au", "Gold", "196.97", 11, 6,
	"Hg", "Mercury", "200.59", 12, 6,
	"Tl", "Thallium", "204.38", 13, 6,
	"Pb", "Lead", "207.2", 14, 6,
	"Bi", "Bismuth", "208.98", 15, 6,
	"Po", "Polonium", "(209)", 16, 6,
	"At", "Astatine", "(210)", 17, 6,
	"Rn", "Radon", "(222)", 18, 6,
	"Fr", "Francium", "(223)", 1, 7,
	"Ra", "Radium", "(226)", 2, 7,
	"Ac", "Actinium", "(227)", 4, 10,
	"Th", "Thorium", "232.04", 5, 10,
	"Pa", "Protactinium", "231.04", 6, 10,
	"U", "Uranium", "238.03", 7, 10,
	"Np", "Neptunium", "(237)", 8, 10,
	"Pu", "Plutonium", "(244)", 9, 10,
	"Am", "Americium", "(243)", 10, 10,
	"Cm", "Curium", "(247)", 11, 10,
	"Bk", "Berkelium", "(247)", 12, 10,
	"Cf", "Californium", "(251)", 13, 10,
	"Es", "Einstenium", "(252)", 14, 10,
	"Fm", "Fermium", "(257)", 15, 10,
	"Md", "Mendelevium", "(258)", 16, 10,
	"No", "Nobelium", "(259)", 17, 10,
	"Lr", "Lawrencium", "(262)", 18, 10,
	"Rf", "Rutherfordium", "(267)", 4, 7,
	"Db", "Dubnium", "(268)", 5, 7,
	"Sg", "Seaborgium", "(271)", 6, 7,
	"Bh", "Bohrium", "(272)", 7, 7,
	"Hs", "Hassium", "(270)", 8, 7,
	"Mt", "Meitnerium", "(276)", 9, 7,
	"Ds", "Darmstadium", "(281)", 10, 7,
	"Rg", "Roentgenium", "(280)", 11, 7,
	"Cn", "Copernicium", "(285)", 12, 7,
	"Uut", "Ununtrium", "(284)", 13, 7,
	"Fl", "Flerovium", "(289)", 14, 7,
	"Uup", "Ununpentium", "(288)", 15, 7,
	"Lv", "Livermorium", "(293)", 16, 7,
	"Uus", "Ununseptium", "(294)", 17, 7,
	"Uuo", "Ununoctium", "(294)", 18, 7
];

var nameVi = {
	"Hydrogen":"Hydro","Helium":"Heli","Lithium":"Liti","Beryllium":"Beri","Boron":"Bo","Carbon":"Cacbon",
	"Nitrogen":"Nitơ","Oxygen":"Oxy","Fluorine":"Flo","Neon":"Neon","Sodium":"Natri","Magnesium":"Magie",
	"Aluminium":"Nhôm","Silicon":"Silic","Phosphorus":"Photpho","Sulfur":"Lưu huỳnh","Chlorine":"Clo","Argon":"Argon",
	"Potassium":"Kali","Calcium":"Canxi","Scandium":"Scandi","Titanium":"Titan","Vanadium":"Vanadi","Chromium":"Crom",
	"Manganese":"Mangan","Iron":"Sắt","Cobalt":"Coban","Nickel":"Niken","Copper":"Đồng","Zinc":"Kẽm",
	"Gallium":"Gali","Germanium":"Germani","Arsenic":"Asen","Selenium":"Selen","Bromine":"Brom","Krypton":"Kripton",
	"Rubidium":"Rubidi","Strontium":"Stronti","Yttrium":"Ytri","Zirconium":"Zirconi","Niobium":"Niobi","Molybdenum":"Molypden",
	"Technetium":"Techneti","Ruthenium":"Rutheni","Rhodium":"Rhodi","Palladium":"Paladi","Silver":"Bạc","Cadmium":"Cadimi",
	"Indium":"Indi","Tin":"Thiếc","Antimony":"Antimon","Tellurium":"Telua","Iodine":"Iot","Xenon":"Xenon",
	"Caesium":"Xesi","Barium":"Bari","Lanthanum":"Lantan","Cerium":"Xeri","Praseodymium":"Praseodym","Neodymium":"Neodym",
	"Promethium":"Promethi","Samarium":"Samari","Europium":"Europi","Gadolinium":"Gadolini","Terbium":"Terbi","Dysprosium":"Dysprosi",
	"Holmium":"Holmi","Erbium":"Erbi","Thulium":"Thuli","Ytterbium":"Ytterbi","Lutetium":"Luteti","Hafnium":"Hafni",
	"Tantalum":"Tantan","Tungsten":"Vonfram","Rhenium":"Rheni","Osmium":"Osmi","Iridium":"Iridi","Platinum":"Bạch kim",
	"Gold":"Vàng","Mercury":"Thủy ngân","Thallium":"Tali","Lead":"Chì","Bismuth":"Bitmut","Polonium":"Poloni",
	"Astatine":"Astatin","Radon":"Radon","Francium":"Franxi","Radium":"Rađi","Actinium":"Actini","Thorium":"Thori",
	"Protactinium":"Protactini","Uranium":"Urani","Neptunium":"Neptuni","Plutonium":"Plutoni","Americium":"Americi",
	"Curium":"Curi","Berkelium":"Berkeli","Californium":"Californi","Einstenium":"Einsteini","Fermium":"Fermi",
	"Mendelevium":"Mendelevi","Nobelium":"Nobeli","Lawrencium":"Lawrenci","Rutherfordium":"Rutherfordi","Dubnium":"Dubni",
	"Seaborgium":"Seaborgi","Bohrium":"Bohri","Hassium":"Hassi","Meitnerium":"Meitneri","Darmstadium":"Darmstadti",
	"Roentgenium":"Roentgeni","Copernicium":"Copernici","Ununtrium":"Ununtri","Flerovium":"Flerovi",
	"Ununpentium":"Ununpenti","Livermorium":"Livermori","Ununseptium":"Ununsepti","Ununoctium":"Ununocti"
};

var categoryColors = {
	"kim loại kiềm": "#e8556d",
	"kim loại kiềm thổ": "#f2994a",
	"kim loại chuyển tiếp": "#f2c94c",
	"kim loại yếu": "#6fcf97",
	"á kim": "#27ae60",
	"phi kim": "#56ccf2",
	"halogen": "#eb5757",
	"khí hiếm": "#9b51e0",
	"lantan": "#bb6bd9",
	"actini": "#a8324a",
	"không rõ": "#6c7a89"
};

var categoryNames = {
	"kim loại kiềm": "KIM LOẠI KIỀM",
	"kim loại kiềm thổ": "KIM LOẠI KIỀM THỔ",
	"kim loại chuyển tiếp": "KIM LOẠI CHUYỂN TIẾP",
	"kim loại yếu": "KIM LOẠI YẾU",
	"á kim": "Á KIM",
	"phi kim": "PHI KIM",
	"halogen": "HALOGEN",
	"khí hiếm": "KHÍ HIẾM",
	"lantan": "HỌ LANTAN",
	"actini": "HỌ ACTINI",
	"không rõ": "CHƯA RÕ TÍNH CHẤT"
};

var elementCategories = [
	"phi kim", "khí hiếm",
	"kim loại kiềm", "kim loại kiềm thổ",
	"á kim", "phi kim", "phi kim", "phi kim", "halogen", "khí hiếm",
	"kim loại kiềm", "kim loại kiềm thổ",
	"kim loại yếu", "á kim", "phi kim", "phi kim", "halogen", "khí hiếm",
	"kim loại kiềm", "kim loại kiềm thổ",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại yếu", "á kim", "á kim", "phi kim", "phi kim", "halogen", "khí hiếm",
	"kim loại kiềm", "kim loại kiềm thổ",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại yếu", "kim loại yếu", "kim loại yếu", "á kim", "á kim", "halogen", "khí hiếm",
	"kim loại kiềm", "kim loại kiềm thổ",
	"lantan", "lantan", "lantan", "lantan", "lantan", "lantan", "lantan",
	"lantan", "lantan", "lantan", "lantan", "lantan", "lantan", "lantan",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại yếu", "kim loại yếu", "kim loại yếu", "kim loại yếu",
	"á kim", "halogen", "khí hiếm",
	"kim loại kiềm", "kim loại kiềm thổ",
	"actini", "actini", "actini", "actini", "actini", "actini", "actini",
	"actini", "actini", "actini", "actini", "actini", "actini", "actini",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại yếu", "kim loại yếu", "kim loại yếu", "kim loại yếu",
	"kim loại yếu", "kim loại yếu", "không rõ"
];

var groupRoman = {
	1: "IA", 2: "IIA", 3: "IIIB", 4: "IVB", 5: "VB", 6: "VIB", 7: "VIIB",
	8: "VIIIB", 9: "VIIIB", 10: "VIIIB", 11: "IB", 12: "IIB",
	13: "IIIA", 14: "IVA", 15: "VA", 16: "VIA", 17: "VIIA", 18: "VIIIA"
};

var elementExtra = {
	"H":   { melt: "-259.16 °C", boil: "-252.87 °C", val: "-1, +1", en: "2.20", config: "1s¹", radius: "53 pm", ie: "1312 kJ/mol" },
	"He":  { melt: "-272.20 °C", boil: "-268.93 °C", val: "0", en: "—", config: "1s²", radius: "31 pm", ie: "2372 kJ/mol" },
	"Li":  { melt: "180.54 °C", boil: "1342 °C", val: "+1", en: "0.98", config: "[He] 2s¹", radius: "152 pm", ie: "520 kJ/mol" },
	"Be":  { melt: "1287 °C", boil: "2469 °C", val: "+2", en: "1.57", config: "[He] 2s²", radius: "112 pm", ie: "899 kJ/mol" },
	"B":   { melt: "2076 °C", boil: "3927 °C", val: "+3", en: "2.04", config: "[He] 2s² 2p¹", radius: "87 pm", ie: "801 kJ/mol" },
	"C":   { melt: "3550 °C", boil: "4027 °C", val: "-4, +2, +4", en: "2.55", config: "[He] 2s² 2p²", radius: "67 pm", ie: "1086 kJ/mol" },
	"N":   { melt: "-210.0 °C", boil: "-195.79 °C", val: "-3, +3, +5", en: "3.04", config: "[He] 2s² 2p³", radius: "56 pm", ie: "1402 kJ/mol" },
	"O":   { melt: "-218.79 °C", boil: "-182.96 °C", val: "-2", en: "3.44", config: "[He] 2s² 2p⁴", radius: "48 pm", ie: "1314 kJ/mol" },
	"F":   { melt: "-219.67 °C", boil: "-188.11 °C", val: "-1", en: "3.98", config: "[He] 2s² 2p⁵", radius: "42 pm", ie: "1681 kJ/mol" },
	"Ne":  { melt: "-248.59 °C", boil: "-246.08 °C", val: "0", en: "—", config: "[He] 2s² 2p⁶", radius: "38 pm", ie: "2081 kJ/mol" },
	"Na":  { melt: "97.79 °C", boil: "883 °C", val: "+1", en: "0.93", config: "[Ne] 3s¹", radius: "186 pm", ie: "496 kJ/mol" },
	"Mg":  { melt: "650 °C", boil: "1090 °C", val: "+2", en: "1.31", config: "[Ne] 3s²", radius: "160 pm", ie: "738 kJ/mol" },
	"Al":  { melt: "660.32 °C", boil: "2519 °C", val: "+3", en: "1.61", config: "[Ne] 3s² 3p¹", radius: "143 pm", ie: "578 kJ/mol" },
	"Si":  { melt: "1414 °C", boil: "3265 °C", val: "-4, +4", en: "1.90", config: "[Ne] 3s² 3p²", radius: "117 pm", ie: "786 kJ/mol" },
	"P":   { melt: "44.15 °C", boil: "280.5 °C", val: "-3, +3, +5", en: "2.19", config: "[Ne] 3s² 3p³", radius: "110 pm", ie: "1012 kJ/mol" },
	"S":   { melt: "115.21 °C", boil: "444.60 °C", val: "-2, +4, +6", en: "2.58", config: "[Ne] 3s² 3p⁴", radius: "104 pm", ie: "1000 kJ/mol" },
	"Cl":  { melt: "-101.5 °C", boil: "-34.04 °C", val: "-1, +1, +3, +5, +7", en: "3.16", config: "[Ne] 3s² 3p⁵", radius: "99 pm", ie: "1251 kJ/mol" },
	"Ar":  { melt: "-189.34 °C", boil: "-185.85 °C", val: "0", en: "—", config: "[Ne] 3s² 3p⁶", radius: "71 pm", ie: "1521 kJ/mol" },
	"K":   { melt: "63.38 °C", boil: "759 °C", val: "+1", en: "0.82", config: "[Ar] 4s¹", radius: "227 pm", ie: "419 kJ/mol" },
	"Ca":  { melt: "842 °C", boil: "1484 °C", val: "+2", en: "1.00", config: "[Ar] 4s²", radius: "197 pm", ie: "590 kJ/mol" },
	"Sc":  { melt: "1541 °C", boil: "2830 °C", val: "+3", en: "1.36", config: "[Ar] 3d¹ 4s²", radius: "162 pm", ie: "633 kJ/mol" },
	"Ti":  { melt: "1668 °C", boil: "3287 °C", val: "+2, +3, +4", en: "1.54", config: "[Ar] 3d² 4s²", radius: "147 pm", ie: "659 kJ/mol" },
	"V":   { melt: "1910 °C", boil: "3407 °C", val: "+2, +3, +4, +5", en: "1.63", config: "[Ar] 3d³ 4s²", radius: "134 pm", ie: "651 kJ/mol" },
	"Cr":  { melt: "1907 °C", boil: "2671 °C", val: "+2, +3, +6", en: "1.66", config: "[Ar] 3d⁵ 4s¹", radius: "128 pm", ie: "653 kJ/mol" },
	"Mn":  { melt: "1246 °C", boil: "2061 °C", val: "+2, +4, +7", en: "1.55", config: "[Ar] 3d⁵ 4s²", radius: "127 pm", ie: "717 kJ/mol" },
	"Fe":  { melt: "1538 °C", boil: "2861 °C", val: "+2, +3", en: "1.83", config: "[Ar] 3d⁶ 4s²", radius: "126 pm", ie: "762 kJ/mol" },
	"Co":  { melt: "1495 °C", boil: "2927 °C", val: "+2, +3", en: "1.88", config: "[Ar] 3d⁷ 4s²", radius: "125 pm", ie: "760 kJ/mol" },
	"Ni":  { melt: "1455 °C", boil: "2913 °C", val: "+2, +3", en: "1.91", config: "[Ar] 3d⁸ 4s²", radius: "124 pm", ie: "737 kJ/mol" },
	"Cu":  { melt: "1084.62 °C", boil: "2562 °C", val: "+1, +2", en: "1.90", config: "[Ar] 3d¹⁰ 4s¹", radius: "128 pm", ie: "745 kJ/mol" },
	"Zn":  { melt: "419.53 °C", boil: "907 °C", val: "+2", en: "1.65", config: "[Ar] 3d¹⁰ 4s²", radius: "134 pm", ie: "906 kJ/mol" },
	"Ga":  { melt: "29.76 °C", boil: "2204 °C", val: "+3", en: "1.81", config: "[Ar] 3d¹⁰ 4s² 4p¹", radius: "135 pm", ie: "579 kJ/mol" },
	"Ge":  { melt: "938.25 °C", boil: "2833 °C", val: "-4, +2, +4", en: "2.01", config: "[Ar] 3d¹⁰ 4s² 4p²", radius: "122 pm", ie: "762 kJ/mol" },
	"As":  { melt: "817 °C", boil: "614 °C", val: "-3, +3, +5", en: "2.18", config: "[Ar] 3d¹⁰ 4s² 4p³", radius: "120 pm", ie: "947 kJ/mol" },
	"Se":  { melt: "221 °C", boil: "685 °C", val: "-2, +4, +6", en: "2.55", config: "[Ar] 3d¹⁰ 4s² 4p⁴", radius: "119 pm", ie: "941 kJ/mol" },
	"Br":  { melt: "-7.2 °C", boil: "58.8 °C", val: "-1, +1, +5, +7", en: "2.96", config: "[Ar] 3d¹⁰ 4s² 4p⁵", radius: "114 pm", ie: "1140 kJ/mol" },
	"Kr":  { melt: "-157.37 °C", boil: "-153.22 °C", val: "0", en: "3.00", config: "[Ar] 3d¹⁰ 4s² 4p⁶", radius: "88 pm", ie: "1351 kJ/mol" },
	"Rb":  { melt: "39.30 °C", boil: "688 °C", val: "+1", en: "0.82", config: "[Kr] 5s¹", radius: "248 pm", ie: "403 kJ/mol" },
	"Sr":  { melt: "777 °C", boil: "1382 °C", val: "+2", en: "0.95", config: "[Kr] 5s²", radius: "215 pm", ie: "549 kJ/mol" },
	"Y":   { melt: "1526 °C", boil: "3345 °C", val: "+3", en: "1.22", config: "[Kr] 4d¹ 5s²", radius: "180 pm", ie: "600 kJ/mol" },
	"Zr":  { melt: "1855 °C", boil: "4409 °C", val: "+4", en: "1.33", config: "[Kr] 4d² 5s²", radius: "160 pm", ie: "640 kJ/mol" },
	"Nb":  { melt: "2477 °C", boil: "4744 °C", val: "+3, +5", en: "1.60", config: "[Kr] 4d⁴ 5s¹", radius: "146 pm", ie: "652 kJ/mol" },
	"Mo":  { melt: "2623 °C", boil: "4639 °C", val: "+2, +4, +6", en: "2.16", config: "[Kr] 4d⁵ 5s¹", radius: "139 pm", ie: "684 kJ/mol" },
	"Tc":  { melt: "2157 °C", boil: "4265 °C", val: "+4, +7", en: "1.90", config: "[Kr] 4d⁵ 5s²", radius: "136 pm", ie: "702 kJ/mol" },
	"Ru":  { melt: "2334 °C", boil: "4150 °C", val: "+3, +4", en: "2.20", config: "[Kr] 4d⁷ 5s¹", radius: "134 pm", ie: "710 kJ/mol" },
	"Rh":  { melt: "1964 °C", boil: "3695 °C", val: "+3", en: "2.28", config: "[Kr] 4d⁸ 5s¹", radius: "134 pm", ie: "720 kJ/mol" },
	"Pd":  { melt: "1554.9 °C", boil: "2963 °C", val: "+2, +4", en: "2.20", config: "[Kr] 4d¹⁰", radius: "137 pm", ie: "804 kJ/mol" },
	"Ag":  { melt: "961.78 °C", boil: "2162 °C", val: "+1", en: "1.93", config: "[Kr] 4d¹⁰ 5s¹", radius: "144 pm", ie: "731 kJ/mol" },
	"Cd":  { melt: "321.07 °C", boil: "767 °C", val: "+2", en: "1.69", config: "[Kr] 4d¹⁰ 5s²", radius: "151 pm", ie: "868 kJ/mol" },
	"In":  { melt: "156.6 °C", boil: "2072 °C", val: "+3", en: "1.78", config: "[Kr] 4d¹⁰ 5s² 5p¹", radius: "167 pm", ie: "558 kJ/mol" },
	"Sn":  { melt: "231.93 °C", boil: "2602 °C", val: "+2, +4", en: "1.96", config: "[Kr] 4d¹⁰ 5s² 5p²", radius: "140 pm", ie: "709 kJ/mol" },
	"Sb":  { melt: "630.63 °C", boil: "1587 °C", val: "-3, +3, +5", en: "2.05", config: "[Kr] 4d¹⁰ 5s² 5p³", radius: "140 pm", ie: "834 kJ/mol" },
	"Te":  { melt: "449.51 °C", boil: "988 °C", val: "-2, +4, +6", en: "2.10", config: "[Kr] 4d¹⁰ 5s² 5p⁴", radius: "142 pm", ie: "869 kJ/mol" },
	"I":   { melt: "113.7 °C", boil: "184.3 °C", val: "-1, +1, +5, +7", en: "2.66", config: "[Kr] 4d¹⁰ 5s² 5p⁵", radius: "133 pm", ie: "1008 kJ/mol" },
	"Xe":  { melt: "-111.75 °C", boil: "-108.12 °C", val: "0", en: "2.60", config: "[Kr] 4d¹⁰ 5s² 5p⁶", radius: "108 pm", ie: "1170 kJ/mol" },
	"Cs":  { melt: "28.44 °C", boil: "671 °C", val: "+1", en: "0.79", config: "[Xe] 6s¹", radius: "265 pm", ie: "376 kJ/mol" },
	"Ba":  { melt: "727 °C", boil: "1897 °C", val: "+2", en: "0.89", config: "[Xe] 6s²", radius: "222 pm", ie: "503 kJ/mol" },
	"La":  { melt: "920 °C", boil: "3464 °C", val: "+3", en: "1.10", config: "[Xe] 5d¹ 6s²", radius: "187 pm", ie: "538 kJ/mol" },
	"Ce":  { melt: "795 °C", boil: "3443 °C", val: "+3, +4", en: "1.12", config: "[Xe] 4f¹ 5d¹ 6s²", radius: "182 pm", ie: "534 kJ/mol" },
	"Pr":  { melt: "935 °C", boil: "3520 °C", val: "+3", en: "1.13", config: "[Xe] 4f³ 6s²", radius: "183 pm", ie: "527 kJ/mol" },
	"Nd":  { melt: "1024 °C", boil: "3074 °C", val: "+3", en: "1.14", config: "[Xe] 4f⁴ 6s²", radius: "182 pm", ie: "533 kJ/mol" },
	"Pm":  { melt: "1042 °C", boil: "3000 °C", val: "+3", en: "1.13", config: "[Xe] 4f⁵ 6s²", radius: "181 pm", ie: "540 kJ/mol" },
	"Sm":  { melt: "1072 °C", boil: "1794 °C", val: "+2, +3", en: "1.17", config: "[Xe] 4f⁶ 6s²", radius: "180 pm", ie: "545 kJ/mol" },
	"Eu":  { melt: "826 °C", boil: "1529 °C", val: "+2, +3", en: "1.20", config: "[Xe] 4f⁷ 6s²", radius: "180 pm", ie: "547 kJ/mol" },
	"Gd":  { melt: "1312 °C", boil: "3273 °C", val: "+3", en: "1.20", config: "[Xe] 4f⁷ 5d¹ 6s²", radius: "180 pm", ie: "593 kJ/mol" },
	"Tb":  { melt: "1356 °C", boil: "3230 °C", val: "+3", en: "1.20", config: "[Xe] 4f⁹ 6s²", radius: "177 pm", ie: "566 kJ/mol" },
	"Dy":  { melt: "1412 °C", boil: "2567 °C", val: "+3", en: "1.22", config: "[Xe] 4f¹⁰ 6s²", radius: "178 pm", ie: "573 kJ/mol" },
	"Ho":  { melt: "1474 °C", boil: "2700 °C", val: "+3", en: "1.23", config: "[Xe] 4f¹¹ 6s²", radius: "176 pm", ie: "581 kJ/mol" },
	"Er":  { melt: "1529 °C", boil: "2868 °C", val: "+3", en: "1.24", config: "[Xe] 4f¹² 6s²", radius: "175 pm", ie: "589 kJ/mol" },
	"Tm":  { melt: "1545 °C", boil: "1950 °C", val: "+3", en: "1.25", config: "[Xe] 4f¹³ 6s²", radius: "174 pm", ie: "597 kJ/mol" },
	"Yb":  { melt: "824 °C", boil: "1196 °C", val: "+2, +3", en: "1.10", config: "[Xe] 4f¹⁴ 6s²", radius: "194 pm", ie: "603 kJ/mol" },
	"Lu":  { melt: "1663 °C", boil: "3402 °C", val: "+3", en: "1.27", config: "[Xe] 4f¹⁴ 5d¹ 6s²", radius: "174 pm", ie: "524 kJ/mol" },
	"Hf":  { melt: "2233 °C", boil: "4603 °C", val: "+4", en: "1.30", config: "[Xe] 4f¹⁴ 5d² 6s²", radius: "159 pm", ie: "659 kJ/mol" },
	"Ta":  { melt: "3017 °C", boil: "5458 °C", val: "+5", en: "1.50", config: "[Xe] 4f¹⁴ 5d³ 6s²", radius: "146 pm", ie: "761 kJ/mol" },
	"W":   { melt: "3422 °C", boil: "5555 °C", val: "+2, +4, +6", en: "2.36", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", radius: "139 pm", ie: "770 kJ/mol" },
	"Re":  { melt: "3186 °C", boil: "5596 °C", val: "+4, +7", en: "1.90", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", radius: "137 pm", ie: "760 kJ/mol" },
	"Os":  { melt: "3033 °C", boil: "5012 °C", val: "+4, +8", en: "2.20", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", radius: "135 pm", ie: "840 kJ/mol" },
	"Ir":  { melt: "2466 °C", boil: "4428 °C", val: "+3, +4", en: "2.20", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", radius: "136 pm", ie: "880 kJ/mol" },
	"Pt":  { melt: "1768.3 °C", boil: "3825 °C", val: "+2, +4", en: "2.28", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", radius: "139 pm", ie: "870 kJ/mol" },
	"Au":  { melt: "1064.18 °C", boil: "2856 °C", val: "+1, +3", en: "2.54", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", radius: "144 pm", ie: "890 kJ/mol" },
	"Hg":  { melt: "-38.83 °C", boil: "356.73 °C", val: "+1, +2", en: "2.00", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", radius: "151 pm", ie: "1007 kJ/mol" },
	"Tl":  { melt: "304 °C", boil: "1473 °C", val: "+1, +3", en: "1.62", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", radius: "170 pm", ie: "589 kJ/mol" },
	"Pb":  { melt: "327.46 °C", boil: "1749 °C", val: "+2, +4", en: "2.33", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", radius: "175 pm", ie: "716 kJ/mol" },
	"Bi":  { melt: "271.40 °C", boil: "1564 °C", val: "+3, +5", en: "2.02", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", radius: "155 pm", ie: "703 kJ/mol" },
	"Po":  { melt: "254 °C", boil: "962 °C", val: "-2, +2, +4", en: "2.00", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", radius: "167 pm", ie: "812 kJ/mol" },
	"At":  { melt: "302 °C", boil: "337 °C", val: "-1, +1", en: "2.20", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", radius: "150 pm", ie: "899 kJ/mol" },
	"Rn":  { melt: "-71 °C", boil: "-61.7 °C", val: "0", en: "2.20", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", radius: "120 pm", ie: "1037 kJ/mol" },
	"Fr":  { melt: "27 °C", boil: "677 °C", val: "+1", en: "0.70", config: "[Rn] 7s¹", radius: "—", ie: "380 kJ/mol" },
	"Ra":  { melt: "700 °C", boil: "1737 °C", val: "+2", en: "0.90", config: "[Rn] 7s²", radius: "223 pm", ie: "509 kJ/mol" },
	"Ac":  { melt: "1050 °C", boil: "3200 °C", val: "+3", en: "1.10", config: "[Rn] 6d¹ 7s²", radius: "188 pm", ie: "499 kJ/mol" },
	"Th":  { melt: "1750 °C", boil: "4788 °C", val: "+4", en: "1.30", config: "[Rn] 6d² 7s²", radius: "180 pm", ie: "587 kJ/mol" },
	"Pa":  { melt: "1568 °C", boil: "4027 °C", val: "+4, +5", en: "1.50", config: "[Rn] 5f² 6d¹ 7s²", radius: "161 pm", ie: "568 kJ/mol" },
	"U":   { melt: "1132.2 °C", boil: "4131 °C", val: "+3, +4, +5, +6", en: "1.38", config: "[Rn] 5f³ 6d¹ 7s²", radius: "156 pm", ie: "598 kJ/mol" },
	"Np":  { melt: "644 °C", boil: "3902 °C", val: "+3, +4, +5, +6, +7", en: "1.36", config: "[Rn] 5f⁴ 6d¹ 7s²", radius: "155 pm", ie: "605 kJ/mol" },
	"Pu":  { melt: "639.4 °C", boil: "3228 °C", val: "+3, +4, +5, +6", en: "1.28", config: "[Rn] 5f⁶ 7s²", radius: "159 pm", ie: "585 kJ/mol" },
	"Am":  { melt: "1176 °C", boil: "2011 °C", val: "+3, +4, +5, +6", en: "1.30", config: "[Rn] 5f⁷ 7s²", radius: "173 pm", ie: "578 kJ/mol" },
	"Cm":  { melt: "1340 °C", boil: "3110 °C", val: "+3, +4", en: "1.30", config: "[Rn] 5f⁷ 6d¹ 7s²", radius: "174 pm", ie: "581 kJ/mol" },
	"Bk":  { melt: "986 °C", boil: "2627 °C", val: "+3, +4", en: "1.30", config: "[Rn] 5f⁹ 7s²", radius: "170 pm", ie: "601 kJ/mol" },
	"Cf":  { melt: "900 °C", boil: "1470 °C", val: "+3, +4", en: "1.30", config: "[Rn] 5f¹⁰ 7s²", radius: "186 pm", ie: "608 kJ/mol" },
	"Es":  { melt: "860 °C", boil: "996 °C", val: "+3", en: "1.30", config: "[Rn] 5f¹¹ 7s²", radius: "186 pm", ie: "619 kJ/mol" },
	"Fm":  { melt: "1527 °C", boil: "—", val: "+3", en: "1.30", config: "[Rn] 5f¹² 7s²", radius: "—", ie: "627 kJ/mol" },
	"Md":  { melt: "827 °C", boil: "—", val: "+2, +3", en: "1.30", config: "[Rn] 5f¹³ 7s²", radius: "—", ie: "635 kJ/mol" },
	"No":  { melt: "827 °C", boil: "—", val: "+2, +3", en: "1.30", config: "[Rn] 5f¹⁴ 7s²", radius: "—", ie: "642 kJ/mol" },
	"Lr":  { melt: "1627 °C", boil: "—", val: "+3", en: "1.30", config: "[Rn] 5f¹⁴ 7s² 7p¹", radius: "—", ie: "470 kJ/mol" },
	"Rf":  { melt: "2100 °C", boil: "5500 °C", val: "+4", en: "—", config: "[Rn] 5f¹⁴ 6d² 7s²", radius: "—", ie: "580 kJ/mol" },
	"Db":  { melt: "—", boil: "—", val: "+5", en: "—", config: "[Rn] 5f¹⁴ 6d³ 7s²", radius: "—", ie: "—" },
	"Sg":  { melt: "—", boil: "—", val: "+6", en: "—", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", radius: "—", ie: "—" },
	"Bh":  { melt: "—", boil: "—", val: "+7", en: "—", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", radius: "—", ie: "—" },
	"Hs":  { melt: "—", boil: "—", val: "+8", en: "—", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", radius: "—", ie: "—" },
	"Mt":  { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", radius: "—", ie: "—" },
	"Ds":  { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d⁸ 7s²", radius: "—", ie: "—" },
	"Rg":  { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d⁹ 7s²", radius: "—", ie: "—" },
	"Cn":  { melt: "—", boil: "—", val: "+2", en: "—", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", radius: "—", ie: "—" },
	"Uut": { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", radius: "—", ie: "—" },
	"Fl":  { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", radius: "—", ie: "—" },
	"Uup": { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", radius: "—", ie: "—" },
	"Lv":  { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", radius: "—", ie: "—" },
	"Uus": { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", radius: "—", ie: "—" },
	"Uuo": { melt: "—", boil: "—", val: "—", en: "—", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", radius: "—", ie: "—" }
};

var camera, scene, renderer;
var controls;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3000;

	scene = new THREE.Scene();

	for ( var i = 0; i < table.length; i += 5 ) {

		var idx = i / 5;
		var cat = elementCategories[ idx ];

		var element = document.createElement( 'div' );
		element.className = 'element';
		element.style.backgroundColor = categoryColors[ cat ];

		var number = document.createElement( 'div' );
		number.className = 'number';
		number.textContent = idx + 1;
		element.appendChild( number );

		var symbol = document.createElement( 'div' );
		symbol.className = 'symbol';
		symbol.textContent = table[ i ];
		element.appendChild( symbol );

		var details = document.createElement( 'div' );
		details.className = 'details';
		details.innerHTML = nameVi[ table[ i + 1 ] ] || table[ i + 1 ];
		element.appendChild( details );

		( function( data ) {
			element.addEventListener( 'click', function() {
				showPopup( data );
			} );
		} )( {
			number: idx + 1,
			symbol: table[ i ],
			name: nameVi[ table[ i + 1 ] ] || table[ i + 1 ],
			latin: table[ i + 1 ],
			mass: table[ i + 2 ],
			group: table[ i + 3 ],
			period: table[ i + 4 ],
			category: cat,
			extra: elementExtra[ table[ i ] ] || null
		} );

		var object = new THREE.CSS3DObject( element );
		object.position.x = Math.random() * 4000 - 2000;
		object.position.y = Math.random() * 4000 - 2000;
		object.position.z = Math.random() * 4000 - 2000;
		scene.add( object );

		objects.push( object );

		var target = new THREE.Object3D();
		target.position.x = ( table[ i + 3 ] * 140 ) - 1330;
		target.position.y = - ( table[ i + 4 ] * 180 ) + 990;
		targets.table.push( target );

	}

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = Math.acos( -1 + ( 2 * i ) / l );
		var theta = Math.sqrt( l * Math.PI ) * phi;

		var object = new THREE.Object3D();

		object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
		object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
		object.position.z = 800 * Math.cos( phi );

		vector.copy( object.position ).multiplyScalar( 2 );

		object.lookAt( vector );

		targets.sphere.push( object );

	}

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = i * 0.175 + Math.PI;

		var object = new THREE.Object3D();

		object.position.x = 900 * Math.sin( phi );
		object.position.y = - ( i * 8 ) + 450;
		object.position.z = 900 * Math.cos( phi );

		vector.x = object.position.x * 2;
		vector.y = object.position.y;
		vector.z = object.position.z * 2;

		object.lookAt( vector );

		targets.helix.push( object );

	}

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = new THREE.Object3D();

		object.position.x = ( ( i % 5 ) * 400 ) - 800;
		object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
		object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

		targets.grid.push( object );

	}

	renderer = new THREE.CSS3DRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( renderer.domElement );

	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.minDistance = 500;
	controls.maxDistance = 6000;
	controls.addEventListener( 'change', render );

	document.getElementById( 'table' ).addEventListener( 'click', function () {
		transform( targets.table, 2000 );
	}, false );

	document.getElementById( 'sphere' ).addEventListener( 'click', function () {
		transform( targets.sphere, 2000 );
	}, false );

	document.getElementById( 'helix' ).addEventListener( 'click', function () {
		transform( targets.helix, 2000 );
	}, false );

	document.getElementById( 'grid' ).addEventListener( 'click', function () {
		transform( targets.grid, 2000 );
	}, false );

	document.getElementById( 'popup-close' ).addEventListener( 'click', function() {
		document.getElementById( 'popup' ).classList.remove( 'show' );
	} );

	document.getElementById( 'popup' ).addEventListener( 'click', function( ev ) {
		if ( ev.target.id === 'popup' ) {
			this.classList.remove( 'show' );
		}
	} );

	transform( targets.table, 5000 );

	window.addEventListener( 'resize', onWindowResize, false );

}

function showPopup( data ) {

	document.getElementById( 'popup-symbol' ).textContent = data.symbol;
	document.getElementById( 'popup-name' ).textContent = data.name + ' (' + data.latin + ')';
	document.getElementById( 'popup-mass' ).textContent = data.mass + ' amu';

	var groupText = groupRoman[ data.group ] || data.group;
	document.getElementById( 'popup-group' ).textContent = groupText;
	document.getElementById( 'popup-period' ).textContent = data.period;

	var catBadge = document.getElementById( 'popup-category' );
	catBadge.textContent = categoryNames[ data.category ];
	catBadge.style.backgroundColor = categoryColors[ data.category ];

	var ex = data.extra || { melt: '—', boil: '—', val: '—', en: '—', config: '—', radius: '—', ie: '—' };
	document.getElementById( 'popup-melt' ).textContent = ex.melt;
	document.getElementById( 'popup-boil' ).textContent = ex.boil;
	document.getElementById( 'popup-val' ).textContent = ex.val;
	document.getElementById( 'popup-en' ).textContent = ex.en;
	document.getElementById( 'popup-config' ).textContent = ex.config;
	document.getElementById( 'popup-radius' ).textContent = ex.radius;
	document.getElementById( 'popup-ie' ).textContent = ex.ie;

	document.getElementById( 'popup' ).classList.add( 'show' );

}

function transform( targets, duration ) {

	TWEEN.removeAll();

	for ( var i = 0; i < objects.length; i ++ ) {

		var object = objects[ i ];
		var target = targets[ i ];

		new TWEEN.Tween( object.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

		new TWEEN.Tween( object.rotation )
			.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();

	}

	new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.start();

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function animate() {

	requestAnimationFrame( animate );

	TWEEN.update();

	controls.update();

}

function render() {

	renderer.render( scene, camera );

}
