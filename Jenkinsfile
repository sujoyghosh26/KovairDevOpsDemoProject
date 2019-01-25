pipeline
{
	agent none
	stages
	{
		stage('build')
		{
			agent { label 'master' }
			
			steps
			{
				git 'ssh://kovair@192.168.11.90:22/home/kovair/MyGitFiles/DevOpsDemoApplication.git'
				
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
					sh 'cp target/*.war /home/kovair/ApplicationWar/'
					
					
					
					
					
					echo '************ Pushing the war files to ssh://kovair@192.168.11.90:22/home/kovair/MyGitFiles/WarRepository.git ************' 
					
				    
				    sh '''
				        whoami
				        cd /home/kovair/ApplicationWar/
						git add .
						git commit -m "War updated."
						git push origin master
						
						'''
				    
					echo '***************** Deploying the files to Deployment server using Chef  ******************'
					
					sh '''
					
						knife bootstrap 192.168.11.175 -x kovair -P kovair@123 --sudo --node-name nodeVMDeploy --run-list "recipe[deploy_to_vm]" -y
					
					'''
					
					
					
					/*
					echo '************Copying the war file to Chef Deployment directory************'
					sh 'cp target/*.war /home/kovair/chef-repo/cookbooks/deploy_to_vm/files/default'
					knife cookbook upload deploy_to_vm
					*/
					
					/*
					echo '************Uploading Cookbook and deploying war file to VM***************'
					sh '''cd /home/kovair/chef-repo
							
							knife bootstrap 192.168.11.175 -x kovair -P kovair@123 --sudo --node-name nodeVMDeploy --run-list \'recipe[deploy_to_vm]\' -y'''
							
				    */
				    
				    
				    /*
				    echo '************Deploying the war file in Docker. To be kept after Test stage***************'
				    knife bootstrap 192.168.11.109 -x kovair -P kovair@123 --sudo --node-name nodeDockerDeploy --run-list 'recipe[deploy_to_docker]' -y
				    
				    
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
