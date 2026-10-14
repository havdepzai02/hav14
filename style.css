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
	"H", "Hydrogen", "1.008", 1, 1, "1s1", 2.20, "-259.16 °C", "-252.87 °C", "53 pm", "1312 kJ/mol", "Nguyên tố nhẹ nhất và nhiều nhất vũ trụ. Là nhiên liệu của các ngôi sao, dùng để sản xuất amoniac và trong pin nhiên liệu.",
	"He", "Helium", "4.0026", 18, 1, "1s2", null, "-272.2 °C", "-268.93 °C", "31 pm", "2372 kJ/mol", "Khí hiếm trơ, nhẹ thứ hai. Dùng bơm khinh khí cầu và làm lạnh nam châm siêu dẫn của máy MRI.",
	"Li", "Lithium", "6.94", 1, 2, "[He] 2s1", 0.98, "180.5 °C", "1342 °C", "152 pm", "520 kJ/mol", "Kim loại nhẹ nhất. Thành phần chính của pin lithium-ion trong điện thoại và xe điện.",
	"Be", "Beryllium", "9.0122", 2, 2, "[He] 2s2", 1.57, "1287 °C", "2470 °C", "112 pm", "899 kJ/mol", "Kim loại nhẹ, cứng, gần như trong suốt với tia X. Dùng làm cửa sổ ống X-quang và hợp kim đồng-beri.",
	"B", "Boron", "10.81", 13, 2, "[He] 2s2 2p1", 2.04, "2076 °C", "3927 °C", "87 pm", "801 kJ/mol", "Á kim rất cứng. Có trong thủy tinh borosilicat, borax và vật liệu hấp thụ neutron.",
	"C", "Carbon", "12.011", 14, 2, "[He] 2s2 2p2", 2.55, "3550 °C", "4027 °C", "67 pm", "1086 kJ/mol", "Nền tảng của hóa học hữu cơ và sự sống. Tồn tại ở dạng kim cương, than chì và graphene.",
	"N", "Nitrogen", "14.007", 15, 2, "[He] 2s2 2p3", 3.04, "-210 °C", "-195.79 °C", "56 pm", "1402 kJ/mol", "Chiếm khoảng 78% thể tích khí quyển. Thiết yếu cho protein, ADN và phân bón.",
	"O", "Oxygen", "15.999", 16, 2, "[He] 2s2 2p4", 3.44, "-218.79 °C", "-182.95 °C", "48 pm", "1314 kJ/mol", "Chiếm khoảng 21% khí quyển và gần một nửa khối lượng vỏ Trái Đất. Cần cho hô hấp và sự cháy.",
	"F", "Fluorine", "18.998", 17, 2, "[He] 2s2 2p5", 3.98, "-219.67 °C", "-188.11 °C", "42 pm", "1681 kJ/mol", "Có độ âm điện lớn nhất trong các nguyên tố. Có trong kem đánh răng (florua) và nhựa teflon.",
	"Ne", "Neon", "20.18", 18, 2, "[He] 2s2 2p6", null, "-248.59 °C", "-246.08 °C", "38 pm", "2081 kJ/mol", "Khí hiếm phát sáng đỏ cam khi có dòng điện chạy qua, dùng trong đèn neon quảng cáo.",
	"Na", "Sodium", "22.99", 1, 3, "[Ne] 3s1", 0.93, "97.8 °C", "883 °C", "186 pm", "496 kJ/mol", "Kim loại mềm, phản ứng mạnh với nước. Là thành phần của muối ăn (NaCl).",
	"Mg", "Magnesium", "24.305", 2, 3, "[Ne] 3s2", 1.31, "650 °C", "1090 °C", "160 pm", "738 kJ/mol", "Kim loại nhẹ, cháy sáng chói. Có trong diệp lục của thực vật và trong các hợp kim nhẹ.",
	"Al", "Aluminium", "26.982", 13, 3, "[Ne] 3s2 3p1", 1.61, "660.3 °C", "2519 °C", "143 pm", "578 kJ/mol", "Kim loại nhẹ, bền, phổ biến nhất trong vỏ Trái Đất. Dùng làm vỏ máy bay, lon nước, dây điện cao thế.",
	"Si", "Silicon", "28.085", 14, 3, "[Ne] 3s2 3p2", 1.90, "1414 °C", "3265 °C", "117 pm", "786 kJ/mol", "Nền tảng của chip bán dẫn và pin mặt trời. Cát và thủy tinh chứa silic đioxit.",
	"P", "Phosphorus", "30.974", 15, 3, "[Ne] 3s2 3p3", 2.19, "44.15 °C", "280.5 °C", "110 pm", "1012 kJ/mol", "Có trong ADN, ATP và xương. Dùng làm phân bón và đầu que diêm (dạng photpho đỏ).",
	"S", "Sulfur", "32.06", 16, 3, "[Ne] 3s2 3p4", 2.58, "115.21 °C", "444.6 °C", "104 pm", "1000 kJ/mol", "Phi kim màu vàng. Dùng để sản xuất axit sunfuric và lưu hóa cao su.",
	"Cl", "Chlorine", "35.45", 17, 3, "[Ne] 3s2 3p5", 3.16, "-101.5 °C", "-34.04 °C", "99 pm", "1251 kJ/mol", "Khí màu vàng lục, độc. Dùng khử trùng nước và sản xuất nhựa PVC.",
	"Ar", "Argon", "39.948", 18, 3, "[Ne] 3s2 3p6", null, "-189.35 °C", "-185.85 °C", "71 pm", "1521 kJ/mol", "Khí hiếm chiếm khoảng 0,93% khí quyển. Dùng làm khí bảo vệ khi hàn và nạp trong bóng đèn.",
	"K", "Potassium", "39.098", 1, 4, "[Ar] 4s1", 0.82, "63.5 °C", "759 °C", "227 pm", "419 kJ/mol", "Kim loại kiềm mềm. Cần cho hoạt động của thần kinh và cơ; có trong phân bón.",
	"Ca", "Calcium", "40.078", 2, 4, "[Ar] 4s2", 1.00, "842 °C", "1484 °C", "197 pm", "590 kJ/mol", "Có trong xương, răng và vỏ sò. Dùng làm vôi, xi măng và thạch cao.",
	"Sc", "Scandium", "44.956", 3, 4, "[Ar] 3d1 4s2", 1.36, "1541 °C", "2836 °C", "162 pm", "633 kJ/mol", "Kim loại hiếm. Hợp kim nhôm-scandi dùng cho máy bay và dụng cụ thể thao.",
	"Ti", "Titanium", "47.867", 4, 4, "[Ar] 3d2 4s2", 1.54, "1668 °C", "3287 °C", "147 pm", "659 kJ/mol", "Kim loại nhẹ, bền, chống ăn mòn. Dùng trong máy bay, khớp nhân tạo; TiO₂ là bột màu trắng.",
	"V", "Vanadium", "50.942", 5, 4, "[Ar] 3d3 4s2", 1.63, "1910 °C", "3407 °C", "134 pm", "651 kJ/mol", "Dùng làm thép hợp kim cứng và bền (thép vanadi), và trong pin lưu trữ năng lượng.",
	"Cr", "Chromium", "51.996", 6, 4, "[Ar] 3d5 4s1", 1.66, "1907 °C", "2671 °C", "128 pm", "653 kJ/mol", "Kim loại cứng, sáng bóng. Dùng mạ crom và là thành phần của thép không gỉ.",
	"Mn", "Manganese", "54.938", 7, 4, "[Ar] 3d5 4s2", 1.55, "1246 °C", "2061 °C", "127 pm", "717 kJ/mol", "Dùng sản xuất thép và pin kiềm. Cần cho nhiều enzyme trong cơ thể.",
	"Fe", "Iron", "55.845", 8, 4, "[Ar] 3d6 4s2", 1.83, "1538 °C", "2861 °C", "126 pm", "762 kJ/mol", "Kim loại phổ biến nhất trong lõi Trái Đất. Là thành phần chính của thép và của hemoglobin trong máu.",
	"Co", "Cobalt", "58.933", 9, 4, "[Ar] 3d7 4s2", 1.88, "1495 °C", "2927 °C", "125 pm", "760 kJ/mol", "Kim loại có từ tính. Dùng trong pin, hợp kim siêu bền; vitamin B12 chứa coban.",
	"Ni", "Nickel", "58.693", 10, 4, "[Ar] 3d8 4s2", 1.91, "1455 °C", "2913 °C", "124 pm", "737 kJ/mol", "Chống ăn mòn tốt. Dùng mạ kim loại, làm thép không gỉ, tiền xu và pin.",
	"Cu", "Copper", "63.546", 11, 4, "[Ar] 3d10 4s1", 1.90, "1084.6 °C", "2562 °C", "128 pm", "745 kJ/mol", "Dẫn điện và nhiệt tốt. Dùng làm dây điện, đồng thau (với kẽm) và đồng thanh (với thiếc).",
	"Zn", "Zinc", "65.38", 12, 4, "[Ar] 3d10 4s2", 1.65, "419.5 °C", "907 °C", "134 pm", "906 kJ/mol", "Dùng mạ chống gỉ cho thép (tôn mạ kẽm), làm đồng thau và pin.",
	"Ga", "Gallium", "69.723", 13, 4, "[Ar] 3d10 4s2 4p1", 1.81, "29.76 °C", "2204 °C", "135 pm", "579 kJ/mol", "Kim loại nóng chảy ngay trong lòng bàn tay. Dùng trong đèn LED và chip GaAs.",
	"Ge", "Germanium", "72.63", 14, 4, "[Ar] 3d10 4s2 4p2", 2.01, "938.3 °C", "2833 °C", "122 pm", "762 kJ/mol", "Á kim bán dẫn, từng dùng trong những transistor đầu tiên. Dùng trong cáp quang và kính hồng ngoại.",
	"As", "Arsenic", "74.922", 15, 4, "[Ar] 3d10 4s2 4p3", 2.18, "817 °C", "614 °C", "120 pm", "947 kJ/mol", "Á kim độc. Hợp chất GaAs dùng trong chất bán dẫn; từng được dùng làm thuốc trừ sâu.",
	"Se", "Selenium", "78.971", 16, 4, "[Ar] 3d10 4s2 4p4", 2.55, "221 °C", "685 °C", "119 pm", "941 kJ/mol", "Phi kim cần với lượng rất nhỏ cho cơ thể. Dùng trong pin mặt trời, thủy tinh và dầu gội trị gàu.",
	"Br", "Bromine", "79.904", 17, 4, "[Ar] 3d10 4s2 4p5", 2.96, "-7.2 °C", "58.8 °C", "114 pm", "1140 kJ/mol", "Một trong hai nguyên tố ở thể lỏng ở nhiệt độ phòng. Dùng làm chất chống cháy và thuốc nhuộm.",
	"Kr", "Krypton", "83.798", 18, 4, "[Ar] 3d10 4s2 4p6", 3.00, "-157.4 °C", "-153.4 °C", "88 pm", "1351 kJ/mol", "Khí hiếm. Dùng trong đèn huỳnh quang, đèn flash chụp ảnh và một số loại laze.",
	"Rb", "Rubidium", "85.468", 1, 5, "[Kr] 5s1", 0.82, "39.3 °C", "688 °C", "248 pm", "403 kJ/mol", "Kim loại kiềm rất mềm. Dùng trong đồng hồ nguyên tử và nghiên cứu vật lý lượng tử.",
	"Sr", "Strontium", "87.62", 2, 5, "[Kr] 5s2", 0.95, "777 °C", "1377 °C", "215 pm", "549 kJ/mol", "Cho ngọn lửa đỏ thẫm, dùng trong pháo hoa và đèn tín hiệu.",
	"Y", "Yttrium", "88.906", 3, 5, "[Kr] 4d1 5s2", 1.22, "1526 °C", "3345 °C", "180 pm", "600 kJ/mol", "Dùng trong đèn LED trắng (YAG), laze và vật liệu siêu dẫn nhiệt độ cao.",
	"Zr", "Zirconium", "91.224", 4, 5, "[Kr] 4d2 5s2", 1.33, "1855 °C", "4409 °C", "160 pm", "640 kJ/mol", "Chống ăn mòn và ít hấp thụ neutron. Dùng làm vỏ bọc nhiên liệu trong lò phản ứng hạt nhân.",
	"Nb", "Niobium", "92.906", 5, 5, "[Kr] 4d4 5s1", 1.6, "2477 °C", "4744 °C", "146 pm", "652 kJ/mol", "Dùng trong thép hợp kim bền và dây siêu dẫn của nam châm máy MRI.",
	"Mo", "Molybdenum", "95.95", 6, 5, "[Kr] 4d5 5s1", 2.16, "2623 °C", "4639 °C", "139 pm", "684 kJ/mol", "Nóng chảy ở nhiệt độ rất cao. Dùng làm thép hợp kim bền và xúc tác lọc dầu.",
	"Tc", "Technetium", "98", 7, 5, "[Kr] 4d5 5s2", 1.9, "2157 °C", "4265 °C", "136 pm", "702 kJ/mol", "Nguyên tố đầu tiên được tạo ra nhân tạo. Đồng vị Tc-99m dùng nhiều trong chẩn đoán y học hạt nhân.",
	"Ru", "Ruthenium", "101.07", 8, 5, "[Kr] 4d7 5s1", 2.2, "2334 °C", "4150 °C", "134 pm", "710 kJ/mol", "Kim loại họ platin. Dùng làm tiếp điểm điện cứng và chất xúc tác.",
	"Rh", "Rhodium", "102.91", 9, 5, "[Kr] 4d8 5s1", 2.28, "1964 °C", "3695 °C", "134 pm", "720 kJ/mol", "Kim loại quý hiếm. Dùng trong bộ xúc tác khí thải ô tô và mạ đồ trang sức.",
	"Pd", "Palladium", "106.42", 10, 5, "[Kr] 4d10", 2.20, "1554.9 °C", "2963 °C", "137 pm", "804 kJ/mol", "Hấp thụ nhiều hiđro. Dùng trong bộ xúc tác khí thải, điện tử và nha khoa.",
	"Ag", "Silver", "107.87", 11, 5, "[Kr] 4d10 5s1", 1.93, "961.8 °C", "2162 °C", "144 pm", "731 kJ/mol", "Dẫn điện và nhiệt tốt nhất trong các kim loại. Dùng làm trang sức, gương và tiếp điểm điện.",
	"Cd", "Cadmium", "112.41", 12, 5, "[Kr] 4d10 5s2", 1.69, "321.1 °C", "767 °C", "151 pm", "868 kJ/mol", "Kim loại độc. Dùng trong pin Ni-Cd và mạ kim loại, nay bị hạn chế vì độc tính.",
	"In", "Indium", "114.82", 13, 5, "[Kr] 4d10 5s2 5p1", 1.78, "156.6 °C", "2072 °C", "167 pm", "558 kJ/mol", "Kim loại mềm. Hợp chất ITO tạo lớp dẫn điện trong suốt cho màn hình cảm ứng.",
	"Sn", "Tin", "118.71", 14, 5, "[Kr] 4d10 5s2 5p2", 1.96, "231.9 °C", "2602 °C", "140 pm", "709 kJ/mol", "Dùng mạ hộp thiếc, làm thiếc hàn và đồng thanh.",
	"Sb", "Antimony", "121.76", 15, 5, "[Kr] 4d10 5s2 5p3", 2.05, "630.6 °C", "1587 °C", "140 pm", "834 kJ/mol", "Dùng làm hợp kim cứng với chì, chất chống cháy và chất bán dẫn.",
	"Te", "Tellurium", "127.6", 16, 5, "[Kr] 4d10 5s2 5p4", 2.1, "449.5 °C", "988 °C", "142 pm", "869 kJ/mol", "Dùng trong pin mặt trời CdTe và vật liệu nhiệt điện.",
	"I", "Iodine", "126.9", 17, 5, "[Kr] 4d10 5s2 5p5", 2.66, "113.7 °C", "184.3 °C", "133 pm", "1008 kJ/mol", "Cần cho hormone tuyến giáp. Dùng khử trùng và bổ sung vào muối iot.",
	"Xe", "Xenon", "131.29", 18, 5, "[Kr] 4d10 5s2 5p6", 2.6, "-111.8 °C", "-108.1 °C", "108 pm", "1170 kJ/mol", "Khí hiếm nặng. Dùng trong đèn pha xenon và động cơ ion của tàu vũ trụ.",
	"Cs", "Caesium", "132.91", 1, 6, "[Xe] 6s1", 0.79, "28.4 °C", "671 °C", "265 pm", "376 kJ/mol", "Kim loại mềm, phản ứng cực mạnh. Dao động của nguyên tử xesi dùng để định nghĩa giây trong đồng hồ nguyên tử.",
	"Ba", "Barium", "137.33", 2, 6, "[Xe] 6s2", 0.89, "727 °C", "1845 °C", "222 pm", "503 kJ/mol", "Bari sunfat dùng làm chất cản quang khi chụp X-quang; cho ngọn lửa màu lục trong pháo hoa.",
	"La", "Lanthanum", "138.91", 4, 9, "[Xe] 5d1 6s2", 1.10, "920 °C", "3464 °C", "187 pm", "538 kJ/mol", "Dùng trong ống kính máy ảnh, pin NiMH và xúc tác lọc dầu.",
	"Ce", "Cerium", "140.12", 5, 9, "[Xe] 4f1 5d1 6s2", 1.12, "795 °C", "3443 °C", "182 pm", "534 kJ/mol", "Nguyên tố đất hiếm dồi dào nhất. Dùng đánh bóng kính và làm đá lửa bật lửa.",
	"Pr", "Praseodymium", "140.91", 6, 9, "[Xe] 4f3 6s2", 1.13, "935 °C", "3520 °C", "183 pm", "527 kJ/mol", "Tạo màu vàng lục cho thủy tinh và gốm; có trong nam châm đất hiếm.",
	"Nd", "Neodymium", "144.24", 7, 9, "[Xe] 4f4 6s2", 1.14, "1024 °C", "3074 °C", "182 pm", "533 kJ/mol", "Tạo ra loại nam châm mạnh nhất (NdFeB), dùng trong động cơ điện và tai nghe.",
	"Pm", "Promethium", "145", 8, 9, "[Xe] 4f5 6s2", 1.13, "1042 °C", "3000 °C", "181 pm", "540 kJ/mol", "Phóng xạ, không có đồng vị bền. Dùng trong pin hạt nhân nhỏ và sơn phát sáng.",
	"Sm", "Samarium", "150.36", 9, 9, "[Xe] 4f6 6s2", 1.17, "1072 °C", "1794 °C", "180 pm", "545 kJ/mol", "Dùng làm nam châm samari-coban chịu nhiệt cao và thanh điều khiển lò phản ứng.",
	"Eu", "Europium", "151.96", 10, 9, "[Xe] 4f7 6s2", 1.2, "826 °C", "1529 °C", "180 pm", "547 kJ/mol", "Phát quang đỏ và xanh. Dùng trong màn hình, đèn huỳnh quang và mực chống giả trên tiền euro.",
	"Gd", "Gadolinium", "157.25", 11, 9, "[Xe] 4f7 5d1 6s2", 1.2, "1312 °C", "3273 °C", "180 pm", "593 kJ/mol", "Từ tính mạnh. Dùng làm thuốc cản quang khi chụp MRI và hấp thụ neutron.",
	"Tb", "Terbium", "158.93", 12, 9, "[Xe] 4f9 6s2", 1.1, "1356 °C", "3230 °C", "177 pm", "566 kJ/mol", "Phát sáng màu lục, dùng trong đèn huỳnh quang và màn hình.",
	"Dy", "Dysprosium", "162.5", 13, 9, "[Xe] 4f10 6s2", 1.22, "1407 °C", "2567 °C", "178 pm", "573 kJ/mol", "Thêm vào nam châm NdFeB để chịu nhiệt tốt hơn; dùng trong tuabin gió và xe điện.",
	"Ho", "Holmium", "164.93", 14, 9, "[Xe] 4f11 6s2", 1.23, "1461 °C", "2720 °C", "176 pm", "581 kJ/mol", "Có từ tính mạnh nhất trong các nguyên tố. Dùng trong laze y học và nam châm.",
	"Er", "Erbium", "167.26", 15, 9, "[Xe] 4f12 6s2", 1.24, "1529 °C", "2868 °C", "175 pm", "589 kJ/mol", "Dùng trong bộ khuếch đại cáp quang và laze; tạo màu hồng cho thủy tinh.",
	"Tm", "Thulium", "168.93", 16, 9, "[Xe] 4f13 6s2", 1.25, "1545 °C", "1950 °C", "174 pm", "597 kJ/mol", "Dùng trong laze y tế và thiết bị X-quang xách tay.",
	"Yb", "Ytterbium", "173.05", 17, 9, "[Xe] 4f14 6s2", 1.1, "824 °C", "1196 °C", "194 pm", "603 kJ/mol", "Dùng trong đồng hồ nguyên tử quang học và laze sợi quang.",
	"Lu", "Lutetium", "174.97", 18, 9, "[Xe] 4f14 5d1 6s2", 1.27, "1652 °C", "3402 °C", "174 pm", "524 kJ/mol", "Hiếm và đắt. Dùng trong máy chụp PET và chất xúc tác lọc dầu.",
	"Hf", "Hafnium", "178.49", 4, 6, "[Xe] 4f14 5d2 6s2", 1.3, "2233 °C", "4603 °C", "159 pm", "659 kJ/mol", "Hấp thụ neutron tốt, dùng làm thanh điều khiển lò hạt nhân và trong chip vi xử lý.",
	"Ta", "Tantalum", "180.95", 5, 6, "[Xe] 4f14 5d3 6s2", 1.5, "3017 °C", "5458 °C", "146 pm", "761 kJ/mol", "Rất bền với ăn mòn. Dùng trong tụ điện của điện thoại và dụng cụ phẫu thuật.",
	"W", "Tungsten", "183.84", 6, 6, "[Xe] 4f14 5d4 6s2", 2.36, "3422 °C", "5555 °C", "139 pm", "770 kJ/mol", "Có nhiệt độ nóng chảy cao nhất trong các kim loại. Dùng làm dây tóc bóng đèn và mũi khoan.",
	"Re", "Rhenium", "186.21", 7, 6, "[Xe] 4f14 5d5 6s2", 1.9, "3186 °C", "5596 °C", "137 pm", "760 kJ/mol", "Một trong những kim loại nóng chảy cao nhất. Dùng trong động cơ phản lực và xúc tác.",
	"Os", "Osmium", "190.23", 8, 6, "[Xe] 4f14 5d6 6s2", 2.2, "3033 °C", "5012 °C", "135 pm", "840 kJ/mol", "Một trong hai nguyên tố đặc nhất. Dùng làm hợp kim rất cứng, ngòi bút và tiếp điểm.",
	"Ir", "Iridium", "192.22", 9, 6, "[Xe] 4f14 5d7 6s2", 2.20, "2446 °C", "4428 °C", "136 pm", "880 kJ/mol", "Rất bền ăn mòn. Dùng trong bugi cao cấp; hợp kim platin-iridi từng làm chuẩn mét và kilôgam.",
	"Pt", "Platinum", "195.08", 10, 6, "[Xe] 4f14 5d9 6s1", 2.28, "1768.3 °C", "3825 °C", "139 pm", "870 kJ/mol", "Kim loại quý, bền hóa học. Dùng làm trang sức, xúc tác khí thải và thuốc chống ung thư cisplatin.",
	"Au", "Gold", "196.97", 11, 6, "[Xe] 4f14 5d10 6s1", 2.54, "1064.2 °C", "2856 °C", "144 pm", "890 kJ/mol", "Kim loại quý màu vàng, không gỉ. Dùng làm trang sức, dự trữ giá trị và linh kiện điện tử.",
	"Hg", "Mercury", "200.59", 12, 6, "[Xe] 4f14 5d10 6s2", 2.00, "-38.83 °C", "356.7 °C", "151 pm", "1007 kJ/mol", "Kim loại duy nhất ở thể lỏng ở nhiệt độ phòng. Từng dùng trong nhiệt kế; rất độc.",
	"Tl", "Thallium", "204.38", 13, 6, "[Xe] 4f14 5d10 6s2 6p1", 1.62, "304 °C", "1473 °C", "170 pm", "589 kJ/mol", "Kim loại mềm và rất độc. Dùng trong bộ dò hồng ngoại và một số thiết bị chẩn đoán tim.",
	"Pb", "Lead", "207.2", 14, 6, "[Xe] 4f14 5d10 6s2 6p2", 2.33, "327.5 °C", "1749 °C", "175 pm", "716 kJ/mol", "Nặng, mềm và độc. Dùng trong ắc quy axit-chì và làm tấm chắn bức xạ.",
	"Bi", "Bismuth", "208.98", 15, 6, "[Xe] 4f14 5d10 6s2 6p3", 2.02, "271.4 °C", "1564 °C", "155 pm", "703 kJ/mol", "Ít độc hơn các kim loại nặng khác. Dùng trong thuốc dạ dày và hợp kim nóng chảy ở nhiệt độ thấp.",
	"Po", "Polonium", "209", 16, 6, "[Xe] 4f14 5d10 6s2 6p4", 2.0, "254 °C", "962 °C", "167 pm", "812 kJ/mol", "Phóng xạ rất mạnh. Marie Curie đặt tên theo quê hương Ba Lan của bà.",
	"At", "Astatine", "210", 17, 6, "[Xe] 4f14 5d10 6s2 6p5", 2.2, "302 °C", "337 °C", "150 pm", "899 kJ/mol", "Nguyên tố tự nhiên hiếm nhất, phóng xạ. Đang được nghiên cứu cho điều trị ung thư.",
	"Rn", "Radon", "222", 18, 6, "[Xe] 4f14 5d10 6s2 6p6", 2.2, "-71 °C", "-61.7 °C", "120 pm", "1037 kJ/mol", "Khí phóng xạ sinh ra từ sự phân rã của urani. Tích tụ trong nhà kín là nguy cơ gây ung thư phổi.",
	"Fr", "Francium", "223", 1, 7, "[Rn] 7s1", 0.7, "27 °C", "677 °C", "—", "380 kJ/mol", "Kim loại kiềm cực hiếm và phóng xạ; đồng vị bền nhất chỉ có chu kỳ bán rã khoảng 22 phút.",
	"Ra", "Radium", "226", 2, 7, "[Rn] 7s2", 0.9, "700 °C", "1737 °C", "223 pm", "509 kJ/mol", "Phóng xạ. Từng dùng làm sơn dạ quang và trong xạ trị.",
	"Ac", "Actinium", "227", 4, 10, "[Rn] 6d1 7s2", 1.1, "1050 °C", "3200 °C", "188 pm", "499 kJ/mol", "Phóng xạ, phát ánh sáng xanh trong bóng tối. Dùng trong nghiên cứu y học hạt nhân.",
	"Th", "Thorium", "232.04", 5, 10, "[Rn] 6d2 7s2", 1.3, "1750 °C", "4788 °C", "180 pm", "587 kJ/mol", "Phóng xạ yếu, dồi dào hơn urani. Được nghiên cứu làm nhiên liệu hạt nhân.",
	"Pa", "Protactinium", "231.04", 6, 10, "[Rn] 5f2 6d1 7s2", 1.5, "1568 °C", "4027 °C", "161 pm", "568 kJ/mol", "Phóng xạ, rất hiếm. Chủ yếu dùng trong nghiên cứu khoa học.",
	"U", "Uranium", "238.03", 7, 10, "[Rn] 5f3 6d1 7s2", 1.38, "1132 °C", "4131 °C", "156 pm", "598 kJ/mol", "Nhiên liệu của lò phản ứng hạt nhân; đồng vị U-235 có thể phân hạch.",
	"Np", "Neptunium", "237", 8, 10, "[Rn] 5f4 6d1 7s2", 1.36, "644 °C", "3902 °C", "155 pm", "605 kJ/mol", "Nguyên tố siêu urani đầu tiên được tổng hợp, đặt tên theo hành tinh Hải Vương (Neptune).",
	"Pu", "Plutonium", "244", 9, 10, "[Rn] 5f6 7s2", 1.28, "640 °C", "3228 °C", "159 pm", "585 kJ/mol", "Dùng trong vũ khí hạt nhân và trong pin hạt nhân cho tàu thăm dò vũ trụ.",
	"Am", "Americium", "243", 10, 10, "[Rn] 5f7 7s2", 1.3, "1176 °C", "2011 °C", "173 pm", "578 kJ/mol", "Có trong đầu báo khói ion hóa gia dụng (Am-241).",
	"Cm", "Curium", "247", 11, 10, "[Rn] 5f7 6d1 7s2", 1.3, "1340 °C", "3110 °C", "174 pm", "581 kJ/mol", "Phóng xạ mạnh. Dùng trong máy phân tích APXS trên xe tự hành thăm dò sao Hỏa.",
	"Bk", "Berkelium", "247", 12, 10, "[Rn] 5f9 7s2", 1.3, "986 °C", "2627 °C", "170 pm", "601 kJ/mol", "Tổng hợp nhân tạo. Dùng làm bia để tổng hợp các nguyên tố nặng hơn.",
	"Cf", "Californium", "251", 13, 10, "[Rn] 5f10 7s2", 1.3, "900 °C", "1470 °C", "186 pm", "608 kJ/mol", "Phát ra neutron mạnh. Dùng khởi động lò phản ứng và trong thăm dò dầu khí.",
	"Es", "Einsteinium", "252", 14, 10, "[Rn] 5f11 7s2", 1.3, "860 °C", "996 °C", "186 pm", "619 kJ/mol", "Chỉ tổng hợp được lượng rất nhỏ. Đặt theo Albert Einstein.",
	"Fm", "Fermium", "257", 15, 10, "[Rn] 5f12 7s2", 1.3, "1527 °C", "—", "—", "627 kJ/mol", "Chỉ tạo ra được lượng cực nhỏ. Đặt theo Enrico Fermi.",
	"Md", "Mendelevium", "258", 16, 10, "[Rn] 5f13 7s2", 1.3, "827 °C", "—", "—", "635 kJ/mol", "Đặt theo Dmitri Mendeleev, người xây dựng bảng tuần hoàn.",
	"No", "Nobelium", "259", 17, 10, "[Rn] 5f14 7s2", 1.3, "827 °C", "—", "—", "642 kJ/mol", "Mỗi lần chỉ tạo được vài nguyên tử. Đặt theo Alfred Nobel.",
	"Lr", "Lawrencium", "266", 18, 10, "[Rn] 5f14 7s2 7p1", 1.3, "1627 °C", "—", "—", "470 kJ/mol", "Nguyên tố cuối của họ actini; chỉ nghiên cứu được trên vài nguyên tử.",
	"Rf", "Rutherfordium", "267", 4, 7, "[Rn] 5f14 6d2 7s2", null, "—", "—", "—", "580 kJ/mol", "Nguyên tố siêu nặng, chỉ tổng hợp nhân tạo và tồn tại rất ngắn. Đặt theo Ernest Rutherford.",
	"Db", "Dubnium", "268", 5, 7, "[Rn] 5f14 6d3 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo thị trấn Dubna của Nga.",
	"Sg", "Seaborgium", "269", 6, 7, "[Rn] 5f14 6d4 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo Glenn Seaborg.",
	"Bh", "Bohrium", "270", 7, 7, "[Rn] 5f14 6d5 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo Niels Bohr.",
	"Hs", "Hassium", "277", 8, 7, "[Rn] 5f14 6d6 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo bang Hessen của Đức.",
	"Mt", "Meitnerium", "278", 9, 7, "[Rn] 5f14 6d7 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo nhà vật lý Lise Meitner.",
	"Ds", "Darmstadtium", "281", 10, 7, "[Rn] 5f14 6d8 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo thành phố Darmstadt của Đức.",
	"Rg", "Roentgenium", "282", 11, 7, "[Rn] 5f14 6d9 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo Wilhelm Röntgen, người phát hiện tia X.",
	"Cn", "Copernicium", "285", 12, 7, "[Rn] 5f14 6d10 7s2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo Nicolaus Copernicus.",
	"Uut", "Ununtrium", "284", 13, 7, "[Rn] 5f14 6d10 7s2 7p1", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo, sau này được đặt tên là Nihonium (Nh).",
	"Fl", "Flerovium", "289", 14, 7, "[Rn] 5f14 6d10 7s2 7p2", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo Phòng thí nghiệm Flerov ở Dubna.",
	"Uup", "Ununpentium", "288", 15, 7, "[Rn] 5f14 6d10 7s2 7p3", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo, sau này được đặt tên là Moscovium (Mc).",
	"Lv", "Livermorium", "293", 16, 7, "[Rn] 5f14 6d10 7s2 7p4", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo. Đặt theo Phòng thí nghiệm Lawrence Livermore.",
	"Uus", "Ununseptium", "294", 17, 7, "[Rn] 5f14 6d10 7s2 7p5", null, "—", "—", "—", "—", "Nguyên tố siêu nặng, tổng hợp nhân tạo, sau này được đặt tên là Tennessine (Ts).",
	"Uuo", "Ununoctium", "294", 18, 7, "[Rn] 5f14 6d10 7s2 7p6", null, "—", "—", "—", "—", "Nguyên tố nặng nhất đã biết, tổng hợp nhân tạo. Sau này được đặt tên là Oganesson (Og)."
];

var nameVi = {
	"Hydrogen":"Hydro","Helium":"Heli","Lithium":"Liti","Beryllium":"Beri","Boron":"Bo","Carbon":"Cacbon",
	"Nitrogen":"Nitơ","Oxygen":"Oxy","Fluorine":"Flo","Neon":"Neon","Sodium":"Natri","Magnesium":"Magie",
	"Aluminium":"Nhôm","Silicon":"Silic","Phosphorus":"Photpho","Sulfur":"Lưu huỳnh","Chlorine":"Clo","Argon":"Agon",
	"Potassium":"Kali","Calcium":"Canxi","Scandium":"Scandi","Titanium":"Titan","Vanadium":"Vanadi","Chromium":"Crom",
	"Manganese":"Mangan","Iron":"Sắt","Cobalt":"Coban","Nickel":"Niken","Copper":"Đồng","Zinc":"Kẽm",
	"Gallium":"Gali","Germanium":"Gecmani","Arsenic":"Asen","Selenium":"Selen","Bromine":"Brom","Krypton":"Kripton",
	"Rubidium":"Rubidi","Strontium":"Stronti","Yttrium":"Ytri","Zirconium":"Zirconi","Niobium":"Niobi","Molybdenum":"Molipden",
	"Technetium":"Tecneti","Ruthenium":"Rutheni","Rhodium":"Rodi","Palladium":"Paladi","Silver":"Bạc","Cadmium":"Cadimi",
	"Indium":"Indi","Tin":"Thiếc","Antimony":"Antimon","Tellurium":"Telu","Iodine":"Iot","Xenon":"Xenon",
	"Caesium":"Xesi","Barium":"Bari","Lanthanum":"Lantan","Cerium":"Xeri","Praseodymium":"Praseodymi","Neodymium":"Neodymi",
	"Promethium":"Prometi","Samarium":"Samari","Europium":"Europi","Gadolinium":"Gadolini","Terbium":"Tecbi","Dysprosium":"Dysprosi",
	"Holmium":"Honmi","Erbium":"Eribi","Thulium":"Tuli","Ytterbium":"Ytecbi","Lutetium":"Luteti","Hafnium":"Hafni",
	"Tantalum":"Tantan","Tungsten":"Vonfram","Rhenium":"Reni","Osmium":"Osmi","Iridium":"Iridi","Platinum":"Platin",
	"Gold":"Vàng","Mercury":"Thủy ngân","Thallium":"Tali","Lead":"Chì","Bismuth":"Bitmut","Polonium":"Poloni",
	"Astatine":"Astatin","Radon":"Radon","Francium":"Franxi","Radium":"Radi","Actinium":"Actini","Thorium":"Thori",
	"Protactinium":"Protactini","Uranium":"Urani","Neptunium":"Neptuni","Plutonium":"Plutoni","Americium":"Americi",
	"Curium":"Curi","Berkelium":"Berkeli","Californium":"Californi","Einsteinium":"Einsteini","Fermium":"Fermi",
	"Mendelevium":"Mendelevi","Nobelium":"Nobeli","Lawrencium":"Lorenxi","Rutherfordium":"Rutherfordi","Dubnium":"Dubni",
	"Seaborgium":"Seabogi","Bohrium":"Bohri","Hassium":"Hassi","Meitnerium":"Meitneri","Darmstadtium":"Darmstadti",
	"Roentgenium":"Rơnghen","Copernicium":"Copernixi","Ununtrium":"Ununtri","Flerovium":"Flerovi",
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
	"lantan", "lantan", "lantan", "lantan", "lantan", "lantan", "lantan", "lantan",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp", "kim loại chuyển tiếp",
	"kim loại chuyển tiếp", "kim loại yếu", "kim loại yếu", "kim loại yếu", "kim loại yếu",
	"á kim", "halogen", "khí hiếm",
	"kim loại kiềm", "kim loại kiềm thổ",
	"actini", "actini", "actini", "actini", "actini", "actini", "actini",
	"actini", "actini", "actini", "actini", "actini", "actini", "actini", "actini",
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

var NOBLE_CORE = {
	"He": [2],
	"Ne": [2, 8],
	"Ar": [2, 8, 8],
	"Kr": [2, 8, 18, 8],
	"Xe": [2, 8, 18, 18, 8],
	"Rn": [2, 8, 18, 32, 18, 8]
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

	for ( var i = 0; i < table.length; i += 12 ) {

		var idx = i / 12;
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
			config: table[ i + 5 ],
			en: table[ i + 6 ],
			melt: table[ i + 7 ],
			boil: table[ i + 8 ],
			radius: table[ i + 9 ],
			ie: table[ i + 10 ],
			note: table[ i + 11 ],
			category: cat
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

function shellsFromConfig( config ) {

	var shells = [];

	var tokens = config.split( ' ' );

	for ( var t = 0; t < tokens.length; t ++ ) {

		var tok = tokens[ t ];
		var coreMatch = tok.match( /^\[(\w+)\]$/ );

		if ( coreMatch ) {
			shells = NOBLE_CORE[ coreMatch[ 1 ] ].slice();
			continue;
		}

		var m = tok.match( /^(\d)([spdf])(\d+)$/ );

		if ( m ) {
			var n = parseInt( m[ 1 ], 10 ) - 1;
			var cnt = parseInt( m[ 3 ], 10 );
			shells[ n ] = ( shells[ n ] || 0 ) + cnt;
		}

	}

	return shells.map( function( v ) { return v || 0; } );

}

function drawBohr( symbol, z, config, color ) {

	var shells = shellsFromConfig( config );
	var n = shells.length;
	var step = n > 1 ? Math.min( 13, ( 88 - 22 ) / ( n - 1 ) ) : 0;

	var svg = '<svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">';

	for ( var i = 0; i < n; i ++ ) {

		var r = 22 + i * step;
		svg += '<circle class="bohr-ring" r="' + r.toFixed( 1 ) + '"/>';

		var cnt = shells[ i ];
		var dots = '';

		for ( var k = 0; k < cnt; k ++ ) {
			var a = 2 * Math.PI * k / cnt + i * 0.6;
			dots += '<circle class="bohr-dot" cx="' + ( r * Math.cos( a ) ).toFixed( 2 ) + '" cy="' + ( r * Math.sin( a ) ).toFixed( 2 ) + '" r="2.4"/>';
		}

		var dur = ( 14 + i * 6 );
		var dir = ( i % 2 === 0 ) ? 1 : -1;
		var anim = '<animateTransform attributeName="transform" type="rotate" from="0 0 0" to="' + ( dir * 360 ) + ' 0 0" dur="' + dur + 's" repeatCount="indefinite"/>';

		svg += '<g>' + dots + anim + '</g>';

	}

	svg += '<circle class="bohr-core" r="12"/>';
	svg += '<text>' + z + '+</text>';
	svg += '</svg>';

	var cap = '<div class="bohr-cap">' + shells.join( ' · ' ) + '</div>';

	return svg + cap;

}

function showPopup( data ) {

	document.getElementById( 'popup-symbol' ).textContent = data.symbol;
	document.getElementById( 'popup-name' ).textContent = data.name;
	document.getElementById( 'popup-latin' ).textContent = data.latin;
	document.getElementById( 'popup-mass' ).textContent = data.mass + ' amu';

	var groupText = groupRoman[ data.group ] || data.group;
	document.getElementById( 'popup-group' ).textContent = groupText;
	document.getElementById( 'popup-period' ).textContent = data.period;
	document.getElementById( 'popup-number' ).textContent = data.number;
	document.getElementById( 'popup-config' ).textContent = data.config;
	document.getElementById( 'popup-en' ).textContent = data.en === null ? '—' : data.en;
	document.getElementById( 'popup-melt' ).textContent = data.melt;
	document.getElementById( 'popup-boil' ).textContent = data.boil;
	document.getElementById( 'popup-radius' ).textContent = data.radius;
	document.getElementById( 'popup-ie' ).textContent = data.ie;
	document.getElementById( 'popup-val' ).textContent = '—';

	var catBadge = document.getElementById( 'popup-category' );
	catBadge.textContent = categoryNames[ data.category ];
	catBadge.style.backgroundColor = categoryColors[ data.category ];

	var color = categoryColors[ data.category ];
	document.getElementById( 'popup-bohr' ).innerHTML = drawBohr( data.symbol, data.number, data.config, color );

	document.getElementById( 'popup-note' ).textContent = data.note;

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
