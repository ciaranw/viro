/**
 * Copyright (c) 2015-present, Viro Media, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "YOUR_API_KEY_HERE";

var vrScenes = {
    'PhysicsSample': require('./js/PhysicsSample/BasicPhysicsSample'),
}

var ViroCodeSamplesSceneNavigator = createReactClass({
  render: function() {
      return (
        <ViroVRSceneNavigator
          initialScene={{
            scene: vrScenes['PhysicsSample'],
          }}
          apiKey={apiKey} />
      );
  }
});

module.exports = ViroCodeSamplesSceneNavigator;
