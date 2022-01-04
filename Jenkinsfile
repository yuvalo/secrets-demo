pipeline {
    agent {
      kubernetes {
      label 'node-demo'
      defaultContainer 'jnlp'
      yaml """
apiVersion: v1
kind: Pod
metadata:
labels:
  component: ci
spec:
  # Use service account that can deploy to all namespaces
  serviceAccountName: jenkins
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug
    command:
    - sleep
    args:
    - 9999999
    volumeMounts:
    - name: docker-config
      mountPath: /kaniko/.docker/
    restartPolicy: Never
  volumes:
  - name: docker-config
    configMap:
      name: docker-config    
"""
}
    }

    stages {
        stage('Build') {
            steps {
                container("kaniko") {
                  sh "/kaniko/executor --context='.' --destination='803451143552.dkr.ecr.eu-west-1.amazonaws.com/node-demo:${GIT_COMMIT[0..7]}'"
                }
            }
        }
        stage('Test') {
            input{
               message "Move to testing?"
           }     
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            input{
               message "Move to deploy?"
           }               
            steps {
                echo 'Deploying....'
            }
        }
    }
}