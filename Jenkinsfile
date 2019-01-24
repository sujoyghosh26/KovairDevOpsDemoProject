pipeline
{
	agent none
	stages
	{
		stage('build')
		{
			agent { label 'master' }
			environment {
			    GITSCMCredentials = credentials('dc8a4f0d-fc8c-406d-aba0-34304d41de78')
			}
			steps
			{
				git 'https://github.com/prasenjitkovair/DevOpsDemoApp.git'
				
				script {
                    def mvn_version = 'maven_3_5_4'
					withEnv( ["PATH+MAVEN=${tool mvn_version}/bin"] ) {
					  sh "mvn clean install"
					}
				
                }
				
				
			}
			
			post
			{ 
				success {

				
					echo '************Archiving the Artifact..****************'
					archiveArtifacts artifacts: 'target/*.war'
					
					
					echo '************Copying the war file to War Git working directory ************'
					sh 'cp target/*.war /home/kovair/DevOpsApplicationWar'
					
					
					
					
					
					echo '************ Pushing the war files to ssh://kovair@192.168.11.90:22//home/kovair/MyGitFiles/ApplicationWarRepository.git ************' 
					
					withCredentials([string(credentialsId: 'dc8a4f0d-fc8c-406d-aba0-34304d41de78', variable: '')]) {
				         
				    }
						
						
                    
					
	                
					
					
					
					
					
					/*
					echo '************Copying the war file to Chef Deployment directory************'
					sh 'cp target/*.war /home/kovair/chef-repo/cookbooks/deploy_to_vm/files/default'
					
					echo '************Uploading Cookbook and deploying war file to VM***************'
					sh '''cd /home/kovair/chef-repo
							knife cookbook upload deploy_to_vm
							knife bootstrap 192.168.11.100 -x kovair -P kovair@123 --sudo --node-name nodeVMDeploy --run-list \'recipe[deploy_to_vm]\' -y'''
							
				    */

				}
			}
			
		}
		
		stage('test')
		{
			agent { label 'testnode' }
			steps
			{
				echo 'testing..'
			}
		}
	}
	
}
