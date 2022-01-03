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
  - name: alpine
    image: alpine:latest
    command:
    - cat
    tty: true
 - name: kaniko
    image: gcr.io/kaniko-project/executor:latest
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
                  sh "/kaniko/executor --context='.' --destination='803451143552.dkr.ecr.eu-west-1.amazonaws.com/node-demo:${GIT_REVISION,length=6}'"
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}