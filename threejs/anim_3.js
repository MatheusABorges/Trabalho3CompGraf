

function RunAnimation() {}

Object.assign( RunAnimation.prototype, {
    init: function() {
        let TorsoTween = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/10 *-1} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let torso =  robot.getObjectByName("torso");

            torso.matrix.makeRotationZ(this._object.theta);


            // Updating final world matrix (with parent transforms) - mandatory
            torso.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })



        let lowerRightArmTween = new TWEEN.Tween( {theta:0} )
            .to({theta:(Math.PI)/1.6 } , 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let right_lower_arm =  robot.getObjectByName("right_lower_arm");

                right_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(1.2, -1.52, 0 ) );


                // Updating final world matrix (with parent transforms) - mandatory
                right_lower_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);
            })

        let lowerLeftArmTween = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/1.6 } , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let left_lower_arm =  robot.getObjectByName("left_lower_arm");

            left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(1.2, -1.52, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            left_lower_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })
        
        let upperLeftLegTween = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/6 } , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let left_upper_leg =  robot.getObjectByName("left_upper_leg");

            left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-0.5, -4, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            left_upper_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let upperRightLegTween = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/6 } , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let right_upper_leg =  robot.getObjectByName("right_upper_leg");

            right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(2, -4, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            right_upper_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let lowerRightLegTween = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/3 *-1} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let right_lower_leg =  robot.getObjectByName("right_lower_leg");

            right_lower_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-0.5, -2.7, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            right_lower_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let lowerLeftLegTween = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/3 *-1} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let left_lower_leg =  robot.getObjectByName("left_lower_leg");

            left_lower_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-0.5, -2.7, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            left_lower_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        
        TorsoTween.start();
        lowerLeftArmTween.start();
        lowerRightArmTween.start();
        upperLeftLegTween.start();
        upperRightLegTween.start();
        lowerRightLegTween.start();


        let upperLeftLegTween_ = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/3} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let left_upper_leg =  robot.getObjectByName("left_upper_leg");

            left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(0.2, -4.1, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            left_upper_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let upperRightArmTween_ = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/3} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let right_upper_arm =  robot.getObjectByName("right_upper_arm");

            right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(3, 1.7, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            right_upper_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let upperLeftLegTween_volta = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/9*-1} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let left_upper_leg =  robot.getObjectByName("left_upper_leg");

            left_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-0.9, -4.1, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            left_upper_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let upperRightArmTween_volta = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/9*-1} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let right_upper_arm =  robot.getObjectByName("right_upper_arm");

            right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(2.4, 1, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            right_upper_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        
        let upperLeftArmTween_ = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/3} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let left_upper_arm =  robot.getObjectByName("left_upper_arm");

            left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-1, 1.7, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            left_upper_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let upperRightLegTween_ = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/3} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let right_upper_leg =  robot.getObjectByName("right_upper_leg");

            right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(3, -4.1, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            right_upper_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })


        let upperRightLegTween_volta = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/9*-1} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let right_upper_leg =  robot.getObjectByName("right_upper_leg");

            right_upper_leg.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(2, -4, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            right_upper_leg.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })

        let upperLeftArmTween_volta = new TWEEN.Tween( {theta:0} )
        .to({theta:(Math.PI)/9*-1} , 500)
        .onUpdate(function(){
            // This is an example of rotation of the right_upper_arm 
            // Notice that the transform is M = T * R 
            let left_upper_arm =  robot.getObjectByName("left_upper_arm");

            left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-2.4, 1, 0 ) );


            // Updating final world matrix (with parent transforms) - mandatory
            left_upper_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);
        })



        lowerLeftLegTween.chain(upperLeftLegTween_, upperRightArmTween_);
        upperLeftLegTween_.chain(upperRightLegTween_volta, upperLeftArmTween_volta);
        upperRightLegTween_volta.chain(upperLeftArmTween_, upperRightLegTween_);
        upperLeftArmTween_.chain(upperRightArmTween_volta, upperLeftLegTween_volta);
        upperRightArmTween_volta.chain(upperLeftLegTween_, upperRightArmTween_);
        lowerLeftLegTween.start();


    },
    animate: function(time) {
        window.requestAnimationFrame(this.animate.bind(this));
        TWEEN.update(time);
    },
    run: function() {
        this.init();
        this.animate(0);
    }
});
