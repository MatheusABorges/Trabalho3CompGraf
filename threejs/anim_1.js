function WaveAnimation() {}

Object.assign( WaveAnimation.prototype, {
    init: function() {
        let upperRightArmTween = new TWEEN.Tween( {theta:0} )
            .to({theta:Math.PI/2 } , 500)
            .onUpdate(function(){
                // This is an example of rotation of the right_upper_arm 
                // Notice that the transform is M = T * R 
                let right_upper_arm =  robot.getObjectByName("right_upper_arm");
                //let right_upper_arm = robot.getObjectByName("torso");
                right_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(3.8, 2, 0 ) );


                // Updating final world matrix (with parent transforms) - mandatory
                right_upper_arm.updateMatrixWorld(true);
                // Updating screen
                stats.update();
                renderer.render(scene, camera);    
            })

        // Here you may include animations for other parts 

        let lowerRightArmTween = new TWEEN.Tween( {theta:0} )
        .to({theta: Math.PI/2}, 500)
        .onUpdate(function(){
            let left_lower_arm = robot.getObjectByName("right_lower_arm");

            left_lower_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(1.8, -2.5, 0))
            

            left_lower_arm.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);  

        })


        let rightHandTween = new TWEEN.Tween( {theta:0})
        .to({theta: (Math.PI)/7}, 500)
        .onUpdate(function(){
            let right_hand = robot.getObjectByName("right_hand");

            right_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(0, -1.5, 0));

            right_hand.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);  
        })

        let rightHandTween_2 = new TWEEN.Tween( {theta: 0})
        .to({theta: '-0.5'}, 500)
        .onUpdate(function(){
            let right_hand = robot.getObjectByName("right_hand");
            right_hand.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(0, -1.5, 0));

            right_hand.updateMatrixWorld(true);
            // Updating screen
            stats.update();
            renderer.render(scene, camera);  
        })

        let leftUpperArmTween = new TWEEN.Tween( {theta: 0})
        .to({theta : -1*(Math.PI/20)}, 500)
        .onUpdate(function(){
            let left_upper_arm = robot.getObjectByName("left_upper_arm");
            left_upper_arm.matrix.makeRotationZ(this._object.theta).premultiply( new THREE.Matrix4().makeTranslation(-3, 1, 0 ) );

            left_upper_arm.updateMatrixWorld(true);
            stats.update();
            renderer.render(scene, camera);
        })

        leftUpperArmTween.start();
        upperRightArmTween.chain(lowerRightArmTween);
        lowerRightArmTween.chain(rightHandTween);
        rightHandTween.chain(rightHandTween_2);
        rightHandTween_2.chain(rightHandTween);
        upperRightArmTween.start();

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




